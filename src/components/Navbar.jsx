function Navbar() {
  return (
    <header className="max-w-6xl mx-auto px-6 py-6 flex flex-wrap items-center justify-between animate-fadeInUp">
      <a href="#" className="flex items-center gap-3 group">
        <img
          src="/logoName.png"
          alt="Ariel Rebec logo"
          className="h-10 w-10 md:h-12 md:w-12 object-contain rounded-full transition-all duration-500 group-hover:scale-110 group-hover:rotate-6"
        />
        <span className="text-2xl md:text-3xl font-bold tracking-tight text-raspberry group-hover:text-raspberry-hover transition-colors duration-300">
          Ariel Rebec
        </span>
      </a>

      <nav className="flex items-center gap-6 text-sm md:text-base font-medium">
        {[
          { label: 'Home', href: '#' },
          { label: 'Book', href: '#book' },
          { label: 'About', href: '#about' },
          { label: 'Contact', href: '#contact' },
        ].map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="relative text-charcoal hover:text-raspberry pb-1 transition-colors duration-300
                       after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-0.5
                       after:w-full after:bg-raspberry after:scale-x-0 after:origin-left
                       after:transition-transform after:duration-300 hover:after:scale-x-100"
          >
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  )
}

export default Navbar