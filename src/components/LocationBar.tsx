import { MapPin, ChevronRight } from "lucide-react";

function LocationBar() {
  return (
    <div className="mx-3 mt-2 bg-white rounded-lg shadow-sm px-3 py-2 flex items-center justify-between">

      <div className="flex items-center gap-2">

        <MapPin 
          size={16}
          className="text-teal-600"
        />


        <p className="text-xs font-medium text-blue-950">
          Chhatarpur, Madhya Pradesh
        </p>

      </div>


      <button className="flex items-center text-[11px] text-teal-600">
        Change
        <ChevronRight size={13}/>
      </button>


    </div>
  );
}

export default LocationBar;