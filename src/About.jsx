import { FaCheckCircle, FaWater, FaShieldAlt, FaLeaf, FaUsers } from "react-icons/fa";

export default function About() {
      const values = [
    {
      icon: <FaShieldAlt className="text-secondary text-3xl" />,
      title: "Safety First",
      desc: "We prioritize ocean safety education above all. Understanding currents, etiquette, and wave physics ensures you surf with confidence.",
    },
    {
      icon: <FaLeaf className="text-secondary text-3xl" />,
      title: "Sustainability",
      desc: "We are stewards of the ocean. Our school participates in weekly beach cleanups and supports local marine conservation efforts.",
    },
    {
      icon: <FaUsers className="text-secondary text-3xl" />,
      title: "Community",
      desc: "When you surf with us, you become part of the family. We share stories, meals, and the best local secrets of the island.",
    },
  ];
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
         Born In Surf
        </h1>

        <p className="text-base md:text-lg max-w-2xl mx-auto text-white/90">
         The story and passion that build   Nyoman Point Break Surf School, Bali's premier surf coaching destination.
        </p>

      </div>
    </section>

    <section className="py-20 px-6 lg:px-12 max-w-7xl mx-auto">
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* TEXT */}
        <div className="order-2 lg:order-1 space-y-6">

          <span className="text-secondary uppercase text-sm tracking-widest font-semibold">
            Local Expertise
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            Our Stories
          </h2>

          <p className="text-slate-600 leading-relaxed">
            It all started with surfing with friends, and we had the idea to open a surfing business. We started in 2006, planning to launch a surfing service in Nusa Dua, dedicated to helping everyone, both beginners and experienced, experience the thrill of Bali's waves safely and enjoyably. With experienced instructors, quality equipment, and prime locations, we are committed to providing an unforgettable surfing experience.
          </p>

          <p className="text-slate-600  leading-relaxed">
           Located in the beautiful Nusa Dua area, our surfing business was founded with the goal of introducing surfing to everyone, from beginners to advanced. We offer a variety of services, from private and group surfing lessons, board rentals, to guiding you to the best spots based on wave conditions.

Supported by experienced local instructors who understand the characteristics of Nusa Dua's waves, we prioritize the safety, comfort, and skill development of each participant. We believe that surfing is not just a sport, but a lifestyle that teaches balance, patience, and a connection with nature.

With friendly service and a relaxed Balinese atmosphere, we are ready to be your surfing travel partner.

Ride the waves in Nusa Dua 🌊
Learn to surf from scratch with an experienced local coach.
Fun, safe, and definitely addictive!
          </p>

          {/* BADGES */}
          <div className="pt-4 flex flex-wrap gap-3">

            <div className="bg-primary/10 px-4 py-2 rounded-lg flex items-center gap-2">
              <FaCheckCircle className="text-secondary" />
              <span className="text-sm font-semibold text-primary">
                Certified Tutor
              </span>
            </div>

            <div className="bg-primary/10 px-4 py-2 rounded-lg flex items-center gap-2">
              <FaWater className="text-secondary" />
              <span className="text-sm font-semibold text-primary">
                Bali Native
              </span>
            </div>

          </div>
        </div>

        {/* IMAGE */}
        <div className="order-1 lg:order-2">
          <div className="relative p-4 bg-primary/10 rounded-[2rem] shadow-xl rotate-1">

            <img
              src="about.jpg"
              alt="Nyoman - Surf Instructor Bali"
              className="rounded-[1.5rem] w-full aspect-[4/5] object-cover"
            />

            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg max-w-[220px]">

              <p className="text-xs uppercase text-secondary mb-1 font-semibold">
                Founder’s Mission
              </p>

              <p className="text-sm font-bold text-primary italic">
                "Surfing is for everyone. My goal is to make you feel as at home
                in the water as I do."
              </p>

            </div>
          </div>
        </div>

      </div>
    </section>

        <section className="bg-primary/5 py-20">
      <div className="px-6 lg:px-12 max-w-7xl mx-auto">

        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            Our Vision
          </h2>
          <p className="text-slate-600  mt-2">
            More than just standing on a board.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {values.map((item, index) => (
            <div
              key={index}
              className="bg-white  p-8 rounded-xl shadow-lg border border-slate-100 flex flex-col gap-4 hover:-translate-y-2 transition-all duration-300"
            >
              {/* Icon */}
              <div>{item.icon}</div>

              {/* Title */}
              <h3 className="text-xl font-bold text-primary">
                {item.title}
              </h3>

              {/* Desc */}
              <p className="text-slate-600  text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>

    
    </>
  );
}