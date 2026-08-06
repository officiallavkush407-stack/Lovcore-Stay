import ProtectedRoute from "./pages/ProtectedRoute";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import OwnerRegister from "./pages/OwnerRegister";
import RoomDetails from "./pages/RoomDetails";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import UpdatePassword from "./pages/UpdatePassword";
import OwnerDashboard from "./pages/OwnerDashboard";

function App() {
  return (
  <Routes>

    <Route path="/" element={<Home />} />

    <Route path="/signup" element={<Signup />} />

    <Route path="/login" element={<Login />} />

    <Route 
      path="/forgot-password" 
      element={<ForgotPassword />} 
    />

    <Route 
      path="/update-password" 
      element={<UpdatePassword />} 
    />

    <Route 
      path="/owner-register" 
      element={<OwnerRegister />} 
    />

    <Route 
  path="/owner-dashboard" 
  element={
    <ProtectedRoute>
      <OwnerDashboard />
    </ProtectedRoute>
  }
/>

    <Route 
      path="/room-details/:id" 
      element={<RoomDetails />} 
    />

  </Routes>
);
}

export default App;