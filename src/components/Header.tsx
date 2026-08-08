import { Link } from "react-router-dom";
import { Bell, User, Home, Building2, LandPlot } from "lucide-react";

function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">

      {/* Top Header */}
      <div className="flex items-center justify-between px-3 py-1">

        {/* Logo */}
        <Link
          to="/"
          className="text-base font-bold text-blue-950"
        >
          Lovcore
          <span className="text-teal-500">
            Stay
          </span>
        </Link>


        {/* Right Icons */}
        <div className="flex items-center gap-3 text-blue-950">

          <button>
            <Bell size={15} />
          </button>


          <Link to="/profile">
            <User size={15} />
          </Link>

        </div>

      </div>


      {/* Navigation */}
      <div className="flex justify-around border-t border-gray-100 py-2">

  <Link
    to="/"
    className="flex items-center gap-1.5 text-xs font-medium text-blue-950"
  >
    <Home size={18} />
    Home
  </Link>


  <Link
    to="/owner-dashboard"
    className="flex items-center gap-1.5 text-xs font-medium text-blue-950"
  >
    <Building2 size={18} />
    Owner
  </Link>


  <Link
    to="/property"
    className="flex items-center gap-1.5 text-xs font-medium text-blue-950"
  >
    <LandPlot size={18} />
    Property
  </Link>

</div>


    </header>
  );
}

export default Header;