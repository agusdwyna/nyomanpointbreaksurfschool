import {
  FaUserGraduate,
  FaShieldAlt,
  FaWater,
  FaCalendarAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

import { Link } from "react-router-dom";    
export default function Hero() {
  const phoneNumber = "6281215679959";

  const createWhatsAppLink = (message) => {
    return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  };

const features = [
    { icon: <FaUserGraduate />, title: "Local Experienced Instructors" },
    { icon: <FaShieldAlt />, title: "Safe & Beginner-Friendly" },
    { icon: <FaWater />, title: "High-Quality Equipment" },
    { icon: <FaCalendarAlt />, title: "Flexible Schedule" },
    { icon: <FaMapMarkerAlt />, title: "Best Surf Spots in Bali" },
  ];

  const singleSession = [
    {
      name: "Private",
      oldPrice: "700k",
      price: "600k",
      features: [
        "1 Instructor : 1 Student",
        "Rash guard & Sunscreen",
        "Water & Locker",
      ],
    },
    {
      name: "Semi Private",
      oldPrice: "550k",
      price: "450k",
      features: [
        "1 Instructor : 2 Students",
        "Rash guard & Sunscreen",
        "Water & Locker",
      ],
    },
    {
      name: "Group",
      oldPrice: "450k",
      price: "350k",
      features: [
        "1 Instructor : 3-4 Students",
        "Rash guard & Sunscreen",
        "Water & Locker",
      ],
    },
  ];

  const packages3Day = [
    {
      name: "Private (3 Days)",
      oldPrice: "1.800k",
      price: "1.600k",
      desc: "Most effective for rapid skill development with dedicated coaching.",
    },
    {
      name: "Semi Private (3 Days)",
      oldPrice: "3.300k",
      price: "2.800k",
      desc: "Perfect for couples or friends traveling together.",
    },
    {
      name: "Group (3 Days)",
      oldPrice: "4.050k",
      price: "3.450k",
      desc: "Best value for small groups looking for a challenge.",
    },
  ];

  return (
    <>
    <section className="relative h-[921px] min-h-[600px] flex items-center overflow-hidden pt-28 md:pt-0">
      
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="herohome.png"
          alt="Surfing in Bali"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-sky-900/60 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1280px] mx-auto px-6 lg:px-12 w-full text-white">
        <div className="max-w-2xl">
          
          <h1 className="text-5xl md:text-5xl lg:text-6xl font-extrabold mb-4">
            Ride Your First Wave with Confidence
          </h1>

          <p className="text-xl md:text-xl mb-6 text-white/90">
        Learn to surf in Bali with experienced local instructors with Nyoman Point Break Surf School. 
          </p>

        <a
  href={createWhatsAppLink(
    "Hi Nyoman Point Break 🌊, saya ingin booking lesson."
  )}
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all active:scale-95"
>
  Book via WhatsApp
</a>

        </div>
      </div>
    </section>
<section className="py-16 bg-white">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-primary">
            Why Choose Nyoman Point Break Surf School
          </h2>
          <p className="text-primary  mt-3 max-w-xl mx-auto">
            Experience the best surf lessons in Bali with professional local instructors and top-quality service.
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {features.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col items-center text-center p-4 rounded-xl transition-all hover:bg-sky-50  hover:scale-105 ${
                index === 4 ? "col-span-2 md:col-span-1" : ""
              }`}
            >
              {/* Icon */}
              <div className="w-12 h-12 text-primary/80 bg-sky-100 flex items-center justify-center rounded-full mb-4 text-xl">
                {item.icon}
              </div>

              {/* Text */}
              <span className="text-sm font-semibold tracking-wide text-slate-700 uppercase">
                {item.title}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>

    <section className="py-20 bg-sky-50 ">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">

        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-primary mb-3">
            Choose Your Surf Adventure
          </h2>
          <p className="text-slate-600 ">
            Professional coaching for every level. All packages include high-quality equipment.
          </p>
        </div>

        {/* SINGLE SESSION */}
        <div className="mb-16">
          <h3 className="text-xl font-semibold mb-6 flex items-center text-slate-800 ">
            <span className="w-8 h-1 bg-[#004370]/80 mr-3"></span>
            Single Session (2 Hours)
          </h3>

          <div className="grid md:grid-cols-3 gap-6">
            {singleSession.map((pkg, i) => (
              <div
                key={i}
                className="bg-white d rounded-xl shadow hover:-translate-y-2 transition-all p-6"
              >
                <div className="text-center mb-6 font-bold text-orange-500  uppercase">
                  {pkg.name}
                </div>

                <div className="mb-6 flex items-baseline gap-2">
                  <span className="line-through text-slate-400">
                    {pkg.oldPrice}
                  </span>
                  <span className="text-3xl font-bold text-slate-900 d">
                    {pkg.price}
                  </span>
                </div>

                <ul className="space-y-2 mb-6 text-sm text-slate-600 ">
                  {pkg.features.map((f, idx) => (
                    <li key={idx}>✔ {f}</li>
                  ))}
                </ul>

                <a
                  href={createWhatsAppLink(
                    `Hi Nyoman Point Break 🌊\n\nI want to book:\nPackage: ${pkg.name} (Single Session)\nDate: \nPeople: \n\nPlease confirm availability 🙏`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center bg-orange-500 hover:bg-orange-00 text-white py-3 rounded-lg font-bold"
                >
                  Book via WhatsApp
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* 3 DAY PACKAGE */}
        <div>
          <h3 className="text-xl font-semibold mb-6 flex items-center text-slate-800 ">
            <span className="w-8 h-1 bg-[#004370]/80 mr-3"></span>
            3-Day Intensive Package
          </h3>

          <div className="grid md:grid-cols-3 gap-6">
            {packages3Day.map((pkg, i) => (
              <div
                key={i}
                className="bg-white  rounded-xl shadow hover:-translate-y-2 transition-all p-6"
              >
                <div className="mb-2 font-bold text-[#004370]/80 uppercase">
                  {pkg.name}
                </div>

                <div className="mb-4 flex items-baseline gap-2">
                  <span className="line-through text-slate-400">
                    {pkg.oldPrice}
                  </span>
                  <span className="text-3xl font-bold text-slate-900 ">
                    {pkg.price}
                  </span>
                </div>

                <p className="text-sm text-slate-600 mb-6">
                  {pkg.desc}
                </p>

                <a
                  href={createWhatsAppLink(
                    `Hi Nyoman Point Break 🌊\n\nI want to book:\nPackage: ${pkg.name}\nDate: \nPeople: \n\nPlease confirm availability 🙏`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center bg-[#004370]/80 hover:bg-[#004370] text-white py-3 rounded-lg font-bold"
                >
                  Book via WhatsApp
                </a>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>

    <section className="py-20 bg-white ">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">

        <div className="bg-primary text-white rounded-3xl overflow-hidden flex flex-col md:flex-row">

          {/* Image */}
          <div className="md:w-1/2 min-h-[300px] md:min-h-[400px]">
            <img
              src="hometrip.jpg"
              alt="Guided surf trip Bali hidden beach"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Content */}
          <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">

            <span className="text-sm uppercase tracking-wide text-orange-400 mb-3 font-semibold">
              Exclusive Guided Trip
            </span>

            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Discover Hidden Breaks in Bali
            </h2>

            <p className="text-white/80 mb-6 leading-relaxed">
              Join our local surf experts for a full-day guided surf trip to Bali’s
              hidden gems. We take care of transport, logistics, and finding the
              best waves—so you can focus on surfing.
            </p>

            {/* CTA */}
          <Link
            to="/guided-trips"
            className="inline-flex items-center justify-center bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-lg font-bold text-lg transition-all active:scale-95 w-fit"
            >
            Explore Surf Trip →
            </Link>

          </div>
        </div>

      </div>
    </section>

    <section className="py-20 bg-slate-50 ">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div className="space-y-8">

          <span className="text-secondary font-semibold uppercase tracking-widest">
            Client Stories
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-primary leading-tight">
            Join Our Global Community of Watermen
          </h2>

          {/* Testimonial Card */}
          <div className="bg-white  p-6 md:p-8 rounded-3xl shadow-sm border-l-4 border-secondary italic">
            
            <p className="text-slate-600  text-lg mb-4">
              "Nyoman didn't just teach me how to stand up; he taught me how to read the ocean. 
              In three days, I went from a complete beginner to catching my first green waves. 
              Unforgettable experience!"
            </p>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-slate-300"></div>

              <div>
                <p className="font-semibold text-primary">Sarah Mitchell</p>
                <p className="text-sm text-slate-500">Australia</p>
              </div>
            </div>

          </div>
        </div>

        {/* RIGHT IMAGE GRID */}
        <div className="grid grid-cols-2 gap-4">

          {/* Column 1 */}
          <div className="space-y-4 pt-10">
            <img
              src="hero1.jpg"
              alt="Surfer girl with board on tropical beach"
              className="rounded-3xl shadow-lg w-full h-60 object-cover"
            />

            <img
              src="hero2.jpg"
              alt="Surfers paddling together"
              className="rounded-3xl shadow-lg w-full h-80 object-cover"
            />
          </div>

          {/* Column 2 */}
          <div className="space-y-4">
            <img
              src="hero3.jpg"
              alt="Palm trees tropical beach"
              className="rounded-3xl shadow-lg w-full h-80 object-cover"
            />

            <img
              src="hero4.jpg"
              alt="Surfboard detail in sand"
              className="rounded-3xl shadow-lg w-full h-60 object-cover"
            />
          </div>

        </div>

      </div>
    </section>
    

    </>
  );
}