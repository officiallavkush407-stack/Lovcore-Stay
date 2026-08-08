import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "../supabaseClient";
import { Link } from "react-router-dom";

export default function CategoryRooms() {

  const { category } = useParams();

  const [rooms, setRooms] = useState<any[]>([]);


  useEffect(() => {
    fetchRooms();
  }, []);


  const fetchRooms = async () => {

    const { data, error } = await supabase
      .from("rooms")
      .select("*")
      .eq("room_type", category);


    if(error){
      console.log(error);
      return;
    }


    setRooms(data || []);

  };


  return (

    <div className="min-h-screen bg-gray-50 p-4">

      <h1 className="text-2xl font-bold text-blue-950 mb-5">
        {category} Rooms
      </h1>


      <div className="grid grid-cols-1 gap-4">

        {rooms.map((room)=>(

          <div
            key={room.id}
            className="bg-white rounded-2xl shadow p-4"
          >

            <img
              src={room.image_url || "/room1.jpg"}
              className="w-full h-48 object-cover rounded-xl"
            />


            <h2 className="text-xl font-bold mt-3">
              {room.room_type}
            </h2>


            <p className="text-teal-600 font-bold">
              ₹{room.rent}/Month
            </p>


            <p>
              📍 {room.location}
            </p>


            <Link
              to={`/room-details/${room.id}`}
              className="block mt-4 bg-blue-950 text-white text-center py-3 rounded-xl"
            >
              View Details
            </Link>


          </div>

        ))}

      </div>

    </div>

  );
}