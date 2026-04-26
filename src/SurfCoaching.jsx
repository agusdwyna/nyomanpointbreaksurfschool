import { FaCheckCircle} from "react-icons/fa";
export default function SurfCoaching() {
const phoneNumber = "6281215679959";

  const createWhatsAppLink = (message) => {
    return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  };

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
         Master the Waves 
        </h1>

        <p className="text-base md:text-lg max-w-2xl mx-auto text-white/90">
        From your first time standing up to mastering high-performance turns, Nyoman provides personalized instruction tailored to your journey
        </p>

      </div>
    </section>

     <section className="py-20 max-w-7xl mx-auto px-6">
      
      {/* Title */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-3">
          Our Coaching Programs
        </h2>
     
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

        {/* Beginner */}
        <div className="md:col-span-12 lg:col-span-7 bg-white rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row">
          
          {/* Image */}
          <div className="md:w-1/2 relative h-64 md:h-auto">
            <img
              src="beginner.jpg"
              className="absolute inset-0 w-full h-full object-cover"
              alt="Beginner Surf Lesson Bali"
            />

            <span className="absolute top-4 left-4 bg-white/90 px-4 py-1 rounded-full text-sm font-semibold text-primary">
              Beginner
            </span>
          </div>

          {/* Content */}
          <div className="md:w-1/2 p-6 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-primary mb-3">
                First Wave Discovery
              </h3>

              <p className="text-slate-600 mb-5">
                Perfect for beginners. Learn safety, basics, and catch your first wave.
              </p>

              <ul className="space-y-3 mb-6 text-sm text-slate-700">
                <li className="flex items-center gap-2">
                  <FaCheckCircle className="text-secondary" /> Ocean safety
                </li>
                <li className="flex items-center gap-2">
                  <FaCheckCircle className="text-secondary" /> Paddling & pop-up
                </li>
                <li className="flex items-center gap-2">
                  <FaCheckCircle className="text-secondary" /> Balance & standing
                </li>
              </ul>
            </div>

            <a
              href={createWhatsAppLink("Hi, I want to book Beginner Surf Lesson")}
              target="_blank"
              className="bg-secondary hover:bg-orange-600 text-white py-3 rounded-lg font-semibold text-center"
            >
              Book via WhatsApp
            </a>
          </div>
        </div>

        {/* Intermediate */}
        <div className="md:col-span-6 lg:col-span-5 bg-white rounded-xl shadow-lg overflow-hidden flex flex-col">
          
          <div className="relative h-64">
            <img
              src="intermediate.jpg"
              className="absolute inset-0 w-full h-full object-cover"
              alt="Intermediate Surf Bali"
            />

            <span className="absolute top-4 left-4 bg-white/90 px-4 py-1 rounded-full text-sm font-semibold text-primary">
              Intermediate
            </span>
          </div>

          <div className="p-6 flex flex-col justify-between flex-grow">
            <div>
              <h3 className="text-xl font-bold text-primary mb-3">
                Green Wave Transition
              </h3>

              <p className="text-slate-600 mb-5">
                Learn to ride unbroken waves and improve your turns.
              </p>

              <ul className="space-y-3 mb-6 text-sm text-slate-700">
                <li className="flex items-center gap-2">
                  <FaCheckCircle className="text-secondary" /> Wave reading
                </li>
                <li className="flex items-center gap-2">
                  <FaCheckCircle className="text-secondary" /> Take-offs & turns
                </li>
                <li className="flex items-center gap-2">
                  <FaCheckCircle className="text-secondary" /> Surf etiquette
                </li>
              </ul>
            </div>

            <a
              href={createWhatsAppLink("Hi, I want to book Intermediate Surf Lesson")}
              target="_blank"
              className="bg-secondary hover:bg-orange-600 text-white py-3 rounded-lg font-semibold text-center"
            >
              Book via WhatsApp
            </a>
          </div>
        </div>

        {/* Advanced */}
        <div className="md:col-span-12 bg-[#004370] text-white rounded-xl overflow-hidden flex flex-col lg:flex-row">

          {/* Image */}
          <div className="lg:w-3/5 relative h-72 lg:h-auto">
            <img
              src="advanced.jpg"
              className="absolute inset-0 w-full h-full object-cover opacity-60"
              alt="Advanced Surf Bali"
            />
            

            <div className="absolute top-6 left-6 bg-orange-500 px-5 py-2 rounded-full font-semibold">
              Advanced Program
            </div>
          </div>

          {/* Content */}
          <div className="lg:w-2/5 p-8 flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-4">
              Performance Pro Mastery
            </h3>

            <p className="text-white/80 mb-6">
              Advanced coaching for serious surfers aiming for high performance.
            </p>

  <ul className="space-y-3 mb-6 text-sm text-white/90">
            <li className="flex items-center gap-2">
  <FaCheckCircle className="text-secondary" /> Barrel riding & positioning
</li>
<li className="flex items-center gap-2">
  <FaCheckCircle className="text-secondary" /> High-performance maneuver control
</li>
<li className="flex items-center gap-2">
  <FaCheckCircle className="text-secondary" /> Advanced wave strategy & timing
</li>
              </ul>
            

            <a
              href={createWhatsAppLink("Hi, I want to join Advanced Surf Program")}
              target="_blank"
              className="bg-secondary hover:bg-orange-600 text-white py-3 rounded-lg font-semibold text-center"
            >
              Join the Program
            </a>
          </div>
        </div>

      </div>
    </section>
    </>
  );
}