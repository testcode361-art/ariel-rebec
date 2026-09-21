function BookSection() {
  const reviews = [
    {
      name: 'stableladyhawke',
      rating: 5,
      title:
        'Also touches on what a good hippotherapy program looks like',
      date: 'Reviewed in the United States on January 26, 2017',
      format: 'Hardcover',
      verified: true,
      text: 'A cute story realistically illustrated about two sisters and an imaginary horse. Also touches on what a good hippotherapy program looks like, what quality care for horses looks like, and what to do with a troublesome imaginary friend.',
    },
    {
      name: 'Amazon Customer',
      rating: 4,
      title:
        'I purchased the soft cover edition of Bellashelly and love the vibrant colors of the illustrations',
      date: 'Reviewed in the United States on December 14, 2016',
      format: 'Paperback',
      verified: false,
      text: 'I purchased the soft cover edition of Bellashelly and love the vibrant colors of the illustrations. The story touches on several thought-provoking topics: the position of an abled child in a family dealing with a disabled child, the comforting power of imagination, and the healing power of horses. An addition to a family library that could prompt compassionate discussion.',
    },
    {
      name: 'jazzy_yella',
      rating: 5,
      title:
        'The illustrations are simply amazingly beautiful and I am so blessed to have seen this ...',
      date: 'Reviewed in the United States on November 23, 2016',
      format: 'Paperback',
      verified: false,
      text: 'I know the author personally and saw the drawings and read the book before it was published and to see the finish product is awe-inspiring! The illustrations are simply amazingly beautiful and I am so blessed to have seen this book idea and purpose come to reality. Many blessings to you Ms. Ariel Rebec :-) So, please you all support Ariel Rebec and her many endeavors. You won\'t be disappointed with this heart felt book!',
    },
  ]

  const renderStars = (rating) => {
    return (
      <div className="flex items-center gap-0.5">
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            className={`text-lg ${
              star <= rating ? 'text-[#FFA41C]' : 'text-sage/40'
            }`}
          >
            ★
          </span>
        ))}
      </div>
    )
  }

  return (
    <section id="book" className="bg-mint py-16 md:py-24 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-4 animate-fadeInUp">
          <span className="h-0.5 w-12 bg-sage"></span>
          <span className="text-sm uppercase tracking-wider text-warmgray font-semibold">
            The Book
          </span>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-12 animate-fadeInUp delay-100">
          <span className="text-raspberry">Bellashelly</span> – a picture book
          for young hearts
        </h2>

        <div className="grid md:grid-cols-12 gap-10 items-start">
          {/* Left column: cover + button */}
          <div className="md:col-span-4 flex flex-col items-center md:items-start gap-5 animate-fadeInLeft delay-200">
            <div className="relative w-56 md:w-full max-w-xs transition-transform duration-500 hover:-rotate-2 hover:scale-105">
              <img
                src="/bellashelly.jpg"
                alt="Bellashelly book cover"
                className="w-full h-auto rounded-2xl shadow-xl border-4 border-white/70 object-cover"
              />
              <div className="absolute -top-3 -right-3 text-2xl text-raspberry animate-twinkle">
                ✦
              </div>
              <div className="absolute -bottom-3 -left-3 text-3xl text-powder animate-twinkle delay-500">
                ✦
              </div>
            </div>

            <a
              href="https://www.amazon.com/Bellashelly-Ariel-Rebec-ebook/dp/B07964ZX6J/"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group w-full max-w-xs px-6 py-3 bg-raspberry hover:bg-raspberry-hover text-white text-sm sm:text-base font-semibold rounded-full shadow-md shadow-raspberry/25 transform transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2 whitespace-nowrap animate-pulseGlow"
            >
              <span className="text-lg">📖</span>
              Buy Now
              <span className="group-hover:translate-x-1 transition-transform duration-300">
                →
              </span>
            </a>
          </div>

          {/* Middle column: description */}
          <div className="md:col-span-4 space-y-5 text-charcoal leading-relaxed animate-fadeInUp delay-300">
            <p className="text-lg">
              Jamey is a child with special needs. Suffering from Rett Syndrome,
              she can't talk, and she has to think very hard to move any part of
              her body. She needs a lot of attention from her mom who helps her
              dress, eat, and do her exercises.
            </p>
            <p className="text-lg">
              While mom makes sure Jamey is cared for, sister Casey has a lot of
              time alone. She keeps busy playing with{' '}
              <span className="font-semibold text-raspberry">Bellashelly</span>,
              an imaginary horse. Bellashelly is white and purple and has pink
              hearts on her coat, and she likes to run away. Meanwhile, Jamey
              finds help for her symptoms from a pony named Dragon during
              hippotherapy sessions. It's here that Casey also gets a solution
              for her wandering horse.
            </p>
            <p className="text-lg">
              Based on real-life experiences,{' '}
              <span className="italic">Bellashelly</span> shares a story about a
              little girl living with a disability and how she and her sister
              find comfort from a four-legged friend.
            </p>
            <div className="pt-4 flex flex-wrap gap-3">
              {['Picture Book', 'Ages 4–8', 'Inspired by true events'].map(
                (tag, i) => (
                  <span
                    key={tag}
                    className={`px-4 py-1.5 rounded-full text-sm font-medium transition-transform duration-300 hover:scale-110 ${
                      i === 0
                        ? 'bg-blush text-charcoal'
                        : i === 1
                        ? 'bg-powder text-charcoal'
                        : 'bg-sage text-white'
                    }`}
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Right column: highlights card */}
          <div className="md:col-span-4 bg-ivory rounded-3xl p-8 shadow-md border-l-8 border-raspberry animate-fadeInRight delay-400 transition-shadow duration-500 hover:shadow-2xl">
            <h3 className="text-2xl font-bold text-raspberry mb-4">
              Why readers love it
            </h3>
            <ul className="space-y-4">
              {[
                { icon: '❤️', bold: 'Gentle representation', text: 'a sensitive look at Rett Syndrome and family love.' },
                { icon: '🐴', bold: 'Imaginary friend magic', text: 'Bellashelly captures the whimsy of childhood.' },
                { icon: '🌿', bold: 'Hippotherapy insight', text: 'shows how animals can heal in unexpected ways.' },
                { icon: '👧', bold: 'Sisterhood', text: 'a tender bond between Casey and Jamey.' },
              ].map((item) => (
                <li
                  key={item.bold}
                  className="flex gap-3 transition-transform duration-300 hover:translate-x-1"
                >
                  <span className="text-raspberry text-xl">{item.icon}</span>
                  <span>
                    <strong className="text-charcoal">{item.bold}</strong> —{' '}
                    {item.text}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-8 pt-6 border-t border-sage/40">
              <p className="text-warmgray italic animate-fadeInUp delay-700">
                "A beautiful reminder that comfort can come from the smallest
                hooves."
              </p>
            </div>
          </div>
        </div>

        {/* ============================================
            READER REVIEWS
            ============================================ */}
        <div className="mt-20">
          {/* Reviews heading */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10 animate-fadeInUp">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="h-0.5 w-12 bg-sage"></span>
                <span className="text-sm uppercase tracking-wider text-warmgray font-semibold">
                  Reader Reviews
                </span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-charcoal">
                What families are{' '}
                <span className="text-raspberry">saying</span>
              </h3>
            </div>

            {/* Overall rating summary */}
            <div className="flex items-center gap-3 bg-ivory rounded-2xl px-5 py-3 shadow-sm border border-sage/30">
              <span className="text-4xl font-extrabold text-charcoal">4.7</span>
              <div>
                <div className="flex items-center gap-0.5">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <span key={s} className="text-[#FFA41C] text-lg">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-xs text-warmgray mt-0.5">
                  Based on verified Amazon reviews
                </p>
              </div>
            </div>
          </div>

          {/* Reviews grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <article
                key={review.name + index}
                className={`group bg-ivory rounded-3xl p-7 shadow-md border-t-4 border-raspberry/70 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 animate-fadeInUp delay-${(index + 1) * 100}`}
              >
                {/* Reviewer row */}
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <p className="font-bold text-charcoal text-base leading-tight">
                      {review.name}
                    </p>
                    {review.verified && (
                      <p className="text-xs text-sage font-medium mt-0.5">
                        ✓ Verified Purchase
                      </p>
                    )}
                  </div>
                  <span className="text-2xl opacity-40 group-hover:opacity-100 group-hover:scale-125 transition-all duration-300">
                    🌸
                  </span>
                </div>

                {/* Stars + rating label */}
                <div className="flex items-center gap-2 mb-3">
                  {renderStars(review.rating)}
                  <span className="text-xs text-warmgray font-medium">
                    {review.rating} out of 5 stars
                  </span>
                </div>

                {/* Review title */}
                <h4 className="font-semibold text-raspberry text-sm leading-snug mb-3 line-clamp-3">
                  {review.title}
                </h4>

                {/* Meta */}
                <div className="text-xs text-warmgray space-y-0.5 mb-4">
                  <p>{review.date}</p>
                  <p>
                    Format:{' '}
                    <span className="text-charcoal font-medium">
                      {review.format}
                    </span>
                  </p>
                </div>

                {/* Divider */}
                <div className="h-px bg-sage/30 mb-4"></div>

                {/* Review body */}
                <p className="text-sm text-charcoal leading-relaxed">
                  {review.text}
                </p>
              </article>
            ))}
          </div>

          {/* CTA under reviews */}
          <div className="mt-12 text-center animate-fadeInUp delay-500">
            <p className="text-warmgray mb-5">
              Loved what you read? Share your own review on Amazon.
            </p>
            <a
              href="https://www.amazon.com/Bellashelly-Ariel-Rebec-ebook/dp/B07964ZX6J/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-raspberry hover:bg-raspberry-hover text-white font-semibold py-3 px-8 rounded-full shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <span>⭐</span>
              Write a Review
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BookSection