import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";

export default function UserProfile() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const toggleProfile = () => {
    setIsProfileOpen((prev) => !prev); // Toggle profile visibility
  };

  return (
    <div className="relative">
      {/* User Icon */}
      <button
        onClick={toggleProfile}
        className="text-gray-600 hover:text-gray-800 focus:outline-none"
      >
        <FaUserCircle size={30} />
      </button>

      {/* Profile Dropdown */}
      {isProfileOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border">
          <div className="p-4 border-b">
            <h3 className="text-gray-800 font-semibold">John Doe</h3>
            <p className="text-sm text-gray-500">johndoe@example.com</p>
          </div>
          <ul>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-gray-800">
              Profile
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-gray-800">
              Settings
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-gray-800">
              Logout
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
