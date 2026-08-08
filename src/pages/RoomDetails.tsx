import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";
import { useNavigate } from "react-router-dom";
function RoomDetails() {

const navigate = useNavigate();

  const { id } = useParams();

  console.log("Room ID:", id);

const [room, setRoom] = useState<any>(null);
const [bookingLoading, setBookingLoading] = useState(false);


useEffect(() => {
  if (id) {
    fetchRoom();
  }
}, [id]);
const fetchRoom = async () => {
  const { data, error } = await supabase
    .from("rooms")
.select("*")
.eq("id", id)
.single();

  if (error) {
    console.log(error);
    return;
  }
console.log("Supabase Data:", JSON.stringify(data, null, 2));
  setRoom(data);
};
const handleBooking = async () => {

  setBookingLoading(true);

  const { data } = await supabase.auth.getUser();

  const user = data.user;

  if (!user) {
    alert("Please login first");
    setBookingLoading(false);
    return;
  }


  const { error } = await supabase
    .from("bookings")
    .insert([
      {
        room_id: room.id,
        owner_id: room.owner_id,
        user_id: user.id,
        customer_name: user.email,
        customer_mobile: "",
        status: "pending"
      }
    ]);


  if(error){
    alert(error.message);
    setBookingLoading(false);
    return;
  }


  alert("Booking request sent ✅");

  setBookingLoading(false);

};
if (!room) {
  return <div className="text-center p-10">Loading...</div>;
}
console.log(room);
console.log("IMAGE URL:", room.image_url);

  return (
    <div className="min-h-screen bg-slate-50 px-8 py-10">

      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">

        {/* Room Image */}
        <img
  src={room.image_url || "/room1.jpg"}
  className="w-full h-96 object-cover"
/>


        <div className="p-8">

          <div className="flex justify-between items-center">

            <h1 className="text-4xl font-bold text-blue-950">
            {room?.room_type}
            </h1>

           

          </div>


          <p className="text-teal-600 text-2xl font-bold mt-4">
          ₹{room?.rent} / Month
          </p>


          <p className="text-gray-600 mt-3">
            📍 {room?.location}
          </p>
<p className="text-gray-700 mt-3">
  👤 Owner: {room?.owner_name}
</p>

<div className="mt-6">
  <h2 className="text-xl font-bold text-blue-950 mb-4">
    🏠 Facilities
  </h2>

  <div className="grid grid-cols-2 gap-3">
    {room?.facilities?.split(",").map((facility: string, index: number) => {
      const item = facility.trim();

      let icon = "✔️";

      if (item === "WiFi") icon = "📶";
      else if (item === "Parking") icon = "🚗";
      else if (item === "AC") icon = "❄️";
      else if (item === "Kitchen") icon = "🍳";
      else if (item === "Attached Bathroom") icon = "🚿";
      else if (item === "Bed") icon = "🛏️";

      return (
        <div
          key={index}
          className="flex items-center gap-3 bg-slate-100 p-4 rounded-xl hover:bg-teal-50 transition"
        >
          <span className="text-2xl">{icon}</span>
          <span className="font-medium text-gray-700">{item}</span>
        </div>
      );
    })}
  </div>
</div>
    
<div className="mt-10 grid grid-cols-2 gap-4">
<button
  onClick={handleBooking}
  disabled={bookingLoading}
  className="text-center bg-teal-600 text-white py-4 rounded-xl font-semibold hover:bg-teal-700 transition"
>
  {
    bookingLoading
    ? "Sending..."
    : "🏠 Book Now"
  }
</button>
  <a
    href={`tel:${room?.mobile}`}
    className="text-center bg-blue-950 text-white py-4 rounded-xl font-semibold hover:bg-teal-500 transition"
  >
    📞 Call
  </a>
<button
  onClick={() => navigate(`/chat?owner=${room?.owner_id}&room=${room?.id}`)}
  className="w-full text-center bg-blue-600 text-white py-4 rounded-xl font-semibold hover:bg-blue-700 transition mb-3"
>
  💬 Chat with Owner
</button>
  <a
    href={`https://wa.me/91${room?.mobile}`}
    target="_blank"
    className="text-center bg-green-500 text-white py-4 rounded-xl font-semibold hover:bg-green-600 transition"
  >
    💬 WhatsApp
  </a>

</div>


        </div>

      </div>

    </div>
  )
}

export default RoomDetails