function ContactSection() {
  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Thank you! This is a demo form.')
  }

  return (
    <section id="contact" className="bg-mint py-16 md:py-20 px-6 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-3 animate-fadeInUp">
          Let's <span className="text-raspberry">connect</span>
        </h2>
        <p className="text-warmgray max-w-xl mx-auto mb-10 animate-fadeInUp delay-100">
          For school visits, book readings, or just to say hello — Ariel would
          love to hear from you.
        </p>

        <div className="bg-ivory rounded-3xl shadow-md p-8 md:p-10 text-left max-w-2xl mx-auto border border-sage/30 animate-fadeInUp delay-200 transition-shadow duration-500 hover:shadow-xl">
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-5">
              <div className="animate-fadeInLeft delay-300">
                <label className="block text-sm font-medium text-charcoal mb-1">
                  Your name
                </label>
                <input
                  type="text"
                  placeholder="Jane Doe"
                  className="w-full px-4 py-3 rounded-xl border border-sage/50 bg-white/80 focus:outline-none focus:ring-2 focus:ring-raspberry/50 focus:border-raspberry transition-all duration-300 focus:scale-[1.02]"
                />
              </div>
              <div className="animate-fadeInRight delay-300">
                <label className="block text-sm font-medium text-charcoal mb-1">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="jane@example.com"
                  className="w-full px-4 py-3 rounded-xl border border-sage/50 bg-white/80 focus:outline-none focus:ring-2 focus:ring-raspberry/50 focus:border-raspberry transition-all duration-300 focus:scale-[1.02]"
                />
              </div>
            </div>
            <div className="animate-fadeInUp delay-400">
              <label className="block text-sm font-medium text-charcoal mb-1">
                Message
              </label>
              <textarea
                rows="4"
                placeholder="I'd love to know more about Bellashelly..."
                className="w-full px-4 py-3 rounded-xl border border-sage/50 bg-white/80 focus:outline-none focus:ring-2 focus:ring-raspberry/50 focus:border-raspberry transition-all duration-300 resize-none focus:scale-[1.01]"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-raspberry hover:bg-raspberry-hover text-white font-bold py-3.5 px-6 rounded-xl shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 text-lg animate-fadeInUp delay-500"
            >
              Send message
            </button>
          </form>
          <p className="text-xs text-warmgray text-center mt-5">
            This is a demo form — no data is stored.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 mt-10 text-charcoal animate-fadeInUp delay-700">
          <span className="flex items-center gap-2 transition-transform duration-300 hover:scale-110">
            <span className="text-raspberry animate-twinkle">✉️</span>{' '}
            hello@arielrebec.com
          </span>
          <span className="flex items-center gap-2 transition-transform duration-300 hover:scale-110">
            <span className="text-raspberry animate-twinkle delay-500">📚</span>{' '}
            @arielrebecbooks
          </span>
        </div>
      </div>
    </section>
  )
}

export default ContactSection