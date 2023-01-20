import "./Calender.scss";
import { Link, Routes } from "react-router-dom";
import ChallengeCalender from "./ChallengeCalender";

const Calender = () => {
  return (
    <div className="header_image">
      <div className="calender_container">
        <h1>Costumize your personal calender </h1>
        <h2>
          You can choose. Would you like to start a challenge and design it
          yourself or set and send your personalized advent calendar.
        </h2>
      </div>
      <div className="container_wrapper">
        <div className="element_wrapper">
          <div className="element"></div>
          <p>Calender</p>
        </div>

        <div className="challenge_wrapper">
          <div>
            <h3>Challenge calender</h3>
          </div>
          <div className="month">
            <button>
              <Link to="/31">31 Days</Link>
            </button>
            <button>
              <Link to="/30">30 Days</Link>
            </button>
            <button>
              <Link to="/28">28 Days</Link>
            </button>
          </div>
        </div>
        <div className="advent_calender_wrapper">
          <h4>Advent Calender</h4>
          <div className="advent">
            <button>
              <Link to="/24">24 Days</Link>
            </button>
          </div>
        </div>
      </div>
      <Routes></Routes>
    </div>
  );
};

export default Calender;
