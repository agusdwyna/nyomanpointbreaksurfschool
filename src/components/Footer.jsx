import { Link } from "react-router-dom";
import { FaInstagram, FaFacebook } from "react-icons/fa";

export default function Footer() {
    const phoneNumber = "6281215679959";
  const message = "Halo Nyoman Point Break Surf School, saya ingin booking lesson.";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  return (
    <footer className="bg-slate-50  border-t border-slate-200 ">

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 lg:px-12 py-12 max-w-7xl mx-auto">

        {/* Brand */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-primary">
            Nyoman Point Break Surf School
          </h3>

          <p className="text-slate-500 text-sm leading-relaxed">
            Premium surf instruction based in Bali. Empowering surfers through
            technical excellence and ocean respect.
          </p>

          {/* Social */}
         <div className="flex gap-3">
  
  <a
    href="https://www.facebook.com/nusaduasurflessons/"
    target="_blank"
    rel="noopener noreferrer"
    className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all"
  >
    <FaFacebook size={14} />
  </a>

  <a
    href="https://www.instagram.com/nyoman_pointbreak"
    target="_blank"
    rel="noopener noreferrer"
    className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all"
  >
    <FaInstagram size={14} />
  </a>

</div>
        </div>

        {/* Links */}
        <div className="grid grid-cols-2 gap-6">

          {/* Explore */}
          <div>
            <h5 className="text-primary font-semibold mb-4">Explore</h5>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/surf-coaching" className="text-slate-500 hover:text-primary underline">
                  Surf Coaching
                </Link>
              </li>
              <li>
                <Link to="/guided-trips" className="text-slate-500 hover:text-primary underline">
                  Guided Trips
                </Link>
              </li>
              
            </ul>
          </div>

          {/* Support */}
          <div>
            <h5 className="text-primary font-semibold mb-4">Support</h5>
            <ul className="space-y-2 text-sm">
             
              <li>
                <Link to="/faq" className="text-slate-500 hover:text-primary underline">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-500 hover:text-primary underline">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
      <div className="space-y-4">
  <h5 className="text-primary font-semibold">Start Your Surf Journey</h5>

  <p className="text-slate-500  text-sm">
    Ready to catch your first wave? Chat with us directly and book your lesson today.
  </p>

  <a
    href={whatsappUrl}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center justify-center bg-secondary hover:bg-orange-600 text-white px-5 py-3 rounded-lg font-bold w-full transition-all active:scale-95"
  >
     Chat on WhatsApp
  </a>
</div>

      </div>

      {/* Bottom */}
      <div className="px-6 lg:px-12 py-6 border-t border-slate-200 d text-center">
        <p className="text-slate-500  text-sm">
          © {new Date().getFullYear()} DWDev. All rights reserved.
        </p>
      </div>

    </footer>
  );
}