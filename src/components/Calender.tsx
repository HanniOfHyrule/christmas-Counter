import "./Calender.scss";
import { Link } from "react-router-dom";

const Calender = () => {
  return (
    <div className="calender_container">
      <div>
        <p>Costumize here your personal calender: </p>
        <p>Month</p>
      </div>
      <div className="month">
        <button>
          <Link to="/31">31 Days</Link>
        </button>
        <button>30 Days</button>
        <button>28 Days</button>
      </div>
      <p>Advent Calender</p>
      <div className="advent">
        <button>24 Days</button>
      </div>
    </div>
  );
};

export default Calender;
