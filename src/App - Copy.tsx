import { Routes, Route } from "react-router-dom";
import OwnerRegister from "./pages/OwnerRegister";
function App() {
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

          <button className="bg-teal-500 text-white px-6 py-3 rounded-full hover:scale-105 transition">
            List Your Room
          </button>

        </div>

      </nav>



      {/* Hero */}
      <section className="px-8 py-24 text-center bg-gradient-to-br from-blue-950 to-teal-600 text-white">

        <h2 className="text-5xl md:text-6xl font-bold leading-tight">
          Find Your Perfect Room
          <br />
          Without Stress
        </h2>


        <p className="mt-6 text-lg text-white/80">
          Chhatarpur ke students aur working logon ke liye trusted room platform
        </p>



        {/* Search Box */}
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


    {/* Room Card 1 */}
    <div className="bg-white rounded-3xl overflow-hidden shadow-xl hover:-translate-y-3 transition duration-300">

      <div className="relative overflow-hidden">

  <img
    src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267"
    className="w-full h-56 object-cover hover:scale-110 transition duration-500"
  />

  <button className="absolute top-4 right-4 bg-white rounded-full p-3 shadow-lg">
    ❤️
  </button>

  <span className="absolute bottom-4 left-4 bg-teal-500 text-white px-4 py-2 rounded-full font-semibold">
    ₹5000/month
  </span>

</div>


      <div className="p-6">

        <h3 className="text-2xl font-bold text-blue-950">
          Modern Single Room
        </h3>

        


        <div className="flex items-center justify-between mt-4">

  <span className="bg-slate-100 px-3 py-2 rounded-full text-sm">
    📍 Chhatarpur
  </span>

  <span className="bg-yellow-100 px-3 py-2 rounded-full text-sm">
    ⭐ 4.8
  </span>

</div>

        <div className="mt-4 flex gap-3 text-sm">

          <span className="bg-slate-100 px-3 py-2 rounded-full">
            🛏 Bed
          </span>

          <span className="bg-slate-100 px-3 py-2 rounded-full">
            📶 WiFi
          </span>

        </div>


        <button className="mt-6 w-full bg-blue-950 text-white py-3 rounded-xl hover:bg-teal-500 transition">
          View Details
        </button>

      </div>

    </div>



    {/* Room Card 2 */}
    <div className="bg-white rounded-3xl overflow-hidden shadow-xl hover:-translate-y-3 transition duration-300">

     <div className="relative overflow-hidden">

  <img
    src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
    className="w-full h-56 object-cover hover:scale-110 transition duration-500"
  />

  <button className="absolute top-4 right-4 bg-white rounded-full p-3 shadow-lg">
    ❤️
  </button>

  <span className="absolute bottom-4 left-4 bg-teal-500 text-white px-4 py-2 rounded-full font-semibold">
    ₹7000/month
  </span>

</div>


      <div className="p-6">

        <h3 className="text-2xl font-bold text-blue-950">
          Premium Room
        </h3>

        <p className="text-teal-600 font-bold text-xl mt-3">
          ₹7000 / Month
        </p>


       <div className="flex items-center justify-between mt-4">

  <span className="bg-slate-100 px-3 py-2 rounded-full text-sm">
    📍 Chhatarpur
  </span>

  <span className="bg-yellow-100 px-3 py-2 rounded-full text-sm">
    ⭐ 4.7
  </span>

</div>


        <div className="mt-4 flex gap-3 text-sm">

          <span className="bg-slate-100 px-3 py-2 rounded-full">
            🚿 Bathroom
          </span>

          <span className="bg-slate-100 px-3 py-2 rounded-full">
            🅿 Parking
          </span>

        </div>


        <button className="mt-6 w-full bg-blue-950 text-white py-3 rounded-xl hover:bg-teal-500 transition">
          View Details
        </button>


      </div>

    </div>



    {/* Room Card 3 */}
    <div className="bg-white rounded-3xl overflow-hidden shadow-xl hover:-translate-y-3 transition duration-300">

      <div className="relative overflow-hidden">

  <img
    src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2"
    className="w-full h-56 object-cover hover:scale-110 transition duration-500"
  />

  <button className="absolute top-4 right-4 bg-white rounded-full p-3 shadow-lg">
    ❤️
  </button>

  <span className="absolute bottom-4 left-4 bg-teal-500 text-white px-4 py-2 rounded-full font-semibold">
    ₹3500/month
  </span>

</div>


      <div className="p-6">

        <h3 className="text-2xl font-bold text-blue-950">
          Student Room
        </h3>

        <p className="text-teal-600 font-bold text-xl mt-3">
          ₹3500 / Month
        </p>


       <div className="flex items-center justify-between mt-4">

  <span className="bg-slate-100 px-3 py-2 rounded-full text-sm">
    📍 Chhatarpur
  </span>

  <span className="bg-yellow-100 px-3 py-2 rounded-full text-sm">
    ⭐ 4.7
  </span>

</div>


        <div className="mt-4 flex gap-3 text-sm">

          <span className="bg-slate-100 px-3 py-2 rounded-full">
            🍳 Kitchen
          </span>

          <span className="bg-slate-100 px-3 py-2 rounded-full">
            🔒 Safe
          </span>

        </div>


        <button className="mt-6 w-full bg-blue-950 text-white py-3 rounded-xl hover:bg-teal-500 transition">
          View Details
        </button>


      </div>

    </div>


  </div>

</section>

    </div>
  )
}

export default App