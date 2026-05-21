import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { to: '/', label: 'Home' },
    { to: '/festival', label: 'The Festival' },
    { to: '/baltimore4th', label: '4th of July' },
    { to: '/our-story', label: 'Our Story' },
    { to: '/stand-strong', label: 'Stand Strong' },
    { to: '/partners', label: 'Partners' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <img src="/CHWF_logo_generic copy.png" alt="Cherry Hill Arts & Music Waterfront Festival logo" className="h-20 w-auto" />
            <span className="hidden lg:block text-lg font-bold whitespace-nowrap tracking-tight" style={{ color: '#65a30d' }}>
              Cherry Hill Arts and Music Waterfront Festival
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-1 shrink-0">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-3 py-2 text-xs font-medium transition-colors whitespace-nowrap relative ${
                  isActive(link.to)
                    ? 'font-semibold'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
                style={isActive(link.to) ? { color: '#65a30d' } : undefined}
              >
                {link.label}
                {isActive(link.to) && (
                  <span className="absolute bottom-0 left-3 right-3 h-0.5 rounded-full" style={{ backgroundColor: '#65a30d' }} />
                )}
              </Link>
            ))}
            <Link
              to="/stand-strong"
              className="ml-3 px-4 py-2 bg-gray-900 text-white rounded-lg text-xs font-semibold hover:bg-gray-700 transition-colors whitespace-nowrap"
            >
              Donate
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-3 space-y-2">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 text-sm font-medium transition-colors border-l-2 ${
                  isActive(link.to)
                    ? 'font-semibold'
                    : 'text-gray-700 border-transparent hover:text-gray-900'
                }`}
                style={isActive(link.to) ? { color: '#65a30d', borderColor: '#65a30d' } : undefined}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/stand-strong"
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 bg-gray-900 text-white rounded-lg font-semibold text-center hover:bg-gray-700 transition-colors"
            >
              Donate
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
