import { useState } from "react";
import { supabase } from "../supabaseClient";
import "./Signup.css";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";

function Signup() {

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [role, setRole] = useState("");
  

  const handleSignup = async () => {

    if (!name || !mobile || !role || !email || !password) {
      alert("Sabhi details bharo");
      return;
    }

    const { data, error } = await supabase.auth.signUp({
  email,
  password,
});

if (error) {
  alert(error.message);
  return;
}


// profile table me data save
const { error: profileError } = await supabase
  .from("profiles")
  .insert([
    {
      id: data.user?.id,
      name: name,
      mobile: mobile,
      role: role,
      email: email,
    },
  ]);
console.log("profile insert", profileError);

if (profileError) {
  alert(profileError.message);
  return;
}

console.log("Profile saved successfully");

alert("Signup successful! Email verify karo");

setTimeout(() => {
  navigate("/login");
}, 500);

  };


  return (
   <div className="signup-page">
    <img 
  src={logo}
  className="logo"
  alt="Lovcore Stay Logo"
/>
   

  <h1 className="signup-title">Lovcore Stay</h1>
  <p className="signup-subtitle">
  Find your perfect room, stay with comfort
</p>

      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <br /><br />

      <input
        type="text"
        placeholder="Mobile Number"
        value={mobile}
        onChange={(e) => setMobile(e.target.value)}
      />

      <br /><br />

      <select
        value={role}
        onChange={(e) => setRole(e.target.value)}
      >
        <option value="">
          Select Role
        </option>

        <option value="tenant">
          Room Chahiye
        </option>

        <option value="owner">
          Room Register Karna Chahta Hu
        </option>

      </select>

      <br /><br />

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <br /><br />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <br /><br />

      <button onClick={handleSignup}>
        Signup
      </button>
     <a className="login-text" href="/login">
  Already have an account? Login
</a>

    </div>
  );
}

export default Signup;