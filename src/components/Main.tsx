import { Outlet } from "react-router-dom";
import backgroundImage from "../assets/img/annie-spratt-QKo-op_gR9I-unsplash.png";
import CountDown from "./CountDown";

export default function Main() {
  return (
    <div>
      <div
        className="image"
        style={{ backgroundImage: `url("${backgroundImage}")` }}
      >
        <CountDown />
      </div>
      <Outlet />
    </div>
  );
}
