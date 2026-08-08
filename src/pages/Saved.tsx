import { Link } from "react-router-dom";
import { useWishlist } from "../context/WishlistContext";


export default function Saved() {

  const { savedRooms } = useWishlist();


  return (

    <div className="min-h-screen bg-gray-50 p-4 pb-24">


      <h1 className="text-2xl font-bold text-blue-950 mb-5">
        Saved Rooms ❤️
      </h1>


      {savedRooms.length === 0 ? (

        <div className="text-center mt-20 text-gray-500">

          <p className="text-lg">
            No saved rooms yet
          </p>

          <p className="text-sm mt-2">
            Tap ❤️ to save your favourite rooms
          </p>

        </div>

      ) : (


        <div className="grid grid-cols-1 gap-4">


          {savedRooms.map((room:any)=>(


            <div
              key={room.id}
              className="bg-white rounded-3xl shadow-md overflow-hidden"
            >


              <img
                src={room.image_url || "/room1.jpg"}
                className="w-full h-48 object-cover"
              />


              <div className="p-4">


                <h2 className="text-xl font-bold text-blue-950">
                  {room.room_type}
                </h2>


                <p className="text-teal-600 font-bold mt-2">
                  ₹{room.rent} / Month
                </p>


                <p className="text-gray-600 mt-2">
                  📍 {room.location}
                </p>


                <Link
                  to={`/room-details/${room.id}`}
                  className="block text-center mt-4 bg-blue-950 text-white py-3 rounded-xl"
                >
                  View Details
                </Link>


              </div>


            </div>


          ))}


        </div>


      )}


    </div>

  );
}