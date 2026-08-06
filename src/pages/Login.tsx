import { useState } from "react";
import { supabase } from "../supabaseClient";
import "./Signup.css";
import logo from "../assets/logo.png";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {

    if (!email || !password) {
      alert("Email aur password dalo");
      return;
    }

    const { data, error } = await supabase.auth.signInWithPassword({
  email,
  password,
});

if (error) {
  alert(error.message);
  return;
}

const { data: profile, error: profileError } = await supabase
  .from("profiles")
  .select("*")
  .eq("id", data.user.id)
  .single();

if (profileError) {
  alert(profileError.message);
  return;
}

console.log(profile);

if (profile.role === "owner") {
window.location.href = "/owner-dashboard";
} else {
  window.location.href = "/";
}
  };


  return (
    <div className="signup-page">
      <div className="login-card"></div>
      <img 
  src={logo}
  className="logo"
  alt="Lovcore Stay Logo"
/>

      <h1 className="signup-title">
        Lovcore Stay Login
      </h1>

      <p className="signup-subtitle">
        Welcome back! Find your perfect stay
      </p>


      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
      />


      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
      />


      <button onClick={handleLogin}>
        Login
      </button>
      <a href="/forgot-password" className="login-text">
  Forgot Password?
</a>


      <a className="login-text" href="/signup">
  Create new account
</a>


    </div>
  );
}

export default Login;