export default function V6CoastalEditorial() {
    return (
        <div className="min-h-screen bg-[var(--color-surface)] text-[var(--color-text)] antialiased selection:bg-[var(--color-sand)] selection:text-[var(--color-text-heading)]">
            {/* 
        ------------------------------------------
        HEADER
        ------------------------------------------
      */}
            <header className="sticky top-0 z-50 w-full border-b border-[var(--color-sand)]/40 bg-[var(--color-surface)]/95 backdrop-blur-md">
                <div className="mx-auto flex h-[72px] max-w-[1280px] items-center justify-between px-6 lg:px-12">
                    {/* Logo Area */}
                    <div className="flex items-center gap-3">
                        {/* Droplet Logo Mark */}
                        <div className="flex h-9 w-9 items-center justify-center">
                            <svg width="22" height="28" viewBox="0 0 20 26" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[var(--color-accent)]">
                                <path d="M10 0C10 0 0 10.7436 0 16.9C0 22.0287 4.47715 26 10 26C15.5228 26 20 22.0287 20 16.9C20 10.7436 10 0 10 0Z" fill="currentColor" />
                            </svg>
                        </div>
                        <span className="font-[family-name:var(--font-display)] text-2xl tracking-tight text-[var(--color-text-heading)]">
                            Eco <span className="text-[var(--color-text-muted)] font-[family-name:var(--font-body)] font-normal">One</span> Water
                        </span>
                    </div>

                    {/* Desktop Nav Actions */}
                    <div className="hidden items-center gap-8 md:flex">
                        <a
                            href="#book"
                            className="inline-flex h-11 items-center justify-center rounded-sm bg-[var(--color-accent)] px-7 font-[family-name:var(--font-body)] text-sm font-semibold text-white transition-all duration-200 hover:bg-[var(--color-accent-hover)] hover:-translate-y-0.5 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2"
                        >
                            Book Free Water Test
                        </a>
                        <div className="flex items-center gap-2 font-[family-name:var(--font-body)] text-xs font-medium text-[var(--color-text-muted)]">
                            <svg className="h-4 w-4 text-[var(--color-accent)]" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            Licensed &amp; Insured | 5-Star Rated
                        </div>
                    </div>

                    {/* Mobile Menu Toggle (Visual Only) */}
                    <button className="flex h-11 w-11 items-center justify-center rounded text-[var(--color-text-muted)] md:hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]">
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </header>

            <main>
                {/* 
          ------------------------------------------
          HERO SECTION - Asymmetric Editorial Layout
          ------------------------------------------
        */}
                <section className="relative overflow-hidden bg-gradient-to-br from-[var(--color-sand-light)] via-[var(--color-surface)] to-[var(--color-surface-alt)] pb-20 pt-16 lg:pb-32 lg:pt-24">
                    {/* Subtle texture overlay */}
                    <div className="pointer-events-none absolute inset-0 opacity-30" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }} />

                    {/* Gradient accent line at top */}
                    <div className="absolute left-0 right-0 top-0 h-1 bg-gradient-to-r from-[var(--color-sand)] via-[var(--color-accent)] to-[var(--color-sand)]" />

                    <div className="relative mx-auto grid max-w-[1280px] items-center gap-12 px-6 lg:grid-cols-12 lg:gap-8 lg:px-12">
                        {/* Hero Copy - Asymmetric positioning (columns 1-6) */}
                        <div className="lg:col-span-6 lg:col-start-1">
                            <h1 className="font-[family-name:var(--font-display)] text-[2.75rem] leading-[1.1] tracking-tight text-[var(--color-text-heading)] sm:text-5xl lg:text-[4rem]">
                                Better water.
                                <br />
                                <span className="lg:ml-16 inline-block">Better living.</span>
                            </h1>
                            <p className="mt-8 max-w-md font-[family-name:var(--font-body)] text-lg leading-relaxed text-[var(--color-text)]">
                                Schedule a free in-home water test and get a personalized recommendation.
                            </p>

                            <div className="mt-10 flex flex-col items-start gap-5">
                                <a
                                    href="#book"
                                    className="group inline-flex h-14 items-center justify-center gap-3 rounded-sm bg-[var(--color-accent)] px-10 font-[family-name:var(--font-body)] text-base font-semibold text-white transition-all duration-200 hover:bg-[var(--color-accent-hover)] hover:-translate-y-0.5 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2"
                                >
                                    Book Free Water Test
                                    <svg className="h-4 w-4 opacity-70 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </a>
                                <a href="#services" className="font-[family-name:var(--font-body)] text-sm font-semibold text-[var(--color-accent)] transition-colors hover:text-[var(--color-accent-hover)] underline underline-offset-4 decoration-[var(--color-sand)] hover:decoration-[var(--color-accent)]">
                                    See solutions
                                </a>
                            </div>

                            {/* Reviews */}
                            <div className="mt-12 flex items-center gap-4 border-t border-[var(--color-sand)]/60 pt-8">
                                <div className="flex gap-0.5">
                                    {[1, 2, 3, 4, 5].map((i) => (
                                        <svg key={i} className="h-5 w-5 text-[var(--color-accent)]" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                                <span className="font-[family-name:var(--font-body)] text-sm text-[var(--color-text-muted)]">4.9/5 Average Rating • Over 500 Reviews</span>
                            </div>
                        </div>

                        {/* Hero Visual - Bleeds right (columns 7-12) */}
                        <div className="relative lg:col-span-6 lg:col-start-7 flex justify-center lg:justify-end">
                            <div className="relative h-[320px] w-[320px] sm:h-[400px] sm:w-[400px] lg:h-[480px] lg:w-[480px]">
                                {/* Coastal-inspired layered circles */}
                                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[var(--color-sand)] to-[var(--color-sand-light)] opacity-40" />
                                <div className="absolute inset-8 rounded-full bg-gradient-to-tl from-[var(--color-accent)]/10 to-white/60 backdrop-blur-sm" />
                                <div className="absolute inset-16 rounded-full bg-gradient-to-br from-white to-[var(--color-surface)] shadow-inner" />

                                {/* Central droplet */}
                                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                                    <div className="flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-accent-hover)] shadow-2xl">
                                        <svg className="h-14 w-14 text-white drop-shadow-sm" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 2.25c4.97 4.97 9 9.97 9 14.25a9 9 0 1 1-18 0c0-4.28 4.03-9.28 9-14.25Z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 
          ------------------------------------------
          HOW IT WORKS - Editorial section eyebrow
          ------------------------------------------
        */}
                <section className="bg-white py-24 lg:py-32">
                    <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
                        {/* Editorial-style eyebrow with rule */}
                        <div className="flex items-center gap-6 mb-6">
                            <div className="h-px flex-1 bg-gradient-to-r from-[var(--color-sand)] to-transparent" />
                            <span className="font-[family-name:var(--font-body)] text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-text-muted)]">How it works</span>
                            <div className="h-px flex-1 bg-gradient-to-l from-[var(--color-sand)] to-transparent" />
                        </div>
                        <h2 className="text-center font-[family-name:var(--font-display)] text-3xl tracking-tight text-[var(--color-text-heading)] sm:text-4xl lg:text-[2.75rem]">Your Path to Pure Water</h2>

                        <div className="mt-20 grid grid-cols-1 gap-16 sm:grid-cols-3 sm:gap-8">
                            {[
                                {
                                    title: "1. Test",
                                    description: "We analyze your water source and current quality in your home.",
                                    icon: (
                                        <svg className="h-10 w-10 text-[var(--color-accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                                        </svg>
                                    )
                                },
                                {
                                    title: "2. Recommend",
                                    description: "Get a personalized treatment plan tailored to your specific needs.",
                                    icon: (
                                        <svg className="h-10 w-10 text-[var(--color-accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                                        </svg>
                                    )
                                },
                                {
                                    title: "3. Install",
                                    description: "Our certified technicians ensure a seamless, professional installation.",
                                    icon: (
                                        <svg className="h-10 w-10 text-[var(--color-accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
                                        </svg>
                                    )
                                }
                            ].map((step) => (
                                <div key={step.title} className="group flex flex-col items-center text-center">
                                    <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-[var(--color-surface-alt)] transition-all duration-300 group-hover:bg-[var(--color-sand-light)] group-hover:scale-105">
                                        {step.icon}
                                    </div>
                                    <h3 className="font-[family-name:var(--font-display)] text-xl text-[var(--color-text-heading)]">{step.title}</h3>
                                    <p className="mt-4 max-w-xs font-[family-name:var(--font-body)] text-sm leading-relaxed text-[var(--color-text-muted)]">{step.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 
          ------------------------------------------
          SERVICES GRID - Taller cards with lift effect
          ------------------------------------------
        */}
                <section id="services" className="bg-[var(--color-surface-alt)] py-24 lg:py-32">
                    <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
                        {/* Editorial-style eyebrow */}
                        <div className="flex items-center gap-6 mb-6">
                            <div className="h-px flex-1 bg-gradient-to-r from-[var(--color-sand)] to-transparent" />
                            <span className="font-[family-name:var(--font-body)] text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-text-muted)]">Services</span>
                            <div className="h-px flex-1 bg-gradient-to-l from-[var(--color-sand)] to-transparent" />
                        </div>
                        <h2 className="text-center font-[family-name:var(--font-display)] text-3xl tracking-tight text-[var(--color-text-heading)] sm:text-4xl lg:text-[2.75rem]">Our Premium Solutions</h2>

                        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                            {[
                                {
                                    title: "Water Softeners",
                                    desc: "Eliminate hard water and its effects for softer skin, laundry, and appliances.",
                                    icon: "S"
                                },
                                {
                                    title: "Whole-Home Filtration",
                                    desc: "Clean, filtered water from every tap in your home for better drinking and bathing.",
                                    icon: "F"
                                },
                                {
                                    title: "Reverse Osmosis",
                                    desc: "Advanced purification for pristine drinking water, under-sink or whole-home.",
                                    icon: "R"
                                },
                                {
                                    title: "Well Water Treatment",
                                    desc: "Specialized solutions for common well water issues like iron and sulfur.",
                                    icon: "W"
                                }
                            ].map((svc) => (
                                <div key={svc.title} className="group relative flex flex-col items-center rounded-lg bg-white p-8 pt-10 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                                    {/* Top accent line */}
                                    <div className="absolute inset-x-0 top-0 h-1 rounded-t-lg bg-gradient-to-r from-[var(--color-sand)] via-[var(--color-accent)]/30 to-[var(--color-sand)] opacity-0 transition-opacity group-hover:opacity-100" />

                                    <div className="mb-6">
                                        <svg className="h-12 w-12 text-[var(--color-accent)] transition-transform duration-300 group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                                            {svc.icon === 'S' && <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />}
                                            {svc.icon === 'F' && <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />}
                                            {svc.icon === 'R' && <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />}
                                            {svc.icon === 'W' && <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />}
                                        </svg>
                                    </div>

                                    <h3 className="font-[family-name:var(--font-display)] text-lg text-[var(--color-text-heading)] min-h-[3.5rem] flex items-center justify-center">{svc.title}</h3>
                                    <p className="mt-4 font-[family-name:var(--font-body)] text-sm leading-relaxed text-[var(--color-text-muted)]">{svc.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 
          ------------------------------------------
          SOCIAL PROOF - Pull-quote testimonials
          ------------------------------------------
        */}
                <section className="bg-white py-24 lg:py-32">
                    <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
                        {/* Editorial-style eyebrow */}
                        <div className="flex items-center gap-6 mb-6">
                            <div className="h-px flex-1 bg-gradient-to-r from-[var(--color-sand)] to-transparent" />
                            <span className="font-[family-name:var(--font-body)] text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-text-muted)]">Social Proof</span>
                            <div className="h-px flex-1 bg-gradient-to-l from-[var(--color-sand)] to-transparent" />
                        </div>
                        <h2 className="text-center font-[family-name:var(--font-display)] text-3xl tracking-tight text-[var(--color-text-heading)] sm:text-4xl lg:text-[2.75rem]">Trusted by Homeowners Like You</h2>

                        <div className="mt-20 grid gap-12 sm:grid-cols-2 max-w-4xl mx-auto">
                            {[
                                {
                                    quote: "The team was professional, and the water quality difference is night and day. Highly recommend Eco One!",
                                    author: "Sarah M.",
                                    loc: "FL"
                                },
                                {
                                    quote: "From the free test to the installation, everything was seamless. We finally have peace of mind about our water.",
                                    author: "James R.",
                                    loc: "FL"
                                }
                            ].map((review) => (
                                <div key={review.author} className="relative pl-12">
                                    {/* Large decorative quote mark */}
                                    <span className="absolute left-0 top-0 font-[family-name:var(--font-display)] text-7xl leading-none text-[var(--color-sand)]">&ldquo;</span>
                                    <blockquote>
                                        <p className="font-[family-name:var(--font-body)] text-lg leading-relaxed text-[var(--color-text)] italic">
                                            {review.quote}
                                        </p>
                                        <footer className="mt-6">
                                            <cite className="not-italic font-[family-name:var(--font-body)] text-sm font-semibold text-[var(--color-text-heading)]">
                                                — {review.author}, {review.loc}
                                            </cite>
                                        </footer>
                                    </blockquote>
                                </div>
                            ))}
                        </div>

                        <div className="mt-16 flex flex-col items-center gap-3">
                            <div className="flex gap-1">
                                {[1, 2, 3, 4, 5].map((i) => (
                                    <svg key={i} className="h-6 w-6 text-[var(--color-accent)]" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>
                            <span className="font-[family-name:var(--font-body)] font-semibold text-[var(--color-text-heading)]">4.9/5 Average Rating</span>
                        </div>
                    </div>
                </section>

                {/* 
          ------------------------------------------
          CTA / FORM SECTION - Gradient card treatment
          ------------------------------------------
        */}
                <section id="book" className="relative overflow-hidden bg-gradient-to-br from-[var(--color-sand-light)] via-[var(--color-surface)] to-white py-24 lg:py-32">
                    {/* Subtle pattern overlay */}
                    <div className="pointer-events-none absolute inset-0 opacity-20" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }} />

                    <div className="relative mx-auto grid max-w-[1280px] gap-12 px-6 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-12">

                        <div className="max-w-lg">
                            <h2 className="font-[family-name:var(--font-display)] text-4xl tracking-tight text-[var(--color-text-heading)] sm:text-5xl lg:text-[3.25rem] lg:leading-[1.1]">
                                Take the First Step to Cleaner Water
                            </h2>
                            <p className="mt-8 font-[family-name:var(--font-body)] text-lg leading-relaxed text-[var(--color-text)]">
                                Our free in-home water test is a no-obligation, educational consultation. Discover the difference pure water can make.
                            </p>
                        </div>

                        <div className="mx-auto w-full max-w-md">
                            {/* Form card with gradient */}
                            <div className="rounded-xl bg-gradient-to-br from-white via-white to-[var(--color-sand-light)]/50 p-8 shadow-2xl ring-1 ring-[var(--color-sand)]/30">
                                <h3 className="font-[family-name:var(--font-display)] text-xl text-[var(--color-text-heading)]">Schedule Your Free Test</h3>
                                <form className="mt-8 space-y-5">
                                    <div>
                                        <label htmlFor="name" className="sr-only">Name</label>
                                        <input type="text" id="name" name="name" placeholder="Your Name" className="w-full rounded-md border-0 bg-[var(--color-surface)] px-4 py-3.5 font-[family-name:var(--font-body)] text-[var(--color-text-heading)] shadow-sm ring-1 ring-inset ring-[var(--color-sand)]/60 placeholder:text-[var(--color-text-muted)] focus:ring-2 focus:ring-inset focus:ring-[var(--color-accent)] transition-shadow sm:text-sm" />
                                    </div>
                                    <div>
                                        <label htmlFor="zip" className="sr-only">Zip Code</label>
                                        <input type="text" id="zip" name="zip" placeholder="Zip Code" className="w-full rounded-md border-0 bg-[var(--color-surface)] px-4 py-3.5 font-[family-name:var(--font-body)] text-[var(--color-text-heading)] shadow-sm ring-1 ring-inset ring-[var(--color-sand)]/60 placeholder:text-[var(--color-text-muted)] focus:ring-2 focus:ring-inset focus:ring-[var(--color-accent)] transition-shadow sm:text-sm" />
                                    </div>
                                    <div>
                                        <label htmlFor="phone" className="sr-only">Phone Number</label>
                                        <input type="tel" id="phone" name="phone" placeholder="Phone Number" className="w-full rounded-md border-0 bg-[var(--color-surface)] px-4 py-3.5 font-[family-name:var(--font-body)] text-[var(--color-text-heading)] shadow-sm ring-1 ring-inset ring-[var(--color-sand)]/60 placeholder:text-[var(--color-text-muted)] focus:ring-2 focus:ring-inset focus:ring-[var(--color-accent)] transition-shadow sm:text-sm" />
                                    </div>
                                    <button type="submit" className="mt-2 w-full rounded-sm bg-[var(--color-accent)] px-8 py-4 text-center font-[family-name:var(--font-body)] text-base font-semibold text-white shadow-lg transition-all duration-200 hover:bg-[var(--color-accent-hover)] hover:-translate-y-0.5 hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]">
                                        Book My Free Water Test
                                    </button>
                                    <p className="text-center font-[family-name:var(--font-body)] text-xs text-[var(--color-text-muted)]">
                                        Book Free Water Test &amp; Consultation
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            {/* 
        ------------------------------------------
        FOOTER
        ------------------------------------------
      */}
            <footer className="bg-[var(--color-surface-alt)] py-16">
                <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
                    <div className="flex flex-col items-center gap-8 border-t border-[var(--color-sand)]/60 pt-12 lg:flex-row lg:justify-between">
                        <div className="flex items-center gap-3">
                            <svg width="18" height="23" viewBox="0 0 20 26" fill="none" className="text-[var(--color-accent)]/60">
                                <path d="M10 0C10 0 0 10.7436 0 16.9C0 22.0287 4.47715 26 10 26C15.5228 26 20 22.0287 20 16.9C20 10.7436 10 0 10 0Z" fill="currentColor" />
                            </svg>
                            <span className="font-[family-name:var(--font-display)] text-lg text-[var(--color-text-heading)]">Eco One Water</span>
                        </div>

                        <nav className="flex flex-wrap justify-center gap-8 font-[family-name:var(--font-body)] text-sm font-medium">
                            <a href="#services" className="text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-text-heading)]">Services</a>
                            <a href="#" className="text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-text-heading)]">About</a>
                            <a href="#" className="text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-text-heading)]">Testimonials</a>
                            <a href="#" className="text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-text-heading)]">FAQ</a>
                            <a href="#" className="text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-text-heading)]">Contact</a>
                        </nav>

                        <div className="flex flex-col items-center gap-1 lg:items-end">
                            <div className="font-[family-name:var(--font-body)] font-bold text-[var(--color-text-heading)]">1-800-ECO-ONE</div>
                            <div className="font-[family-name:var(--font-body)] text-sm text-[var(--color-text-muted)]">info@ecoone.com</div>
                        </div>
                    </div>
                    <div className="mt-10 text-center font-[family-name:var(--font-body)] text-xs text-[var(--color-text-muted)]">
                        © 2024 Eco One Water. All Rights Reserved. | Privacy Policy | Terms of Service
                    </div>
                </div>
            </footer>
        </div>
    );
}
