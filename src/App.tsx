import React, { useState, useEffect } from "react";
import "./App.css";
import CountDown from "./components/CountDown";
import { User } from "@supabase/supabase-js";
import { supabase } from "./supabaseClient";
import Login from "./components/Login";
import { createHashRouter, RouterProvider } from "react-router-dom";
import Calender from "./components/Calender";
import ChristmasAnimation from "./components/ChristmasAnimation";

function App() {
  const [user, setUser] = useState<undefined | User>();

  useEffect(() => {
    supabase.auth.getSession().then((x) => {
      setUser(x.data.session?.user);
    });
  }, []);

  const router = createHashRouter([
    {
      path: "/",
      element: <CountDown />,
    },
    {
      path: "/animation",
      element:
        new Date("2023-12-24, 17:00:00") > new Date() &&
        new Date("2023-12-27") < new Date() ? (
          <ChristmasAnimation />
        ) : (
          <CountDown />
        ),
    },
    {
      path: "/calender",
      element: user ? <Calender /> : <Login />,
    },
  ]);
  return (
    <React.Fragment>
      <RouterProvider router={router} />
    </React.Fragment>
  );
}

export default App;
