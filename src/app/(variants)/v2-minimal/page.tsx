export default function V2Minimal() {
    return (
        <div className="min-h-screen bg-white text-zinc-800 font-sans antialiased selection:bg-teal-100 selection:text-teal-800">
            {/* Header */}
            <header className="fixed top-0 z-50 w-full border-b border-zinc-100 bg-white/90 backdrop-blur-md">
                <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
                    <a href="#" className="flex items-center gap-2.5 group">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-teal-600 shadow-sm transition-transform group-hover:scale-105">
                            <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707" />
                            </svg>
                        </div>
                        <span className="text-base font-semibold tracking-tight text-zinc-900">Eco One Water</span>
                    </a>
                    <nav className="hidden items-center gap-8 md:flex">
                        <a href="#how-it-works" className="text-sm text-zinc-500 transition-colors hover:text-teal-700">How It Works</a>
                        <a href="#services" className="text-sm text-zinc-500 transition-colors hover:text-teal-700">Services</a>
                        <a href="#reviews" className="text-sm text-zinc-500 transition-colors hover:text-teal-700">Reviews</a>
                    </nav>
                    <a
                        href="#book"
                        className="group inline-flex h-9 items-center gap-2 rounded-full bg-teal-600 px-5 text-sm font-medium text-white shadow-sm transition-all hover:bg-teal-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2"
                    >
                        <span>Free Water Test</span>
                        <svg className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                    </a>
                </div>
            </header>

            <main>
                {/* Hero Section */}
                <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-16">
                    {/* Subtle background accent */}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-teal-50/40 via-white to-white" />

                    <div className="relative z-10 mx-auto max-w-4xl px-6 py-32 text-center">
                        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 px-4 py-1.5 text-sm text-zinc-600">
                            <span className="h-1.5 w-1.5 rounded-full bg-teal-500" />
                            Trusted by Central Florida Families
                        </div>
                        <h1 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl lg:text-6xl">
                            Transform Your Home&apos;s
                            <span className="mt-2 block text-teal-700">
                                Water Quality
                            </span>
                        </h1>
                        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-zinc-600">
                            Professional water treatment solutions tailored for your home. Experience the difference with softer skin, cleaner dishes, and better-tasting water.
                        </p>
                        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
                            <a
                                href="#book"
                                className="group inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-teal-600 px-8 text-base font-semibold text-white shadow-md transition-all hover:bg-teal-700 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 sm:w-auto"
                            >
                                Schedule Free Water Test
                                <svg className="h-4 w-4 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </a>
                            <a
                                href="#how-it-works"
                                className="inline-flex h-12 items-center gap-2 text-base font-medium text-zinc-700 transition-colors hover:text-teal-700"
                            >
                                See How It Works
                                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </section>

                {/* How It Works */}
                <section id="how-it-works" className="border-t border-zinc-100 bg-zinc-50/50 py-24 sm:py-32">
                    <div className="mx-auto max-w-6xl px-6">
                        <div className="text-center">
                            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">How It Works</h2>
                            <p className="mt-4 text-lg text-zinc-600">Three simple steps to better water</p>
                        </div>
                        <div className="mt-16 grid gap-8 sm:grid-cols-3">
                            {[
                                {
                                    step: "01",
                                    title: "Book Your Test",
                                    description: "Schedule a free in-home water test at a time that works for you."
                                },
                                {
                                    step: "02",
                                    title: "Get Your Results",
                                    description: "Our certified technician analyzes your water and explains the findings."
                                },
                                {
                                    step: "03",
                                    title: "Enjoy Pure Water",
                                    description: "We install your custom solution and you start enjoying better water immediately."
                                }
                            ].map((item) => (
                                <div key={item.step} className="group relative rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm transition-all hover:border-teal-200 hover:shadow-md">
                                    <span className="mb-4 inline-block text-3xl font-bold text-teal-600">
                                        {item.step}
                                    </span>
                                    <h3 className="text-xl font-semibold text-zinc-900">{item.title}</h3>
                                    <p className="mt-3 text-zinc-600 leading-relaxed">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Services */}
                <section id="services" className="border-t border-zinc-100 py-24 sm:py-32">
                    <div className="mx-auto max-w-6xl px-6">
                        <div className="text-center">
                            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">Our Solutions</h2>
                            <p className="mt-4 text-lg text-zinc-600">Comprehensive water treatment for every need</p>
                        </div>
                        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                            {[
                                {
                                    name: "Water Softeners",
                                    description: "Eliminate hard water buildup and extend appliance life.",
                                    icon: (
                                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611l-5.905 1.007a2.25 2.25 0 01-2.46-.904L9.75 17.25" />
                                        </svg>
                                    )
                                },
                                {
                                    name: "Filtration Systems",
                                    description: "Remove contaminants for cleaner, better-tasting water.",
                                    icon: (
                                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z" />
                                        </svg>
                                    )
                                },
                                {
                                    name: "Reverse Osmosis",
                                    description: "Ultra-pure drinking water with advanced membrane technology.",
                                    icon: (
                                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                                        </svg>
                                    )
                                },
                                {
                                    name: "Well Water Treatment",
                                    description: "Specialized solutions for iron, sulfur, and bacteria.",
                                    icon: (
                                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M20.893 13.393l-1.135-1.135a2.252 2.252 0 01-.421-.585l-1.08-2.16a.414.414 0 00-.663-.107.827.827 0 01-.812.21l-1.273-.363a.89.89 0 00-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 01-1.81 1.025 1.055 1.055 0 01-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 01-1.383-2.46l.007-.042a2.25 2.25 0 01.29-.787l.09-.15a2.25 2.25 0 012.37-1.048l1.178.236a1.125 1.125 0 001.302-.795l.208-.73a1.125 1.125 0 00-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 01-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 01-1.458-1.137l1.411-2.353A2.25 2.25 0 019.09 6.854l.8-.533a2.25 2.25 0 012.5 0l.8.533a2.25 2.25 0 001.917.342l.362-.145a.75.75 0 00.416-.672v-.417a2.25 2.25 0 011.145-1.954l1.756-1.022a.25.25 0 01.368.152l.474 1.898a.75.75 0 00.58.58l1.898.474a.25.25 0 01.152.368l-1.022 1.756A2.25 2.25 0 0020.25 9.5v4.143a.75.75 0 01-.22.53l-.138.138z" />
                                        </svg>
                                    )
                                }
                            ].map((service) => (
                                <div
                                    key={service.name}
                                    className="group flex flex-col rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition-all hover:border-teal-200 hover:shadow-md"
                                >
                                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 text-teal-600 transition-colors group-hover:bg-teal-100">
                                        {service.icon}
                                    </div>
                                    <h3 className="text-lg font-semibold text-zinc-900">{service.name}</h3>
                                    <p className="mt-2 text-sm leading-relaxed text-zinc-600">{service.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Social Proof / Reviews */}
                <section id="reviews" className="border-t border-zinc-100 bg-zinc-50/50 py-24 sm:py-32">
                    <div className="mx-auto max-w-4xl px-6">
                        <div className="text-center">
                            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">What Our Customers Say</h2>
                            <p className="mt-4 text-lg text-zinc-600">Join hundreds of satisfied Central Florida homeowners</p>
                        </div>
                        <div className="mt-16 grid gap-6 sm:grid-cols-2">
                            {[
                                {
                                    quote: "The difference was immediate. Our water tastes amazing and my skin feels so much better after showers.",
                                    name: "Jennifer R.",
                                    location: "Seminole County, FL",
                                    rating: 5
                                },
                                {
                                    quote: "Professional installation and excellent follow-up service. Highly recommend Eco One Water to anyone.",
                                    name: "Michael T.",
                                    location: "Volusia County, FL",
                                    rating: 5
                                }
                            ].map((testimonial) => (
                                <div key={testimonial.name} className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
                                    <div className="mb-4 flex gap-1">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <svg key={i} className="h-5 w-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        ))}
                                    </div>
                                    <blockquote className="text-zinc-700 leading-relaxed">&ldquo;{testimonial.quote}&rdquo;</blockquote>
                                    <div className="mt-4 flex items-center gap-3">
                                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-100 text-sm font-semibold text-teal-700">
                                            {testimonial.name.charAt(0)}
                                        </div>
                                        <div>
                                            <div className="font-medium text-zinc-900">{testimonial.name}</div>
                                            <div className="text-sm text-zinc-500">{testimonial.location}</div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Final CTA */}
                <section id="book" className="border-t border-zinc-100 bg-teal-50 py-24 sm:py-32">
                    <div className="mx-auto max-w-3xl px-6 text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl lg:text-5xl">
                            Ready for Better Water?
                        </h2>
                        <p className="mx-auto mt-6 max-w-xl text-lg text-zinc-600">
                            Schedule your complimentary in-home water test today. Our certified technicians will analyze your water and recommend the perfect solution for your home.
                        </p>
                        <div className="mt-10">
                            <a
                                href="#"
                                className="group inline-flex h-14 items-center justify-center gap-3 rounded-full bg-teal-600 px-10 text-lg font-semibold text-white shadow-md transition-all hover:bg-teal-700 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-50"
                            >
                                Book Your Free Water Test
                                <svg className="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </a>
                        </div>
                        <p className="mt-6 text-sm text-zinc-500">
                            No obligation • Takes about 30 minutes • 100% free
                        </p>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="border-t border-zinc-100 bg-white py-12">
                <div className="mx-auto max-w-6xl px-6">
                    <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
                        <div className="flex items-center gap-2.5">
                            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-teal-600">
                                <svg className="h-3.5 w-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707" />
                                </svg>
                            </div>
                            <span className="text-sm font-semibold text-zinc-900">Eco One Water</span>
                        </div>
                        <p className="text-sm text-zinc-500">© 2026 Eco One Water. All rights reserved.</p>
                        <div className="flex gap-6">
                            <a href="#" className="text-sm text-zinc-500 transition-colors hover:text-teal-700">Privacy</a>
                            <a href="#" className="text-sm text-zinc-500 transition-colors hover:text-teal-700">Terms</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
