function Hero() {
  return (
    <section className="bg-gradient-to-b from-powder to-ivory py-12 md:py-20 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left: text content */}
        <div className="flex-1 space-y-6">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-charcoal animate-fadeInUp">
            Stories that{' '}
            <span className="text-raspberry inline-block animate-float-slow">
              heal
            </span>{' '}
            &{' '}
            <span className="text-raspberry inline-block animate-float-slow delay-300">
              connect
            </span>
          </h1>

          <p className="text-lg md:text-xl text-warmgray max-w-lg leading-relaxed animate-fadeInUp delay-200">
            Ariel Rebec writes from the heart, inspired by real-life moments of
            courage, sisterhood, and the quiet magic of four-legged friends.
          </p>

          <div className="flex flex-wrap gap-4 pt-2 animate-fadeInUp delay-300">
            <a
              href="#book"
              className="bg-raspberry hover:bg-raspberry-hover text-white font-semibold py-3 px-8 rounded-full shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              Discover Bellashelly
            </a>
            <a
              href="#about"
              className="border-2 border-raspberry text-raspberry hover:bg-raspberry hover:text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 hover:-translate-y-1"
            >
              About the Author
            </a>
          </div>

          <div className="flex items-center gap-3 pt-2 text-sm text-warmgray animate-fadeInUp delay-500">
            <span className="w-6 h-0.5 bg-raspberry animate-pulseGlow"></span>
            <span>based on real-life experiences</span>
          </div>
        </div>

        {/* Right: Real book cover photo */}
        <div className="flex-1 flex justify-center md:justify-end animate-fadeInRight delay-200">
          <div className="relative w-64 md:w-80 animate-sway">
            <img
              src="/bellashelly.jpg"
              alt="Bellashelly book cover"
              className="w-full h-auto rounded-2xl shadow-2xl border-4 border-white/70 object-cover transition-transform duration-500 hover:scale-105"
            />
            {/* twinkling sparkles */}
            <div className="absolute -top-3 -right-3 text-3xl text-raspberry animate-twinkle">
              ✦
            </div>
            <div className="absolute -bottom-4 -left-4 text-4xl text-powder animate-twinkle delay-500">
              ✦
            </div>
            <div className="absolute top-1/2 -left-6 text-2xl text-blush animate-float delay-700">
              ✦
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero