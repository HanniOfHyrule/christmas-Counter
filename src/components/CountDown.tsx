import React, { useState, useEffect } from "react";
import "./countdown.css";

// import backgrounImage from "../img/annie-spratt-QKo-op_gR9I-unsplash.jpg";

const CountDown = () => {
  const [days, setDays] = useState<string | number>("H");
  const [hours, setHours] = useState<string | number>("O");
  const [minutes, setMinutes] = useState<string | number>("H");
  const [seconds, setSeconds] = useState<string | number>("O");

  const coutner = () => {
    const endDate = new Date("December 24, 2022 17:00:00").getTime();
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
        // style={{ backgroundImage: `url("${backgroundImage}")` }}
      >
        Weihnachten Foto erstellt von freepik-de.freepik.com
        <style></style>
        <div></div>
        <section className="container">
          <h1>Christmas Countdown</h1>
          <div className="countdown">
            <article>
              <p>{days}</p>
              <h3>Days</h3>
            </article>
            <article>
              <p>{hours}</p>
              <h3>Hours</h3>
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
        </section>
      </div>
    </React.Fragment>
  );
};

export default CountDown;
