import { useState } from "react";
import { NavLink } from "react-router-dom";


export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Surf Coaching", path: "/surf-coaching" },
    { name: "Guided Trips", path: "/guided-trips" },
    { name: "Contact", path: "/contact" },
    { name: "FAQ", path: "/faq" },
  ];

  const activeClass =
    "text-sky-700  font-bold border-b-2 border-sky-700 pb-1";

  const inactiveClass =
    "text-slate-600  hover:text-sky-700  transition-all";

  const phoneNumber = "6281215679959";
  const message = "Halo Nyoman Point Break, saya ingin booking lesson.";
  

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <header className="fixed top-0 w-full z-50 border-b bg-white/95  backdrop-blur-md border-slate-100  shadow-[0_4px_20px_-4px_rgba(0,91,150,0.08)]">
      
      <div className="flex justify-between items-center h-20 px-6 lg:px-12 max-w-[1280px] mx-auto">
        
        {/* Logo */}
        <div className="text-lg font-extrabold tracking-tighter text-sky-900 d uppercase">
            <img src="/logo.png" alt="Nyoman Point Break Surf School Logo" className="h-25 lg:h-30 w-auto" />
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8 text-sm tracking-wide">
          {menuItems.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              className={({ isActive }) =>
                isActive ? activeClass : inactiveClass
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        {/* Right Section (Desktop) */}
        <div className="hidden md:flex items-center gap-4">
          
    

          {/* Book Now Button */}
         <a
  href={whatsappUrl}
  target="_blank"
  rel="noopener noreferrer"
  className="bg-secondary hover:bg-orange-600 text-white px-5 py-2.5 rounded-lg font-bold transition-all active:scale-95 inline-block"
>
  Book Now
</a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

     {/* Mobile Menu */}
{isOpen && (
  <div className="md:hidden fixed top-20 left-0 w-full bg-white  border-t border-slate-200 shadow-lg animate-slideDown">
    
    <div className="px-6 py-6 flex flex-col gap-1">

      {/* Close Button */}
      <div className="flex justify-between items-center mb-2">
        <span className="font-semibold text-slate-700 ">
          Menu
        </span>
        <button
          onClick={() => setIsOpen(false)}
          className="text-xl text-slate-600 hover:text-sky-600"
        >
          ✕
        </button>
      </div>

      {/* Menu Items */}
      {menuItems.map((item, index) => (
        <NavLink
          key={index}
          to={item.path}
          onClick={() => setIsOpen(false)}
          className={({ isActive }) =>
            `block text-lg font-medium py-3 px-2 rounded-lg transition-all ${
              isActive
                ? "bg-sky-100 text-sky-700"
                : "text-slate-700  hover:bg-slate-100 "
            }`
          }
        >
          {item.name}
        </NavLink>
      ))}


      

      {/* CTA Section */}
      <div className="flex flex-col gap-3">
       <a
  href={whatsappUrl}
  target="_blank"
  rel="noopener noreferrer"
  className="w-full text-center bg-secondary hover:bg-orange-600 text-white py-3 rounded-lg font-bold text-lg block"
>
  Book Now
</a>
      </div>
    </div>
  </div>
)}
    </header>
  );
}