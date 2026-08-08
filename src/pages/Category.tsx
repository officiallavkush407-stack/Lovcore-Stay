import { Link } from "react-router-dom";
import {
  Users,
  UserRound,
  Home,
  Building2,
  BedDouble,
  BedSingle,
} from "lucide-react";


const categories = [
  {
    name: "Boys",
    icon: Users,
  },
  {
    name: "Girls",
    icon: UserRound,
  },
  {
    name: "Family",
    icon: Home,
  },
  {
    name: "PG",
    icon: Building2,
  },
  {
    name: "Single Room",
    icon: BedSingle,
  },
  {
    name: "Double Room",
    icon: BedDouble,
  },
];


export default function Category() {

  return (

    <div className="min-h-screen bg-gray-50 p-4">


      <h1 className="text-2xl font-bold text-blue-950 mb-6">
        Find Your Room
      </h1>



      <div className="grid grid-cols-2 gap-4">


        {categories.map((category)=>{

          const Icon = category.icon;


          return (

            <Link
              key={category.name}
              to={`/category/${category.name}`}
              className="bg-white rounded-3xl p-6 shadow-md flex flex-col items-center justify-center gap-3 active:scale-95 transition"
            >

              <div className="bg-blue-100 p-4 rounded-full">

                <Icon
                  size={32}
                  className="text-blue-950"
                />

              </div>


              <h2 className="font-bold text-blue-950">
                {category.name}
              </h2>


            </Link>

          );


        })}


      </div>


    </div>

  );
}