import { Provider } from "@supabase/supabase-js";
import { supabase } from "../supabaseClient";
import "./Login.css";
import { Outlet } from "react-router-dom";
import backgroundImage from "../assets/img/annie-spratt-QKo-op_gR9I-unsplash.png";

const Login = () => {
  const signIn = async (provider: Provider) => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider,
    });
  };

  return (
    <div>
      <div
        className="image"
        style={{ backgroundImage: `url("${backgroundImage}")` }}
      >
        <div className="container_login">
          <h1 className="login_text">
            Welcome to your custom advent calender!
          </h1>
          <h2 className="login_text">Sign in with:</h2>
          <button onClick={() => signIn("github")}>GitHub</button>
          <button onClick={() => signIn("google")}>Google</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
