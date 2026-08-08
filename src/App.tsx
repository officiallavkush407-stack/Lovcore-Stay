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
import Category from "./pages/Category";
import CategoryRooms from "./pages/CategoryRooms";
import Saved from "./pages/Saved";
import Chat from "./pages/Chat";
import Profile from "./pages/Profile";

function App() {
  return (
    <Routes>

     <Route
  path="/"
  element={
    <ProtectedRoute>
      <Home />
    </ProtectedRoute>
  }
/>
<Route
  path="/profile"
  element={
    <ProtectedRoute>
      <Profile />
    </ProtectedRoute>
  }
/>
      <Route path="/category" element={<Category />} />

      <Route
        path="/saved"
        element={<Saved />}
      />
      <Route
  path="/chat"
  element={<Chat />}
/>

      <Route
        path="/category/:category"
        element={<CategoryRooms />}
      />

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