import { Home, Search, Heart, MessageCircle } from "lucide-react";
import { NavLink } from "react-router-dom";

const navItems = [
  {
    name: "Home",
    icon: Home,
    path: "/",
  },
  {
    name: "Category",
    icon: Search,
    path: "/category",
  },
  {
    name: "Saved",
    icon: Heart,
    path: "/saved",
  },
  {
    name: "Chat",
    icon: MessageCircle,
    path: "/chat",
  },
];

export default function BottomNavigation() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg z-50">

      <div className="flex justify-around py-3">

        {navItems.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `flex flex-col items-center text-xs ${
                  isActive
                    ? "text-blue-950 font-bold"
                    : "text-gray-500"
                }`
              }
            >
              <Icon size={24} />

              <span>
                {item.name}
              </span>

            </NavLink>
          );
        })}

      </div>

    </div>
  );
}