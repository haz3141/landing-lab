


export default function V4MockupImplementation() {
    return (
        <div className="min-h-screen bg-[#F8FAFC] font-sans text-slate-800 antialiased selection:bg-sky-100 selection:text-sky-900">
            {/* 
        ------------------------------------------
        HEADER
        ------------------------------------------
      */}
            <header className="sticky top-0 z-50 w-full border-b border-slate-200/60 bg-white/90 backdrop-blur-md">
                <div className="mx-auto flex h-[70px] max-w-[1440px] items-center justify-between px-6 lg:px-20">
                    {/* Logo Area */}
                    <div className="flex items-center gap-3">
                        {/* Droplet Logo Mark */}
                        <div className="flex h-8 w-8 items-center justify-center">
                            <svg width="20" height="26" viewBox="0 0 20 26" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-sky-500">
                                <path d="M10 0C10 0 0 10.7436 0 16.9C0 22.0287 4.47715 26 10 26C15.5228 26 20 22.0287 20 16.9C20 10.7436 10 0 10 0Z" fill="url(#paint0_linear_logo)" />
                                <defs>
                                    <linearGradient id="paint0_linear_logo" x1="10" y1="0" x2="10" y2="26" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#bae6fd" />
                                        <stop offset="1" stopColor="#0ea5e9" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                        <span className="text-xl font-bold tracking-tight text-slate-900">
                            Eco <span className="text-slate-400 font-medium">One</span> Water
                        </span>
                    </div>

                    {/* Desktop Nav Actions */}
                    <div className="hidden items-center gap-8 md:flex">
                        <a
                            href="#book"
                            className="inline-flex h-10 items-center justify-center rounded bg-[#4C7C9E] px-6 text-sm font-semibold text-white transition-all hover:bg-[#3A607A] focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2"
                        >
                            Book Free Water Test
                        </a>
                        <div className="flex items-center gap-2 text-xs font-medium text-slate-600">
                            <svg className="h-4 w-4 text-sky-600" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            Licensed & Insured | 5-Star Rated
                        </div>
                    </div>

                    {/* Mobile Menu Toggle (Visual Only) */}
                    <button className="flex h-10 w-10 items-center justify-center rounded-lg text-slate-500 md:hidden">
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </header>

            <main>
                {/* 
          ------------------------------------------
          HERO SECTION
          ------------------------------------------
        */}
                <section className="relative overflow-hidden bg-[#F5F1E8] pb-16 pt-20 lg:pb-32 lg:pt-32">
                    {/* Background Decorations matching mockup */}
                    <div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-bl from-sky-100/50 to-transparent opacity-60 mix-blend-multiply blur-3xl pointer-events-none" />

                    <div className="mx-auto grid max-w-[1440px] items-center gap-12 px-6 lg:grid-cols-2 lg:px-20">
                        {/* Hero Copy */}
                        <div className="max-w-xl">
                            <h1 className="text-4xl font-bold tracking-tight text-[#1E293B] sm:text-5xl lg:text-6xl lg:leading-[1.1]">
                                Better water. <br />
                                Better living.
                            </h1>
                            <p className="mt-6 text-lg leading-relaxed text-[#475569]">
                                Schedule a free in-home water test and get a personalized recommendation.
                            </p>

                            <div className="mt-8 flex flex-col items-start gap-4">
                                <a
                                    href="#book"
                                    className="group inline-flex h-12 items-center justify-center gap-2 rounded bg-[#4C7C9E] px-8 text-base font-semibold text-white transition-all hover:bg-[#3A607A] focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2"
                                >
                                    Book Free Water Test
                                    {/* Droplet Icon in Button */}
                                    <svg className="h-4 w-4 opacity-70" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1.323l3.954 1.582 1.599-.8a1 1 0 01.894 1.79l-1.233.616 1.738 5.42a1 1 0 01-.285 1.05A3.989 3.989 0 0115 15a3.989 3.989 0 01-2.667-1.019 1 1 0 00-.565.733A2 2 0 118 14a2 2 0 00-.565-.733A3.989 3.989 0 014.767 15 3.989 3.989 0 012 14.239a1 1 0 01-.285-1.05l1.738-5.42-1.233-.616a1 1 0 01.894-1.79l1.599.8L8.71 4.323V3a1 1 0 011-1zm-5 8.274l-.818 2.552c.25.112.526.174.818.174.292 0 .569-.062.818-.174L5 10.274zm10 0l-.818 2.552c.25.112.526.174.818.174.292 0 .569-.062.818-.174L15 10.274z" clipRule="evenodd" />
                                    </svg>
                                </a>
                                <a href="#services" className="text-sm font-medium text-[#4C7C9E] hover:underline underline-offset-4">
                                    See solutions
                                </a>
                            </div>

                            {/* Reviews */}
                            <div className="mt-10 flex items-center gap-3">
                                <div className="flex gap-0.5">
                                    {[1, 2, 3, 4, 5].map((i) => (
                                        <svg key={i} className="h-4 w-4 text-[#4C7C9E]" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                                <span className="text-xs font-medium text-slate-600">4.9/5 Average Rating • Over 500 Reviews</span>
                            </div>
                        </div>

                        {/* Hero Image / Illustration Area */}
                        <div className="relative flex justify-center lg:justify-end">
                            {/* Abstract Glass/Water Graphic Simulation */}
                            <div className="relative h-[300px] w-[300px] sm:h-[400px] sm:w-[400px] lg:h-[500px] lg:w-[500px]">
                                {/* Placeholder for the complex glassmorphism graphic in mockup - using Tailwind shapes */}
                                <div className="absolute inset-0 rotate-45 rounded-[40px] border border-white/50 bg-gradient-to-br from-white/30 to-sky-100/30 backdrop-blur-xl shadow-2xl" />
                                <div className="absolute inset-8 rotate-45 rounded-[30px] border border-white/60 bg-gradient-to-tr from-sky-50/40 to-white/40 backdrop-blur-sm" />
                                {/* Droplet Central Visual */}
                                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
                                    <div className="flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-b from-sky-200 to-sky-50 shadow-inner">
                                        <svg className="h-16 w-16 text-white drop-shadow-md" fill="currentColor" viewBox="0 0 24 24">
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
          HOW IT WORKS
          ------------------------------------------
        */}
                <section className="bg-white py-24 sm:py-32">
                    <div className="mx-auto max-w-[1440px] px-6 lg:px-20">
                        <div className="text-center">
                            <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-500">How it works</h2>
                            <p className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Your Path to Pure Water</p>
                        </div>

                        <div className="mt-16 grid grid-cols-1 gap-12 text-center sm:grid-cols-3">
                            {[
                                {
                                    title: "1. Test",
                                    description: "We analyze your water source and current quality in your home.",
                                    icon: (
                                        <svg className="h-12 w-12 text-[#94A3B8]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                                        </svg>
                                    )
                                },
                                {
                                    title: "2. Recommend",
                                    description: "Get a personalized treatment plan tailored to your specific needs.",
                                    icon: (
                                        <svg className="h-12 w-12 text-[#94A3B8]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                                        </svg>
                                    )
                                },
                                {
                                    title: "3. Install",
                                    description: "Our certified technicians ensure a seamless, professional installation.",
                                    icon: (
                                        <svg className="h-12 w-12 text-[#94A3B8]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.685 2.685 0 0021 17.25l-5.845-5.845a2.685 2.685 0 00-3.735 0 2.685 2.685 0 00.001 3.765zm-2.835-2.825l-5.845-5.845a2.685 2.685 0 010-3.735 2.685 2.685 0 013.735 0l5.845 5.845a2.685 2.685 0 01-3.735 3.735z" />
                                        </svg>
                                    )
                                }
                            ].map((step) => (
                                <div key={step.title} className="flex flex-col items-center">
                                    <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-slate-50">
                                        {step.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900">{step.title}</h3>
                                    <p className="mt-3 text-sm leading-relaxed text-slate-500 max-w-xs">{step.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 
          ------------------------------------------
          SERVICES GRID
          ------------------------------------------
        */}
                <section id="services" className="bg-[#F5F1E8] py-24 sm:py-32">
                    <div className="mx-auto max-w-[1440px] px-6 lg:px-20">
                        <div className="text-center">
                            <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-500">Services</h2>
                            <p className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Our Premium Solutions</p>
                        </div>

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
                                <div key={svc.title} className="group relative flex flex-col items-center rounded-xl bg-white p-8 text-center shadow-sm border border-transparent transition-all hover:border-[#4C7C9E]/20 hover:shadow-md">
                                    {/* Icon Placeholder based on mockup style */}
                                    <div className="mb-6 opacity-60">
                                        <svg className="h-10 w-10 text-[#4C7C9E]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                                            {svc.icon === 'S' && <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />}
                                            {svc.icon === 'F' && <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />}
                                            {svc.icon === 'R' && <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />}
                                            {svc.icon === 'W' && <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />}
                                        </svg>
                                    </div>

                                    <h3 className="text-lg font-bold text-slate-900 leading-tight min-h-[3rem] flex items-center justify-center">{svc.title}</h3>
                                    <p className="mt-4 text-xs leading-relaxed text-slate-500">{svc.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 
          ------------------------------------------
          SOCIAL PROOF
          ------------------------------------------
        */}
                <section className="bg-white py-24 sm:py-32">
                    <div className="mx-auto max-w-[1440px] px-6 lg:px-20 text-center">
                        <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-500">Social Proof</h2>
                        <p className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Trusted by Homeowners Like You</p>

                        <div className="mt-16 grid gap-8 sm:grid-cols-2 max-w-4xl mx-auto text-left">
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
                                <div key={review.author} className="flex gap-4">
                                    <div className="text-6xl font-serif text-slate-200 leading-none">“</div>
                                    <div className="pt-2">
                                        <p className="text-base text-slate-700 leading-relaxed font-medium">
                                            {review.quote}
                                        </p>
                                        <div className="mt-4 text-sm font-bold text-slate-900">
                                            - {review.author}, {review.loc}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-16 flex flex-col items-center gap-2">
                            <div className="flex gap-1 text-[#4C7C9E]">
                                {[1, 2, 3, 4, 5].map((i) => (
                                    <svg key={i} className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>
                            <span className="text-slate-900 font-bold">4.9/5 Average Rating</span>
                        </div>
                    </div>
                </section>

                {/* 
          ------------------------------------------
          CTA / FORM SECTION
          ------------------------------------------
        */}
                <section className="bg-slate-50/80 bg-[url('https://images.unsplash.com/photo-1546554137-f86b9593a222?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center bg-no-repeat py-24 sm:py-32 relative">
                    <div className="absolute inset-0 bg-white/90 backdrop-blur-[1px]"></div>

                    <div className="relative mx-auto grid max-w-[1440px] gap-12 px-6 lg:grid-cols-2 lg:items-center lg:px-20">

                        <div className="max-w-lg">
                            <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                                Take the First Step to Cleaner Water
                            </h2>
                            <p className="mt-6 text-lg leading-relaxed text-slate-600">
                                Our free in-home water test is a no-obligation, educational consultation. Discover the difference pure water can make.
                            </p>
                        </div>

                        <div className="mx-auto w-full max-w-md rounded-2xl bg-white p-8 shadow-xl ring-1 ring-slate-900/5">
                            <h3 className="text-lg font-bold text-slate-900">Schedule Your Free Test</h3>
                            <form className="mt-6 space-y-4">
                                <div>
                                    <label htmlFor="name" className="sr-only">Name</label>
                                    <input type="text" id="name" name="name" placeholder="Your Name" className="w-full rounded-md border-0 bg-slate-100 px-4 py-3 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-500 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6" />
                                </div>
                                <div>
                                    <label htmlFor="zip" className="sr-only">Zip Code</label>
                                    <input type="text" id="zip" name="zip" placeholder="Zip Code" className="w-full rounded-md border-0 bg-slate-100 px-4 py-3 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-500 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6" />
                                </div>
                                <div>
                                    <label htmlFor="phone" className="sr-only">Phone Number</label>
                                    <input type="tel" id="phone" name="phone" placeholder="Phone Number" className="w-full rounded-md border-0 bg-slate-100 px-4 py-3 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-500 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6" />
                                </div>
                                <button type="submit" className="mt-4 w-full rounded bg-[#4C7C9E] px-8 py-3.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-[#3A607A] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600">
                                    Book My Free Water Test
                                </button>
                                <p className="mt-4 text-center text-xs text-slate-500">
                                    Book Free Water Test & Consultation
                                </p>
                            </form>
                        </div>
                    </div>
                </section>
            </main>

            {/* 
        ------------------------------------------
        FOOTER
        ------------------------------------------
      */}
            <footer className="bg-[#F5F1E8] py-12 text-sm text-slate-600">
                <div className="mx-auto flex max-w-[1440px] flex-col items-center gap-6 border-t border-slate-200 px-6 pt-12 lg:flex-row lg:justify-between lg:px-20">
                    <div className="flex items-center gap-2">
                        {/* Small Droplet */}
                        <div className="flex h-6 w-6 items-center justify-center">
                            <svg width="14" height="18" viewBox="0 0 20 26" fill="none" className="text-slate-300">
                                <path d="M10 0C10 0 0 10.7436 0 16.9C0 22.0287 4.47715 26 10 26C15.5228 26 20 22.0287 20 16.9C20 10.7436 10 0 10 0Z" fill="currentColor" />
                            </svg>
                        </div>
                    </div>

                    <div className="flex gap-8 font-medium">
                        <a href="#services" className="hover:text-slate-900">Services</a>
                        <a href="#" className="hover:text-slate-900">About</a>
                        <a href="#" className="hover:text-slate-900">Testimonials</a>
                        <a href="#" className="hover:text-slate-900">FAQ</a>
                        <a href="#" className="hover:text-slate-900">Contact</a>
                    </div>

                    <div className="flex flex-col items-center gap-1 lg:items-end">
                        <div className="font-bold text-slate-900">1-800-ECO-ONE</div>
                        <div>info@ecoone.com</div>
                    </div>
                </div>
                <div className="mt-8 text-center text-xs text-slate-400">
                    © 2024 Eco One Water. All Rights Reserved. | Privacy Policy | Terms of Service
                </div>
            </footer>
        </div>
    );
}
