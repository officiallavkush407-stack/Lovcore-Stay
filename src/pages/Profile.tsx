import { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";
import { useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();

  const [profile, setProfile] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    const { data: authData } = await supabase.auth.getUser();

    if (!authData.user) {
      navigate("/login");
      return;
    }

    const { data, error } = await supabase
      .from("profiles")
      .select("*")
      .eq("id", authData.user.id)
      .single();

    if (error) {
      console.log(error);
      setLoading(false);
      return;
    }

    setProfile(data);
    setLoading(false);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/login");
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">Loading profile...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-24">

      {/* Header */}
      <div className="bg-blue-950 text-white px-5 pt-8 pb-16 rounded-b-[35px]">
        <h1 className="text-2xl font-bold">
          My Profile
        </h1>

        <p className="text-blue-200 mt-1">
          Manage your Lovcore Stay account
        </p>
      </div>

      {/* Profile Card */}
      <div className="px-4 -mt-10">

        <div className="bg-white rounded-3xl shadow-lg p-6">

          {/* Avatar */}
          <div className="flex justify-center">
            <div className="w-24 h-24 rounded-full bg-blue-600 text-white flex items-center justify-center text-3xl font-bold shadow-md">
              {profile?.name?.charAt(0)?.toUpperCase() || "U"}
            </div>
          </div>

          {/* Name */}
          <h2 className="text-center text-2xl font-bold text-gray-900 mt-4">
            {profile?.name || "User"}
          </h2>

          <p className="text-center text-sm text-gray-500 mt-1">
            {profile?.role === "owner"
              ? "Room Owner"
              : "Room Seeker"}
          </p>

          {/* Details */}
          <div className="mt-6 space-y-3">

            <div className="bg-gray-50 rounded-2xl p-4">
              <p className="text-xs text-gray-400">
                Email
              </p>

              <p className="font-medium text-gray-800 mt-1">
                {profile?.email || "Not available"}
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-4">
              <p className="text-xs text-gray-400">
                Mobile
              </p>

              <p className="font-medium text-gray-800 mt-1">
                {profile?.mobile || "Not available"}
              </p>
            </div>

          </div>

          {/* Edit */}
          <button
            onClick={() => alert("Edit Profile coming soon")}
            className="w-full mt-6 bg-blue-600 text-white py-4 rounded-2xl font-semibold hover:bg-blue-700 transition"
          >
            ✏️ Edit Profile
          </button>

        </div>

        {/* Options */}
        <div className="bg-white rounded-3xl shadow-sm mt-4 overflow-hidden">

          <button
            className="w-full flex items-center justify-between p-5 border-b"
          >
            <span>❤️ Saved Rooms</span>
            <span>›</span>
          </button>

          <button
            className="w-full flex items-center justify-between p-5 border-b"
          >
            <span>📋 My Bookings</span>
            <span>›</span>
          </button>

          {profile?.role === "owner" && (
            <button
              onClick={() => navigate("/owner-dashboard")}
              className="w-full flex items-center justify-between p-5 border-b"
            >
              <span>🏠 My Rooms</span>
              <span>›</span>
            </button>
          )}

          <button
            className="w-full flex items-center justify-between p-5"
          >
            <span>⚙️ Settings</span>
            <span>›</span>
          </button>

        </div>

        {/* Logout */}
        <button
          onClick={handleLogout}
          className="w-full mt-4 bg-red-50 text-red-600 py-4 rounded-2xl font-semibold"
        >
          🚪 Logout
        </button>

      </div>
    </div>
  );
}

export default Profile;