function AboutAuthor() {
  return (
    <section id="about" className="bg-powder py-16 md:py-24 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-4 animate-fadeInUp">
          <span className="h-0.5 w-12 bg-sage"></span>
          <span className="text-sm uppercase tracking-wider text-warmgray font-semibold">
            About the Author
          </span>
        </div>

        <div className="grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-7 space-y-6 animate-fadeInLeft delay-100">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal">
              Ariel <span className="text-raspberry">Rebec</span>
            </h2>
            <p className="text-lg text-charcoal leading-relaxed">
              Ariel Rebec is a storyteller who believes in the power of gentle
              narratives. Drawing from her own experiences with family,
              caregiving, and the resilience of children, she crafts picture
              books that open conversations about disability, empathy, and
              imagination.
            </p>
            <p className="text-lg text-charcoal leading-relaxed">
              <span className="italic">Bellashelly</span> is her debut picture
              book, born from a desire to honor the real-life bond between
              sisters and the animals that help them thrive. Ariel lives with
              her family and a menagerie of imaginary (and real) ponies.
            </p>
            <div className="pt-4">
              <p className="text-raspberry font-semibold flex items-center gap-2 animate-fadeInUp delay-500">
                <span className="text-2xl animate-twinkle">✦</span> "Every child
                deserves to see themselves in a story."
              </p>
            </div>
          </div>

          <div className="md:col-span-5 flex justify-center md:justify-end animate-fadeInRight delay-200">
            <div className="relative w-64 h-64">
              <div className="absolute inset-0 rounded-full bg-blush blur-2xl opacity-60 animate-pulseGlow"></div>
              <div className="relative w-full h-full rounded-full bg-blush shadow-lg flex items-center justify-center border-8 border-ivory transition-transform duration-500 hover:scale-105 hover:rotate-3">
                <div className="text-8xl animate-float-slow">👩‍🎨</div>
              </div>
              <div className="absolute -top-2 -right-2 text-2xl text-raspberry animate-twinkle">
                ✦
              </div>
              <div className="absolute -bottom-2 -left-2 text-3xl text-sage animate-twinkle delay-700">
                ✦
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutAuthor