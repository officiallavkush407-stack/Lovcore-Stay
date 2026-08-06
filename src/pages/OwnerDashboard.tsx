import { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";
import logo from "../assets/logo.png";
import "./OwnerDashboard.css";

function OwnerDashboard() {

  const [rooms, setRooms] = useState<any[]>([]);
  const [bookings, setBookings] = useState<any[]>([]);
  const [editRoom, setEditRoom] = useState<any>(null);

  useEffect(() => {
    fetchRooms();
  }, []);

  const fetchRooms = async () => {

    const { data } = await supabase.auth.getUser();
    const user = data.user;

    if (!user) return;

    const { data: roomData, error } = await supabase
      .from("rooms")
      .select("*")
      .eq("owner_id", user.id);

    if (error) {
      console.log(error.message);
      return;
    }

    setRooms(roomData || []);
  };
const fetchBookings = async () => {

  const { data } = await supabase.auth.getUser();

  const user = data.user;
  console.log("Logged Owner:", user);
console.log("Owner ID:", user?.id);

  if (!user) return;


  const { data: bookingData, error } = await supabase
    .from("bookings")
    .select("*")
    .eq("owner_id", user.id);


  if(error){
    console.log(error.message);
    return;
  }


  setBookings(bookingData || []);

};
  const updateStatus = async (id: number, status: string) => {

    const { error } = await supabase
      .from("rooms")
      .update({ status })
      .eq("id", id);

    if (error) {
      alert(error.message);
      return;
    }

    fetchRooms();
  };
  const deleteRoom = async (id: number) => {

  const confirmDelete = window.confirm(
    "Kya aap ye room delete karna chahte ho?"
  );

  if (!confirmDelete) {
    return;
  }


  const { error } = await supabase
    .from("rooms")
    .delete()
    .eq("id", id);


  if (error) {
    alert(error.message);
    return;
  }


  fetchRooms();

};
const updateRoom = async () => {

  const { error } = await supabase
    .from("rooms")
    .update({
      location: editRoom.location,
      rent: editRoom.rent,
      room_type: editRoom.room_type
    })
    .eq("id", editRoom.id);


  if(error){
    alert(error.message);
    return;
  }


  setEditRoom(null);
  fetchRooms();

};

  return (
  <div className="dashboard-layout">

     <div className="dashboard-header">

  <div className="brand-area">
<img 
  src={logo}
  className="dashboard-logo"
  alt="Lovcore Stay"
/>

    <div>
      <h1>👋 Welcome Back, Owner</h1>
      <p>
        Manage your rooms, bookings and growth from one place.
      </p>
    </div>

  </div>

  <div className="profile-card">
    👤 Owner
    <br />
    Lovcore Stay Partner
  </div>

</div>

<button 
  className="add-room-btn"
  onClick={() => window.location.href="/owner-register"}
>
  ＋ Add New Room
</button>

      <div className="section-title">

  <div>
    <div className="dashboard-stats">

  <div className="stat-card">
    <h3>Total Rooms</h3>
    <span>{rooms.length}</span>
  </div>


  <div className="stat-card available-stat">
    <h3>Available</h3>
    <span>
      {
        rooms.filter(
          (room)=> room.status !== "booked"
        ).length
      }
    </span>
  </div>


  <div className="stat-card booked-stat">
    <h3>Booked</h3>
    <span>
      {
        rooms.filter(
          (room)=> room.status === "booked"
        ).length
      }
    </span>
  </div>

</div>
    <h2>🏠 Your Property Rooms</h2>
    <p>Manage your listed rooms and availability</p>
  </div>

</div>

      {
        rooms.length === 0 ? (
          <p>Abhi tak koi room list nahi kiya hai.</p>
        ) : (
          rooms.map((room) => (

           <div className="room-card" key={room.id}>

  <div className="room-image-box">

    <img
      src={room.image_url}
      alt="Room"
    />

    <span
      className={
        room.status === "booked"
        ? "badge booked"
        : "badge available"
      }
    >
      {
        room.status === "booked"
        ? "🔒 Booked"
        : "✅ Available"
      }
    </span>

  </div>


  <div className="room-info">

    <h3>
      📍 {room.location}
    </h3>


    <p>
      🏠 {room.room_type}
    </p>


    <h2>
      ₹{room.rent}
      <small> / month</small>
    </h2>
<div className="room-meta">

  <span>
    👁️ {room.views || 0} Views
  </span>


  <span>
    📅 
    {
      room.created_at
      ? new Date(room.created_at)
          .toLocaleDateString()
      : "New"
    }
  </span>

</div>

    <div className="status-options">

      <div
        className={`status-box available-box ${
          room.status !== "booked" ? "selected" : ""
        }`}
        onClick={() => updateStatus(room.id, "available")}
      >
        ✅ Available
      </div>


      <div
        className={`status-box booked-box ${
          room.status === "booked" ? "selected" : ""
        }`}
        onClick={() => updateStatus(room.id, "booked")}
      >
        🔒 Booked
      </div>

    </div>


    
  <div className="room-actions">

  <button
    className="edit-btn"
    title="Edit Room"
    onClick={() => {
      console.log(room);
      setEditRoom(room);
    }}
  >
    ✏️
  </button>


  <button
    className="delete-btn"
    onClick={() => deleteRoom(room.id)}
    title="Delete Room"
  >
    🗑️
  </button>

</div>

  </div>

</div>

          ))
        )
      }
      <h2 className="booking-title">
  📅 Booking Requests
</h2>


{
  bookings.length === 0 ? (

    <p>
      Abhi koi booking request nahi hai.
    </p>

  ) : (

    bookings.map((booking)=>(

      <div className="booking-card" key={booking.id}>

        <h3>
          👤 {booking.customer_name}
        </h3>

        <p>
          Status: {booking.status}
        </p>

        <div className="booking-actions">

          <button className="accept-btn">
            ✅ Accept
          </button>

          <button className="reject-btn">
            ❌ Reject
          </button>

        </div>

      </div>

    ))

  )
}
{
  editRoom && (

    <div className="edit-modal">

      <div className="edit-box">

        <h2>
          ✏️ Edit Room
        </h2>


        <input
          value={editRoom.location}
          onChange={(e)=>
            setEditRoom({
              ...editRoom,
              location:e.target.value
            })
          }
          placeholder="Location"
        />


        <input
          value={editRoom.rent}
          onChange={(e)=>
            setEditRoom({
              ...editRoom,
              rent:e.target.value
            })
          }
          placeholder="Rent"
        />


        <input
          value={editRoom.room_type}
          onChange={(e)=>
            setEditRoom({
              ...editRoom,
              room_type:e.target.value
            })
          }
          placeholder="Room Type"
        />


        <button
          onClick={updateRoom}
        >
          💾 Save Changes
        </button>


        <button
          onClick={() => setEditRoom(null)}
        >
          ❌ Cancel
        </button>


      </div>

    </div>

  )
}
    </div>
  );
}

export default OwnerDashboard;