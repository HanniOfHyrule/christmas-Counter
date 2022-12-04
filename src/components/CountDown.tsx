import React, { useState, useEffect } from "react";
import "./countdown.css";
import backgroundImage from "../img/annie-spratt-QKo-op_gR9I-unsplash.png";

const CountDown = () => {
  const [days, setDays] = useState<string | number>("H");
  const [hours, setHours] = useState<string | number>("O");
  const [minutes, setMinutes] = useState<string | number>("H");
  const [seconds, setSeconds] = useState<string | number>("O");

  const coutner = () => {
    const getCurrentYear = new Date().getFullYear();
    console.log(getCurrentYear);
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

  useEffect(() => {
    setInterval(coutner, 1000);
  });

  return (
    <React.Fragment>
      {" "}
      <div
        className="image"
        style={{ backgroundImage: `url("${backgroundImage}")` }}
      >
        {" "}
        <style></style>
        <div></div>
        <section className="container">
          <h1>Christmas Countdown</h1>
          <div className="countdown">
            <article>
              <p>{days}</p>
              <h3>days</h3>
            </article>
            <article>
              <p>{hours}</p>
              <h3>hours</h3>
            </article>
            <article>
              <p>{minutes}</p>
              <h3>min</h3>
            </article>
            <article>
              <p>{seconds}</p>
              <h3>sec</h3>
            </article>
          </div>
          <label className="calender">
            Coming soon, add your own advent calender
          </label>
          <button className="calender_button">
            customize your advent Calendar
          </button>
        </section>
      </div>
    </React.Fragment>
  );
};

export default CountDown;
