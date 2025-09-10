
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useTheme } from "./pages/ThemeContext";

import DayIcon from "./assets/day.png";  
import NightIcon from "./assets/night.png"; 
import SearchIcon from "./assets/search-b.png";

export default function Navbar() {

   const { darkMode, toggleTheme } = useTheme();

  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  
  const handleSearch = (e) => {
    e.preventDefault();
    if (search.trim() !== "") {
      navigate(`/search?q=${search}`);
      setSearch("");
    }
  };

  return (

     <div className="bg-gray-700 dark:bg-gray-900 text-black dark:text-white p-3 flex justify-between items-center border-b-4 border-gray-800 shadow-md dark:shadow-lg">

          <div className=" flex flex-col items-center sm:flex-row text-white sm:gap-6 flex-wrap p-2 float-left ">  

      
        <h1 className="text-2xl font-bold hover:text-yellow-500 ">MyApp</h1>

          <div className=" flex flex-col sm:flex-row text-white sm:gap-6 flex-wrap p-0 space-x-0 ">  
        
          <Link to="/" 
          className="hover:text-red-700 hover:underline ">
            Home
          </Link>
          <Link to="/about" className="hover:text-red-700 hover:underline">
            About
          </Link>
          <Link to="/contact" className="hover:text-red-700 hover:underline">
            Contact
          </Link>
        </div>
</div>

     
      <div className="flex flex-col gap-4 sm:flex-row mt-3 sm:mt-0 items-center sm:">

      <button 
       onClick={toggleTheme}>
         <img
          src={darkMode ? DayIcon : NightIcon}
          alt="theme-toggle"
          className="w-7 h-7"
        />
         <span className="text-white hover:underline hover:text-red-700">Theme</span>

      </button>
     
    
        <form 
          onSubmit={handleSearch}
          className="flex sm:w-auto"
        >
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search..."
            className="px-3 py-1 rounded-l-lg text-black w-full sm:w-48"
          />
          <button
            type="submit"
            className="bg-blue-500  px-4 rounded-r-lg hover:bg-blue-800 "
          >
          <img 
            src={SearchIcon} 
            alt="search" 
            className="w-5 h-5"
          />
           {/* OR  only Search add*/}
          
          </button>
        </form> 
      
        <Link
          to="/login"
          className="bg-green-600 px-4 py-2 rounded-lg hover:bg-green-900 hover:underline sm:ml-4 sm:w-auto   items-center hover:text-red-700"
        >
          Login
        </Link>
        
  

      </div>

     </div>
     
  );
}
