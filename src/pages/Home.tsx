import { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";
import { Link } from "react-router-dom";
function Home() {
  const [rooms, setRooms] = useState<any[]>([]);

useEffect(() => {
  fetchRooms();
}, []);

const fetchRooms = async () => {
  const { data, error } = await supabase
    .from("rooms")
    .select("*");

  if (error) {
    console.log(error);
    return;
  }

  setRooms(data || []);
};
  return (
    <div className="min-h-screen bg-slate-50">

      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-5 bg-white/80 backdrop-blur-md shadow-sm sticky top-0">

        <h1 className="text-3xl font-bold text-blue-950">
          Lovcore <span className="text-teal-500">Stay</span>
        </h1>

        <div className="flex gap-4 items-center">

          <button className="text-blue-950 font-medium">
            Login
          </button>

          <Link
  to="/owner-register"
  className="bg-teal-500 text-white px-6 py-3 rounded-full hover:scale-105 transition"
>
  List Your Room
</Link>

        </div>

      </nav>


      {/* Hero Section */}
      <section className="px-8 py-24 text-center bg-gradient-to-br from-blue-950 to-teal-600 text-white">

        <h2 className="text-5xl md:text-6xl font-bold leading-tight">
          Find Your Perfect Room
          <br />
          Without Stress
        </h2>


        <p className="mt-6 text-lg text-white/80">
          Chhatarpur ke students aur working logon ke liye trusted room platform
        </p>


        <div className="mt-10 mx-auto max-w-3xl bg-white rounded-3xl p-4 shadow-2xl flex flex-col md:flex-row gap-3">

          <input
            className="flex-1 px-5 py-4 rounded-xl text-gray-800 outline-none"
            placeholder="📍 Location search"
          />

          <input
            className="flex-1 px-5 py-4 rounded-xl text-gray-800 outline-none"
            placeholder="₹ Budget"
          />

          <button className="bg-teal-500 text-white px-8 py-4 rounded-xl font-semibold">
            Search
          </button>

        </div>

      </section>
        {/* Trust Cards */}

  <section className="px-8 py-16 grid md:grid-cols-3 gap-8">


    <div className="bg-white rounded-3xl p-8 shadow-lg hover:-translate-y-2 transition">

      <div className="text-4xl">
        🏠
      </div>

      <h3 className="text-2xl font-bold mt-5 text-blue-950">
        Verified Rooms
      </h3>

      <p className="mt-3 text-gray-600">
        Safe aur trusted room listings.
      </p>

    </div>



    <div className="bg-white rounded-3xl p-8 shadow-lg hover:-translate-y-2 transition">

      <div className="text-4xl">
        🔍
      </div>

      <h3 className="text-2xl font-bold mt-5 text-blue-950">
        Smart Search
      </h3>

      <p className="mt-3 text-gray-600">
        Budget aur location ke hisab se room.
      </p>

    </div>



    <div className="bg-white rounded-3xl p-8 shadow-lg hover:-translate-y-2 transition">

      <div className="text-4xl">
        🤝
      </div>

      <h3 className="text-2xl font-bold mt-5 text-blue-950">
        Trusted Connection
      </h3>

      <p className="mt-3 text-gray-600">
        Owner aur tenant ka direct connection.
      </p>

    </div>


  </section>     
  {/* Available Rooms */}

  <section className="px-8 pb-20">

    <h2 className="text-4xl font-bold text-blue-950 text-center mb-10">
      Available Rooms
    </h2>


    <div className="grid md:grid-cols-3 gap-8">

{rooms.map((room) => (
  <div
    key={room.id}
    className="bg-white rounded-3xl p-6 shadow-xl"
  >

    <img
  src={room.image_url || "/room1.jpg"}
  className="w-full h-56 object-cover rounded-2xl"
/>

    <div className="p-5">

      <h3 className="text-2xl font-bold text-blue-950">
        {room.room_type}
      </h3>

      <p className="text-teal-600 font-bold text-xl mt-3">
        ₹{room.rent} / Month
      </p>

      <p className="mt-3 text-gray-600">
        📍 {room.location}
      </p>

      <p className="mt-3 text-gray-600">
        {room.description}
      </p>
      <Link
  to={`/room-details/${room.id}`}
  className="mt-6 block text-center bg-blue-950 text-white py-3 rounded-xl hover:bg-teal-500 transition"
>
  View Details
</Link>

    </div>

  </div>

  
))}



    </div>

  </section>

    </div>
  );
}

export default Home;