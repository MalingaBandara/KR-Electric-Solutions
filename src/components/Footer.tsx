import React from 'react';
import { Link } from 'react-router-dom';
import { FacebookIcon, InstagramIcon, PhoneIcon } from 'lucide-react';
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-blue-900 text-white">
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Kanchana Rangajeewa</h3>
            <p className="mb-4">
              Professional Electrical Services for Homes & Businesses
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                aria-label="Facebook"
                className="text-white hover:text-orange-400"
              >
                <FacebookIcon size={24} />
              </a>
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                aria-disabled="true"
                className="text-white opacity-50 cursor-not-allowed pointer-events-none"
              >
                <InstagramIcon size={24} />
              </a>
              <a
                href="tel:+94716161573"
                aria-label="Phone"
                className="text-white hover:text-orange-400"
              >
                <PhoneIcon size={24} />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="hover:text-orange-400 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-orange-400 transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-orange-400 transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  className="hover:text-orange-400 transition-colors"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-orange-400 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <address className="not-italic">
              <p className="mb-2">Phone: +94 (716) 161-573</p>
              <p className="mb-2">Email: contact@kanchana.com</p>
              <p>
                E 1/A, Beminiwatta,
                <br />
                Mawanella
              </p>
            </address>
          </div>
        </div>
        <div className="border-t border-blue-700 mt-8 pt-6 text-center">
          <p>© {currentYear} Kanchana Rangajeewa. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;