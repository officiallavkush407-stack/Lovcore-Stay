import { useState } from "react";
import { supabase } from "../supabaseClient";

function UpdatePassword() {

  const [password, setPassword] = useState("");

  const handleUpdate = async () => {

    if (!password) {
      alert("Naya password dalo");
      return;
    }

    const { error } = await supabase.auth.updateUser({
      password: password,
    });

    if (error) {
      alert(error.message);
    } else {
      alert("Password successfully update ho gaya");
    }

  };


  return (
    <div className="signup-page">

      <div className="signup-card">

        <h1 className="signup-title">
          Create New Password
        </h1>

        <p className="signup-subtitle">
          Enter your new password
        </p>


        <input
          type="password"
          placeholder="New Password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />


        <button onClick={handleUpdate}>
          Update Password
        </button>


      </div>

    </div>
  );
}

export default UpdatePassword;