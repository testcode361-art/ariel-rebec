function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-ivory py-8 px-6 border-t border-sage/30">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-warmgray">

        {/* Left: copyright */}
        <p className="order-2 md:order-1 text-center md:text-left animate-fadeInUp">
          © {currentYear} Ariel Rebec. All rights reserved.
        </p>

        {/* Center: Launch Portal Button */}
        <div className="order-1 md:order-2 flex-shrink-0 animate-fadeInUp delay-100">
          <a
            href="https://buy.stripe.com/7sY5kEdVm6vNfRU8Ey2kw07"
            target="_blank"
            rel="noopener noreferrer"
            className="
              relative group
              px-5 py-2 sm:px-6 sm:py-2.5
              bg-gradient-to-r from-[#E81978] via-[#F2BDD3] to-[#E81978]
              text-white text-xs sm:text-sm font-semibold
              rounded-full
              shadow-md shadow-[#E81978]/25
              transform transition-all duration-300
              hover:scale-105 hover:shadow-[#F2BDD3]/50
              hover:shadow-lg
              border border-white/25
              overflow-hidden
              flex items-center gap-2
            "
          >
            <span className="absolute inset-0 bg-gradient-to-r from-[#E81978] via-[#F2BDD3] to-[#E81978] opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md"></span>

            <span className="relative z-10 flex items-center gap-2 whitespace-nowrap">
              <i className="fas fa-rocket text-white/90 group-hover:text-white transition-colors duration-300 text-xs group-hover:-translate-y-0.5"></i>
              Launch &amp; Go-Live Portal
              <i className="fas fa-arrow-right text-white/90 group-hover:text-white transition-colors duration-300 group-hover:translate-x-1 text-xs"></i>
            </span>

            <span className="absolute inset-0 rounded-full border border-white/20 group-hover:border-white/70 transition-all duration-300"></span>
          </a>
        </div>

        {/* Right: made with care */}
        <p className="order-3 flex items-center gap-1 text-center md:text-right animate-fadeInUp delay-200">
          <span className="text-raspberry animate-pulseGlow">❤️</span> Made with
          care for readers and dreamers.
        </p>
      </div>
    </footer>
  )
}

export default Footer