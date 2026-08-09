import { Car, Phone, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-editorial-border bg-editorial-bg/90 backdrop-blur-md">
      <div className="container mx-auto px-4 md:px-10 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-4 group">
          <span className="font-serif text-xl font-bold tracking-tight text-editorial-text">Bisht Tour & Travels</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-[11px] uppercase tracking-[0.1em] font-semibold transition-colors hover:text-editorial-text ${
                isActive(link.path) ? 'text-editorial-text' : 'text-editorial-subtext'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex">
          <a
            href="tel:+917895616847"
            className="bg-editorial-text hover:bg-gray-800 text-white px-5 py-2 text-xs font-semibold uppercase tracking-wider rounded-sm transition-colors"
          >
            📞 Call: 7895616847
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-gray-600 hover:text-gray-900 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-editorial-border bg-editorial-bg absolute left-0 w-full shadow-sm">
          <nav className="flex flex-col py-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`px-6 py-3 text-[11px] uppercase tracking-[0.1em] font-semibold transition-colors hover:bg-gray-100 ${
                  isActive(link.path) ? 'text-editorial-text bg-gray-50' : 'text-editorial-subtext'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="px-6 pt-4 pb-2 border-t border-editorial-border mt-2">
              <a
                href="tel:+917895616847"
                className="flex items-center justify-center bg-editorial-text text-white px-4 py-3 rounded-sm text-xs font-semibold uppercase tracking-wider transition-colors"
              >
                📞 Call: 7895616847
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
