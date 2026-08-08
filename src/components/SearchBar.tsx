import { Search } from "lucide-react";

function SearchBar() {
  return (
    <div className="mx-3 mt-3">

      <div className="flex items-center bg-white rounded-xl shadow-sm px-3 py-2.5">

        <Search
          size={18}
          className="text-gray-500"
        />


        <input
          type="text"
          placeholder="Search rooms, location, budget..."
          className="ml-2 w-full outline-none text-sm text-gray-700"
        />

      </div>

    </div>
  );
}

export default SearchBar;