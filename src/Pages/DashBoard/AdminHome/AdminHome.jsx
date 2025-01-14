import React from "react";
import useAuth from "../../../Hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { FaDollarSign, FaUser } from "react-icons/fa6";
import { FaCar, FaUtensils } from "react-icons/fa";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  PieChart,
  Pie,
  
  ResponsiveContainer,
} from "recharts";

const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
const AdminHome = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: stats = {} } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/admin-stat");
      return res.data;
    },
  });
  const { data: chartData = [] } = useQuery({
    queryKey: ["order-stat"],
    queryFn: async () => {
      const res = await axiosSecure.get("/order-stat");
      return res.data;
    },
  });
  // custom shape for bar chart
  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${
      x + width / 2
    },${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
      x + width
    }, ${y + height}
  Z`;
  };

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };
  //   pie
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };
  return (
    <div className="flex justify-center items-center flex-col">
      <h2 className="text-3xl  text-center">
        <span>Hi, Welcome </span>
        {user?.displayName ? user.displayName : "Back"}
      </h2>
      <div className="stats shadow mt-8  ">
        <div className="stat  ">
          <div className="stat-figure text-3xl text-secondary">
            <FaDollarSign></FaDollarSign>
          </div>
          <div className="stat-title">Revenue</div>
          <div className="stat-value">{stats.revenue}</div>
          <div className="stat-desc">Jan 1st - Feb 1st</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-3xl text-secondary">
            <FaUser></FaUser>
          </div>
          <div className="stat-title">Users</div>
          <div className="stat-value">{stats.users}</div>
          <div className="stat-desc">↗︎ 400 (22%)</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-3xl text-secondary">
            <FaCar></FaCar>
          </div>
          <div className="stat-title">Orders</div>
          <div className="stat-value">{stats.orders}</div>
          <div className="stat-desc">↘︎ 90 (14%)</div>
        </div>
        <div className="stat">
          <div className="stat-figure text-3xl text-secondary">
            <FaUtensils></FaUtensils>
          </div>
          <div className="stat-title">Menu Items</div>
          <div className="stat-value">{stats.menuItems}</div>
          <div className="stat-desc">↘︎ 90 (14%)</div>
        </div>
      </div>
      {/* bar charts */}
      <div className="flex justify-evenly gap-5">
        <div>
          <BarChart
            width={500}
            height={300}
            data={chartData}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="Category" />
            <YAxis />
            <Bar
              dataKey="Quantity"
              fill="#8884d8"
              shape={<TriangleBar />}
              label={{ position: "top" }}
            >
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % 6]} />
              ))}
            </Bar>
          </BarChart>
        </div>
        <div>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart width={400} height={400}>
              <Pie
                data={chartData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {chartData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
