import { useState, useEffect } from 'react'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [showNav, setShowNav] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
  
      // Always hide nav on first 100vh, unless scrolling up
      if (currentScrollY < 100) {
        setShowNav(false);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down and beyond 100vh, hide nav
        setShowNav(false);
      } else {
        // Scrolling up, show nav
        setShowNav(true);
      }
  
      setLastScrollY(currentScrollY);
    };
  
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

    

  return (
    <nav className={`w-full mix-blend-luminosity py-4 flex px-10 justify-between items-center fixed top-0 left-0 z-100 transition-transform duration-300 ${showNav ? ' backdrop-blur-xl bg-white/10' : '-translate-y-full'} ${menuOpen && 'h-screen'}`}>

      {/* TERZO Logo */}
      <div className="text-2xl font-bold text-black md:text-black">
        TERZO
      </div>

      {/* Desktop Links */}
      <ul className="hidden md:flex gap-10 text-lg font-medium text-black justify-center flex-1">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
      </ul>

      {/* Hamburger Button (mobile) */}
      <button
        className="md:hidden z-50"
        onClick={() => setMenuOpen(true)}
        aria-label="Open menu"
      >
        <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed top-0 right-0 w-full h-full bg-black text-white transform transition-transform duration-300 ease-in-out ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Close Button */}
        <button
          className="absolute top-6 right-6 text-white z-50"
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu"
        >
          <svg className="w-7 h-7" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* TERZO in Mobile Menu */}
        <div className="absolute top-10 left-1/2 transform -translate-x-1/2 text-4xl font-bold text-white">
          TERZO
        </div>

        {/* Mobile Links */}
        <ul className="flex flex-col items-center justify-center h-full gap-10 text-2xl font-medium">
          <li><a href="#" onClick={() => setMenuOpen(false)}>Home</a></li>
          <li><a href="#" onClick={() => setMenuOpen(false)}>Projects</a></li>
          <li><a href="#" onClick={() => setMenuOpen(false)}>About</a></li>
          <li><a href="#" onClick={() => setMenuOpen(false)}>Contact</a></li>
        </ul>
      </div>
    </nav>
  )
}
