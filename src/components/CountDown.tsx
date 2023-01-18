import React, { useState } from "react";
import "./Countdown.css";
import backgroundImage from "../assets/img/annie-spratt-QKo-op_gR9I-unsplash.png";
import { useNavigate } from "react-router-dom";

const CountDown = () => {
  const [days, setDays] = useState<string | number>("H");
  const [hours, setHours] = useState<string | number>("O");
  const [minutes, setMinutes] = useState<string | number>("H");
  const [seconds, setSeconds] = useState<string | number>("O");

  const coutner = () => {
    const getCurrentYear = new Date().getFullYear();

    const endDate = new Date(
      `December 24, ${getCurrentYear} 17:00:00`
    ).getTime();
    const today = new Date().getTime();

    const remainingTime = endDate - today;

    const seconds = Math.floor((remainingTime / 1000) % 60);
    const minutes = Math.floor((remainingTime / 1000 / 60) % 60);
    const hours = Math.floor((remainingTime / (1000 * 60 * 60)) % 24);
    const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));

    setSeconds(seconds);
    setMinutes(minutes);
    setHours(hours);
    setDays(days);
  };

  setInterval(coutner, 1000);

  const navigate = useNavigate();

  return (
    <React.Fragment>
      <div
        className="image"
        style={{ backgroundImage: `url("${backgroundImage}")` }}
      >
        <style></style>
        <div></div>
        <section className="container">
          <h1>Christmas Countdown</h1>
          <div className="countdown">
            <article>
              <p className="count_time">{days}</p>
              <p className="date">days</p>
            </article>
            <article>
              <p className="count_time">{hours}</p>
              <p className="date">hours</p>
            </article>
            <article>
              <p className="count_time">{minutes}</p>
              <p className="date">min</p>
            </article>
            <article>
              <p className="count_time">{seconds}</p>
              <p className="date">sec</p>
            </article>
          </div>
          <label className="calender">
            Coming soon, add your own advent calender!
          </label>
          <button
            className="calender_button"
            onClick={() => navigate("/calender")}
          >
            customize your advent calendar
          </button>
        </section>
      </div>
    </React.Fragment>
  );
};

export default CountDown;
