import { useState } from "react";
export default function Contact() {
const [form, setForm] = useState({
    name: "",
    email: "",
    interest: "Beginner Surf Coaching",
    message: "",
  });

  const phoneNumber = "6281215679959"; // ganti nomor WA kamu (tanpa +)

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const text = `
🌊 New Surf Inquiry

👤 Name: ${form.name}
📧 Email: ${form.email}
🏄 Interest: ${form.interest}

💬 Message:
${form.message}
    `;

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;

    window.open(url, "_blank");
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
           Get in Touch
        </h1>

        <p className="text-base md:text-lg max-w-2xl mx-auto text-white/90">
           Whether you're looking for your first wave or your next big barrel, our team in Bali is ready to guide you.
        </p>

      </div>
    </section>

     <section className="py-20 px-6 md:px-12 max-w-[1280px] mx-auto">

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

        {/* LEFT SIDE */}
        <div className="lg:col-span-5 space-y-8">

          {/* CONNECT CARD */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
            <h3 className="text-2xl font-bold text-primary mb-6">
              Connect with Us
            </h3>

            <div className="space-y-6">

              {/* PHONE */}
              <div className="flex items-start gap-4">
                <div className="bg-white p-3 rounded-xl shadow-sm">
                  📞
                </div>
                <div>
                  <p className="text-xs tracking-widest text-slate-500 mb-1">
                    WHATSAPP / PHONE
                  </p>
                  <p className="text-lg font-bold text-primary">
                     +62 812 1567 9959
                  </p>
                </div>
              </div>

              {/* EMAIL */}
              <div className="flex items-start gap-4">
                <div className="bg-white p-3 rounded-xl shadow-sm">
                  ✉️
                </div>
                <div>
                  <p className="text-xs tracking-widest text-slate-500 mb-1">
                    EMAIL ADDRESS
                  </p>
                  <p className="text-md lg:text-lgtext-lg font-bold text-primary">
                    hello@nyomansurfschool.com
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* LOCATION CARD */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">

            <h3 className="text-xl font-bold text-primary mb-4">
              Our Base
            </h3>

            <div className="flex items-start gap-4">
              <div className="bg-orange-50 p-3 rounded-xl">
                📍
              </div>

              <p className="text-slate-600 text-sm leading-relaxed">
               662M+6W8, Benoa, Kec. Kuta Sel., Kabupaten Badung, Bali
              </p>
            </div>

          
          </div>

        </div>

        {/* RIGHT SIDE - FORM */}
        <div className="lg:col-span-7">
      <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-slate-100">

        <h3 className="text-2xl font-bold text-primary mb-2">
          Send a Message
        </h3>

        <p className="text-slate-500 mb-10">
          We’ll get back to you within 24 hours to confirm your surf sessions.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">

          {/* NAME + EMAIL */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <div>
              <label className="text-xs tracking-widest text-slate-500">
                FULL NAME
              </label>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                type="text"
                placeholder="John Doe"
                className="w-full mt-2 px-4 py-3 rounded-lg border border-slate-200 focus:border-orange-400 outline-none"
                required
              />
            </div>

            <div>
              <label className="text-xs tracking-widest text-slate-500">
                EMAIL ADDRESS
              </label>
              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                type="email"
                placeholder="john@example.com"
                className="w-full mt-2 px-4 py-3 rounded-lg border border-slate-200 focus:border-orange-400 outline-none"
                required
              />
            </div>

          </div>

          {/* SELECT */}
          <div>
            <label className="text-xs tracking-widest text-slate-500">
              INTERESTED IN
            </label>

            <select
              name="interest"
              value={form.interest}
              onChange={handleChange}
              className="w-full mt-2 px-4 py-3 rounded-lg border border-slate-200 focus:border-orange-400 outline-none bg-white"
            >
              <option>Surf Package</option>
              <option>Surf Coaching</option>
              <option>Guided Day Trip</option>
              <option>Custom Surf Camp Package</option>
            </select>
          </div>

          {/* MESSAGE */}
          <div>
            <label className="text-xs tracking-widest text-slate-500">
              YOUR MESSAGE
            </label>

            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows="5"
              placeholder="Tell us about your surfing experience and when you'll be in Bali..."
              className="w-full mt-2 px-4 py-3 rounded-lg border border-slate-200 focus:border-orange-400 outline-none"
              required
            />
          </div>

          {/* BUTTON */}
          <button
            type="submit"
            className="w-full bg-secondary text-white py-4 rounded-xl font-semibold hover:bg-orange-600 transition active:scale-95"
          >
            Send 
          </button>

        </form>

      </div>
    </div>

      </div>

    </section>

     <section className="mt-20">

      <div className="relative w-full h-[320px] sm:h-[380px] md:h-[450px] lg:h-[500px]">

        {/* MAP */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3942.8595511185604!2d115.23241511145744!3d-8.799263091216693!2m3!1f0!2f0!3f0!2m3!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd243cf0aa87e3b%3A0x85ea54ba1fcc09e1!2sNyomans%20Point%20break%20Surf%20school!5e0!3m2!1sid!2sid!4v1777236118981!5m2!1sid!2sid"
          className="w-full h-full border-0"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-primary/10 pointer-events-none" />

        {/* DESKTOP / TABLET CARD */}
        <div className="hidden md:block absolute top-10 left-6 lg:left-12 z-10">

          <div className="bg-white p-5 lg:p-6 rounded-2xl shadow-lg border border-slate-100 max-w-sm w-[260px] lg:w-[320px]">

            <h4 className="text-base lg:text-lg font-bold text-primary mb-2">
              Nyoman Point Break HQ
            </h4>

            <p className="text-xs lg:text-sm text-slate-500 leading-relaxed mb-4">
              Located just a 2-minute walk from Nusa Dua Beach, our surf school
              sits in the heart of Canggu’s most consistent waves.
            </p>

            <a
              href="https://www.google.com/maps?q=Nyomans+Point+break+Surf+school"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-500 text-sm font-semibold hover:underline flex items-center gap-2"
            >
              Get Directions <span>→</span>
            </a>

          </div>

        </div>

        {/* MOBILE BOTTOM CARD */}
        <div className="md:hidden absolute bottom-0 left-0 right-0 z-10 px-4 pb-4">

          <div className="bg-white p-4 rounded-2xl shadow-xl border border-slate-100">

            <h4 className="text-base font-bold text-primary mb-1">
              Nyoman Point Break HQ
            </h4>

            <p className="text-xs text-slate-500 mb-3 leading-relaxed">
              2-minute walk from Nusa Dua Beach in Canggu surf zone.
            </p>

            <a
              href="https://www.google.com/maps?q=Nyomans+Point+break+Surf+school"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-500 text-sm font-semibold"
            >
              Get Directions →
            </a>

          </div>

        </div>

      </div>

    </section>
    </>
 
  );
}