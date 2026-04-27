import { FaPlane, FaMapMarkedAlt, FaWater, FaSwimmer,} from "react-icons/fa";

export default function Header() {
    const phoneNumber = "6281215679959";
    const createWhatsAppLink = (message) => {
        return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    }
    
  return (
    <>

     <section className="relative h-[400px] pt-20 flex items-center justify-center overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
         src="bgsection.jpg"
          alt="Bali beach surfing sunrise"
          className="w-full h-full object-cover"
        />

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/70 to-primary/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 text-white">

        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4">
           Bali Surf Trip
        </h1>

        <p className="text-base md:text-lg max-w-2xl mx-auto text-white/90">
          From your first time standing up to mastering high-performance turns.
        </p>

      </div>
    </section>
      

      {/* EXPERIENCE */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-3">
            The All-Inclusive Experience
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto">
            Everything is handled so you can focus fully on surfing.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

          {/* CARD 1 */}
          <div className="group bg-white rounded-2xl overflow-hidden border-slate-100 shadow-sm hover:shadow-xl transition">
            <img
              src="coach.jpeg"
              className="h-40 w-full object-cover group-hover:scale-105 transition"
              alt="coaching"
            />
            <div className="p-5">
              <FaSwimmer className="text-secondary text-xl mb-3" />
              <h3 className="font-semibold text-lg mb-2">Professional Coaching</h3>
              <p className="text-sm text-slate-500">
             Learn directly from certified instructors with hands-on guidance tailored to your skill level. Each session adapts to real-time Bali wave conditions so you progress faster, safer, and with more confidence in the water.
              </p>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="group bg-white rounded-2xl overflow-hidden border-slate-100 shadow-sm hover:shadow-xl transition">
            <img
              src="tools.jpg"
              className="h-40 w-full object-cover group-hover:scale-105 transition"
              alt="gear"
            />
            <div className="p-5">
              <FaWater className="text-secondary text-xl mb-3" />
              <h3 className="font-semibold text-lg mb-2">Equipment</h3>
            <p className="text-sm text-slate-500">
  Ride with high-quality surfboards and equipment suited for all levels. From stable beginner boards to performance setups, everything is selected to match your comfort and progression in the ocean.
</p>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="group bg-white rounded-2xl overflow-hidden border-slate-100 shadow-sm hover:shadow-xl transition">
            <img
              src="airport.jpg"
              className="h-40 w-full object-cover group-hover:scale-105 transition"
              alt="airport"
            />
            <div className="p-5">
              <FaPlane className="text-secondary text-xl mb-3" />
              <h3 className="font-semibold text-lg mb-2">Airport Transfer</h3>
              <p className="text-sm text-slate-500">
  Enjoy a smooth arrival experience with private airport pickup service. Our driver will greet you at Ngurah Rai Airport and take you directly to your stay without any hassle or waiting.
</p>
            </div>
          </div>

          {/* CARD 4 */}
          <div className="group bg-white rounded-2xl overflow-hidden border-slate-100 shadow-sm hover:shadow-xl transition">
            <img
              src="local.jpg"
              className="h-40 w-full object-cover group-hover:scale-105 transition"
              alt="map surf"
            />
            <div className="p-5">
              <FaMapMarkedAlt className="text-secondary text-xl mb-3" />
              <h3 className="font-semibold text-lg mb-2">Local Knowledge</h3>
             <p className="text-sm text-slate-500">
  Discover hidden surf spots guided by local expertise. We analyze wind, tide, and swell conditions daily to bring you to the best waves Bali has to offer, away from crowded beaches.
</p>
            </div>
          </div>

        </div>
       
      </section>

      <section className="pb-20 max-w-7xl mx-auto px-6 text-center">
          <a
              href={createWhatsAppLink("Hi Nyoman Point Break Surf School, i want to book a Bali Surf Trip")}
              target="_blank"
              className="bg-secondary px-5 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold text-center"
            >
              Plan Youy Next Surf Trip With Us
            </a>
      </section>

      <section className="bg-surface-container-lowest py-20">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* IMAGE */}
        <div className="order-2 lg:order-1">
          <div className="relative">

            <img
              src="hospitality.jpg"
              alt="Bali Hospitality"
              className="rounded-xl shadow-2xl relative z-10"
            />

            {/* decorative blocks */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-tertiary-fixed rounded-lg -z-10"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 border-4 border-primary/10 rounded-lg -z-10"></div>

          </div>
        </div>

        {/* CONTENT */}
        <div className="order-1 lg:order-2">

          <span className="text-sm tracking-widest text-secondary font-semibold mb-4 block">
            WARMTH & CARE
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Authentic Bali Hospitality
          </h2>

          <p className="text-slate-600 leading-relaxed mb-4">
  We understand the ocean like a local should — reading winds, swell direction, and tidal shifts to guide you to the best wave at the perfect moment. From world-class breaks like Uluwatu to quiet hidden gems along the coast, we take you exactly where the conditions are firing.
</p>

<p className="text-slate-600 leading-relaxed">
  Beyond the surf, we share the real Bali experience. From helping you move comfortably around the island to introducing authentic local meals and culture, our focus is to deliver a seamless journey filled with warmth, care, and genuine island hospitality.
</p>

         

        </div>

      </div>
    </section>

      
    </>
  );
}