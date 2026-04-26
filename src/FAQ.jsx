export default function Home() {
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
           Frequently Asked Questions
        </h1>

        <p className="text-base md:text-lg max-w-2xl mx-auto text-white/90">
          Everything you need to know about starting your surfing journey with Nyoman Point Break Surf School. From booking to what to expect on your first lesson, we’ve got you covered.
        </p>

      </div>
    </section>

    <section className="max-w-4xl mx-auto px-6 py-20">

      <div className="space-y-6">

        {/* 1 */}
        <details className="group bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden" open>
          <summary className="flex justify-between items-center p-6 cursor-pointer list-none hover:bg-slate-50 transition">
            <span className="text-lg font-semibold text-primary">
              Is this surf school suitable for beginners in Bali?
            </span>
            <span className="text-orange-500 transition-transform group-open:rotate-180">
              ⌄
            </span>
          </summary>

          <div className="p-6 pt-0 border-t border-slate-100">
            <p className="text-slate-500 leading-relaxed">
              Yes, we specialize in beginner-friendly surf lessons across Bali. We choose calm, soft-wave beaches
              and use stable soft-top boards so you can safely learn paddling, balance, and your first pop-up
              with full instructor support.
            </p>
          </div>
        </details>

        {/* 2 */}
        <details className="group bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
          <summary className="flex justify-between items-center p-6 cursor-pointer list-none hover:bg-slate-50 transition">
            <span className="text-lg font-semibold text-primary">
              What should I bring for my surf lesson in Bali?
            </span>
            <span className="text-orange-500 transition-transform group-open:rotate-180">
              ⌄
            </span>
          </summary>

          <div className="p-6 pt-0 border-t border-slate-100">
            <p className="text-slate-500 mb-3">
              We provide all surf equipment, including boards and rash guards. Just bring:
            </p>

            <ul className="list-disc list-inside text-slate-500 space-y-1">
              <li>Swimwear</li>
              <li>Sunscreen (reef-safe recommended)</li>
              <li>Towel and dry clothes</li>
              <li>Surfboard</li>
              <li>Good energy for your first waves</li>
            </ul>
          </div>
        </details>

        {/* 3 */}
        <details className="group bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
          <summary className="flex justify-between items-center p-6 cursor-pointer list-none hover:bg-slate-50 transition">
            <span className="text-lg font-semibold text-primary">
              How long is a typical surf lesson in Bali?
            </span>
            <span className="text-orange-500 transition-transform group-open:rotate-180">
              ⌄
            </span>
          </summary>

          <div className="p-6 pt-0 border-t border-slate-100">
            <p className="text-slate-500 leading-relaxed">
              A standard surf lesson lasts around 2 to 2.5 hours. It includes beach instruction, safety briefing,
              practice on land, and guided water coaching so you get the most out of every session.
            </p>
          </div>
        </details>

        {/* 4 */}
        <details className="group bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
          <summary className="flex justify-between items-center p-6 cursor-pointer list-none hover:bg-slate-50 transition">
            <span className="text-lg font-semibold text-primary">
              Is surfing in Bali safe for first-timers?
            </span>
            <span className="text-orange-500 transition-transform group-open:rotate-180">
              ⌄
            </span>
          </summary>

          <div className="p-6 pt-0 border-t border-slate-100">
            <p className="text-slate-500 leading-relaxed">
              Yes, safety is our top priority. We carefully select beginner-safe beaches in Bali,
              monitor ocean conditions daily, and maintain small instructor ratios so every student
              gets full attention and guidance in the water.
            </p>
          </div>
        </details>

        {/* 5 */}
        <details className="group bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
          <summary className="flex justify-between items-center p-6 cursor-pointer list-none hover:bg-slate-50 transition">
            <span className="text-lg font-semibold text-primary">
              How do I book a surf lesson in Bali?
            </span>
            <span className="text-orange-500 transition-transform group-open:rotate-180">
              ⌄
            </span>
          </summary>

          <div className="p-6 pt-0 border-t border-slate-100">
            <p className="text-slate-500 leading-relaxed">
              You can easily book through WhatsApp or our online form. Simply choose your date,
              level, and preferred session. We recommend booking at least 1–2 days in advance,
              especially during Bali’s peak surf season.
            </p>
          </div>
        </details>

      </div>

    </section>

      <section className="py-24 bg-primary relative overflow-hidden">

      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0 opacity-10">
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAHO8q8gzus3am989XYFWV8SiD2G-VCztqVAEpjXozZuvp8yeo-Eix1yuH5t_D-3n1bAQl-FN6cbnAxW_EAwEa2ZEA_kjbEk63dGh5sVncyR6jiy0Y6mMjrYRUb9G3B1PFRT451gQOw84WH3zXs4DZFZul8GFqjVE8ADyF6SZ9siDlQXAwUKJT-vIXPU7xkllHVRwSmXOeNRicgkcnt3vhCp1ytAm27-DPfnqLzWvm0MjxlcKi5R99M7BoI_yMv30FcCRmH9ULs5PMp"
          alt="ocean waves background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">

        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Ready to Ride?
        </h2>

        <p className="text-white/80 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          From mellow beginner waves to powerful reef breaks, we design every surf experience
          based on your level and goals. Join us in Bali and experience the ocean the right way —
          safe, guided, and unforgettable.
        </p>

        <a
  href={createWhatsAppLink("Hi Nyoman Point Break Surf School, I want to book a surf lesson in Bali")}
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block bg-orange-500 hover:bg-orange-600 transition text-white px-10 py-4 rounded-xl font-semibold shadow-lg active:scale-95"
>
  Book Your Surf Experience
</a>

      </div>

    </section>
    </>
    );
}