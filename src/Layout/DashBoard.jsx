import { FaHome, FaSearch, FaShoppingCart } from "react-icons/fa";
import {
  FaCalendar,
  FaList,
  FaMoneyBill,
  FaRankingStar,
} from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../Hooks/useCart";

const DashBoard = () => {
  const [cart] = useCart();
  return (
    <div className="flex">
      {/* side bar */}
      <div className="w-64 min-h-screen bg-orange-500">
        <ul className="menu p-4">
          <li>
            <NavLink to="/dashboard/userHome">
              <FaHome></FaHome>
              User Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/reservation">
              <FaCalendar></FaCalendar>
              Reservation
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/payment">
              <FaMoneyBill></FaMoneyBill>
              Payment History
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/review">
              <FaRankingStar></FaRankingStar>
              User Review
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/cart">
              <FaShoppingCart></FaShoppingCart>
              My Cart ({cart.length})
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/bookings">
              <FaList></FaList>
              My Bookings
            </NavLink>
          </li>
          <div className="divider"></div>
          <li>
            <NavLink to="/">
              <FaHome></FaHome>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/order/salad">
              <FaSearch></FaSearch>
              Menu
            </NavLink>
          </li>
        </ul>
      </div>
      {/* dashboard content */}
      <div className="flex-1 p-8 ">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default DashBoard;
