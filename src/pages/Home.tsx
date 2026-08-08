import { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import LocationBar from "../components/LocationBar";
import SearchBar from "../components/SearchBar";
import CategorySlider from "../components/CategorySlider";
import { Heart, MapPin, Star } from "lucide-react";
import BottomNavigation from "../components/BottomNavigation";
import { useWishlist } from "../context/WishlistContext";


function Home() {
  const { savedRooms, toggleSave } = useWishlist();
const [selectedCategory, setSelectedCategory] = useState("All");
  const [rooms, setRooms] = useState<any[]>([]);
const [likedRooms, setLikedRooms] = useState<number[]>([]);

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

    <div className="min-h-screen bg-gray-50">


      <Header />
      <CategorySlider
  selectedCategory={selectedCategory}
  setSelectedCategory={setSelectedCategory}
/>
<LocationBar />
<SearchBar />


      


      {/* Rooms Section */}
      <section className="px-4 pb-20">


        <h2 className="text-xl font-bold text-blue-950 mb-4">
          Suggested Rooms
        </h2>



        <div className="grid grid-cols-1 gap-4">


        {rooms
.filter((room) =>
  selectedCategory === "All"
    ? true
    : room.room_type === selectedCategory
)
.map((room) => (

  <div
  key={room.id}
  className="bg-white rounded-3xl shadow-md overflow-hidden border border-gray-100"
>     

  <div className="relative">

  <img
    src={room.image_url || "/room1.jpg"}
    alt="Room"
    className="w-full h-56 object-cover"
  />

 <div
  className="absolute top-4 right-4 cursor-pointer"
  onClick={() => toggleSave(room)}
>
  <Heart
    size={30}
    strokeWidth={2}
    className={
      savedRooms.some(
        (item:any) => item.id === room.id
      )
        ? "fill-red-500 text-red-500 drop-shadow-lg"
        : "text-white drop-shadow-lg"
    }
  />
</div>


  <div className="absolute bottom-3 left-3 bg-blue-950 text-white px-3 py-1 rounded-full text-sm">
    {room.room_type}
  </div>


  <div
    className={`absolute bottom-3 right-3 px-3 py-1 rounded-full text-sm font-semibold ${
      room.status?.toLowerCase() === "available"
        ? "bg-green-500 text-white"
        : "bg-red-500 text-white"
    }`}
  >
    {room.status}
  </div>

</div>



  <div className="p-5">


    <div className="flex items-center gap-2 text-sm text-gray-600">

      <Star size={18} className="fill-yellow-400 text-yellow-400" />

      <span className="font-semibold">
        4.5
      </span>

      <span>
        • Excellent
      </span>

    </div>



    <div className="flex items-center gap-2 mt-3 text-gray-600">

      <MapPin size={18} />

      <span>
        {room.location}
      </span>

    </div>



    <h3 className="text-xl font-bold text-blue-950 mt-3">
      {room.room_type}
    </h3>



    <p className="text-teal-600 font-bold text-xl mt-2">
      ₹{room.rent}
      <span className="text-sm text-gray-500">
        {" "} / Month
      </span>
    </p>



    <Link
      to={`/room-details/${room.id}`}
      className="block text-center mt-5 bg-blue-950 text-white py-3 rounded-xl font-semibold"
    >
      View Details
    </Link>


  </div>

</div>

          ))}


        </div>


      </section>
<BottomNavigation />

    </div>
    

  );
}


export default Home;