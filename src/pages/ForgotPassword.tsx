import { useState } from "react";
import { supabase } from "../supabaseClient";

function ForgotPassword() {
  const [email, setEmail] = useState("");

  const handleReset = async () => {
    if (!email) {
      alert("Email dalo");
      return;
    }

    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: "http://localhost:5173/update-password",
    });

    if (error) {
      alert(error.message);
    } else {
      alert("Password reset email bhej diya gaya hai.");
    }
  };

  return (
   <div className="signup-page">
      <div className="signup-card">

        <h1 className="signup-title">
          Forgot Password
        </h1>

        <p className="signup-subtitle">
          Enter your registered email
        </p>

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button onClick={handleReset}>
          Send Reset Link
        </button>

      </div>
    </div>
  );
}

export default ForgotPassword;