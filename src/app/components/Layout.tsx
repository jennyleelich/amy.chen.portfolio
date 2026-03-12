import { Link, Outlet, useLocation } from 'react-router';
import { motion } from 'motion/react';
import { ScrollToTop } from './ScrollToTop';

export function Layout() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="group">
              <h1 className="text-2xl font-light tracking-tight">
                AMY CHEN
                <span className="inline-block ml-2 text-lg group-hover:rotate-12 transition-transform">🏠</span>
              </h1>
            </Link>

            {/* Navigation & Contact Info */}
            <div className="hidden md:flex items-center gap-8 text-sm text-gray-600">
              <Link 
                to="/about" 
                className={`hover:text-gray-900 transition-colors ${
                  location.pathname === '/about' ? 'text-gray-900' : ''
                }`}
              >
                About
              </Link>
              <a 
                href="mailto:Lchen09@risd.edu" 
                className="hover:text-gray-900 transition-colors"
              >
                Lchen09@risd.edu
              </a>
              <a 
                href="https://drive.google.com/file/d/1HyO5HedupIBuuBUqNBee4IOk9GBz2fag/view?usp=sharing" 
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-900 transition-colors"
              >
                Resume
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-20">
        <Outlet />
      </main>

      {/* Scroll to Top Button */}
      <ScrollToTop />

      {/* Footer */}
      <footer className="mt-32 py-12 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Education */}
            <div>
              <h3 className="text-sm font-medium mb-4">Education</h3>
              <div className="text-sm text-gray-600 space-y-2">
                <p>Rhode Island School of Design</p>
                <p>BFA Furniture Design, 2023-2027</p>
                <p className="mt-3">Concentration in Product Design, Theory and History of Art and Design</p>
              </div>
            </div>

            {/* Employment */}
            <div>
              <h3 className="text-sm font-medium mb-4">Experience</h3>
              <div className="text-sm text-gray-600 space-y-2">
                <p>Rhode Island School of Design</p>
                <p>Providence, RI - Wood Shop Monitor</p>
                <p>January 2025 - Present</p>
                <p className="mt-3">Sharon Art Center</p>
                <p>South Brunswick, NJ - Teaching</p>
                <p>March 2025 - Jan 2024</p>
              </div>
            </div>

            {/* Skills */}
            <div>
              <h3 className="text-sm font-medium mb-4">Skills</h3>
              <div className="text-sm text-gray-600">
                <p className="mb-2">Physical: Woodworking, Welding, Soldering, Casting & Releasing, Sewing, Machine Knitting</p>
                <p className="mt-3">Software: Figma, Photoshop, VS Code, Rhino 3D, 3D Printing, Keyshot, Fusion 360</p>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-100 text-center text-sm text-gray-500">
            <p>© {new Date().getFullYear()} Amy Chen. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}