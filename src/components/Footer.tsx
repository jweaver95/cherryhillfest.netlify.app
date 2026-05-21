import { Facebook, Instagram, Twitter, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-red-400 bg-clip-text text-transparent mb-4">
              Cherry Hill Arts & Music Waterfront Festival
            </h3>
            <p className="text-gray-400 mb-4 leading-relaxed">
              The Cherry Hill Arts & Music Waterfront Festival is produced, organized, and managed by The Youth Resiliency Institute. The Youth Resiliency Institute is an organization under the umbrella of Connection Thru Life Inc., a 501(c)(3) non-profit organization registered in the state of Maryland. All donations are tax deductible.
            </p>
            <div className="flex items-center space-x-2 text-gray-400 mb-2">
              <MapPin size={18} />
              <span>Middle Branch Park, Baltimore, MD</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-400">
              <Mail size={18} />
              <span>info@youthresiliency.org</span>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/festival" className="text-gray-400 hover:text-amber-400 transition-colors">
                  Festival Schedule
                </Link>
              </li>
              <li>
                <Link to="/baltimore4th" className="text-gray-400 hover:text-amber-400 transition-colors">
                  Plan Your Visit
                </Link>
              </li>
              <li>
                <Link to="/our-story" className="text-gray-400 hover:text-amber-400 transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <Link to="/partners" className="text-gray-400 hover:text-amber-400 transition-colors">
                  Become a Partner
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Connect With Us</h4>
            <div className="flex space-x-2">
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors p-2.5 -m-2.5 rounded-lg hover:bg-white/5" aria-label="Facebook">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors p-2.5 -m-2.5 rounded-lg hover:bg-white/5" aria-label="Instagram">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors p-2.5 -m-2.5 rounded-lg hover:bg-white/5" aria-label="Twitter">
                <Twitter size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Youth Resiliency Institute. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
