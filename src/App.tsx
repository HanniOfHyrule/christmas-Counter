import React, { useState, useEffect } from "react";
import "./App.css";
import CountDown from "./components/CountDown";
import { User } from "@supabase/supabase-js";
import { supabase } from "./supabaseClient";
import Login from "./components/Login";
import { createHashRouter, Outlet, RouterProvider } from "react-router-dom";
import Calender from "./components/Calender";
import Main from "./components/Main";

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
      element: <Main />,
      children: [
        {
          path: "/countdown",
          element: <CountDown />,
        }, 
      ],
      {
          path: "/login",
          element: <Login />,
        },

        {
          index: true,
          element: user ? <Calender /> : <Login />,
        },
    },
  ]);
  return (
    <React.Fragment>
      <RouterProvider router={router} />
      <Outlet />
    </React.Fragment>
  );
}

export default App;
