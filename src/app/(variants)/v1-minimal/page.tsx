

export default function V1Minimal() {
    return (
        <div className="min-h-screen bg-white text-zinc-900 font-sans selection:bg-teal-100 selection:text-teal-900">
            {/* Header */}
            <header className="sticky top-0 z-50 w-full border-b border-zinc-100 bg-white/80 backdrop-blur-md">
                <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6">
                    <div className="flex items-center gap-2">
                        <div className="h-8 w-8 rounded bg-teal-600 flex items-center justify-center">
                            <span className="text-white font-bold text-xl">E</span>
                        </div>
                        <span className="text-lg font-bold tracking-tight text-zinc-900">ECO ONE WATER</span>
                    </div>
                    <nav className="hidden md:flex items-center gap-8">
                        <a href="#services" className="text-sm font-medium text-zinc-500 hover:text-teal-600 transition-colors">Services</a>
                        <a href="#about" className="text-sm font-medium text-zinc-500 hover:text-teal-600 transition-colors">About</a>
                        <a href="#contact" className="text-sm font-medium text-zinc-500 hover:text-teal-600 transition-colors">Contact</a>
                    </nav>
                    <a
                        href="#book"
                        className="inline-flex h-10 items-center justify-center rounded-full bg-teal-600 px-6 text-sm font-semibold text-white transition-all hover:bg-teal-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
                    >
                        Free Water Test
                    </a>
                </div>
            </header>

            <main>
                {/* Hero Section */}
                <section className="relative overflow-hidden pt-20 pb-24 lg:pt-32 lg:pb-40">
                    <div className="container mx-auto px-4 sm:px-6">
                        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                            <span className="inline-flex items-center rounded-full bg-teal-50 px-3 py-1 text-xs font-semibold text-teal-700 ring-1 ring-inset ring-teal-700/10 mb-6">
                                Serving Florida Homeowners
                            </span>
                            <h1 className="max-w-3xl text-4xl font-extrabold tracking-tight text-zinc-900 sm:text-6xl">
                                Pure, Clean Water for <br />
                                <span className="text-teal-600">Your Entire Home.</span>
                            </h1>
                            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-600">
                                Eco One Water provides premium residential water treatment solutions. From water softeners to reverse osmosis, we ensure your family enjoys the highest quality water possible.
                            </p>
                            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:gap-6">
                                <a
                                    href="#book"
                                    className="inline-flex h-12 items-center justify-center rounded-full bg-teal-600 px-8 text-base font-bold text-white shadow-md transition-all hover:bg-teal-700 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
                                >
                                    Book Your Free Water Test
                                </a>
                                <a
                                    href="#services"
                                    className="text-base font-semibold leading-6 text-zinc-900 hover:text-teal-600 transition-colors"
                                >
                                    View Our Services <span aria-hidden="true">→</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Decorative background element */}
                    <div className="absolute top-0 right-0 -z-10 h-full w-1/2 bg-gradient-to-l from-teal-50/50 to-transparent hidden lg:block" />
                </section>

                {/* Services Section */}
                <section id="services" className="bg-zinc-50 py-24 sm:py-32">
                    <div className="container mx-auto px-4 sm:px-6 text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">Our Solutions</h2>
                        <p className="mt-4 text-lg text-zinc-600">Tailored water treatment systems for every need.</p>

                        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                            {[
                                { name: "Water Softeners", desc: "Eliminate hard water minerals and protect your appliances." },
                                { name: "Filtration Systems", desc: "Remove impurities and enjoy better tasting water from every tap." },
                                { name: "Reverse Osmosis", desc: "Pure hydration with point-of-use or whole-house systems." },
                                { name: "Well Water", desc: "Specialized treatment for iron, sulfur, and bacteria common in wells." }
                            ].map((service) => (
                                <div key={service.name} className="flex flex-col items-center p-8 bg-white rounded-2xl shadow-sm border border-zinc-100 transition-transform hover:-translate-y-1">
                                    <div className="h-12 w-12 rounded-lg bg-teal-100 flex items-center justify-center mb-6">
                                        <div className="h-6 w-6 rounded-full border-2 border-teal-600" />
                                    </div>
                                    <h3 className="text-lg font-bold text-zinc-900">{service.name}</h3>
                                    <p className="mt-2 text-sm text-zinc-500 leading-relaxed">{service.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Social Proof */}
                <section className="py-24">
                    <div className="container mx-auto px-4 sm:px-6">
                        <div className="mx-auto max-w-2xl text-center">
                            <h2 className="text-3xl font-bold tracking-tight text-zinc-900">Trusted by Your Neighbors</h2>
                            <div className="mt-10 flex items-center justify-center gap-1">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} className="h-6 w-6 text-teal-500 fill-current" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>
                            <p className="mt-6 text-lg font-medium text-zinc-900">
                                &ldquo;Eco One Water transformed our home life. No more hard water stains and the drinking water tastes incredible. Highly recommend!&rdquo;
                            </p>
                            <div className="mt-4 flex flex-col gap-1">
                                <span className="font-bold text-zinc-900">Sarah M.</span>
                                <span className="text-sm text-zinc-500">Volusia County, FL</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Final CTA */}
                <section id="book" className="bg-teal-600 py-16 sm:py-24">
                    <div className="container mx-auto px-4 sm:px-6 text-center">
                        <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">Ready for better water?</h2>
                        <p className="mx-auto mt-4 max-w-2xl text-lg text-teal-100">
                            Schedule your complimentary in-home water test today and discover the Eco One difference.
                        </p>
                        <div className="mt-10">
                            <a
                                href="#"
                                className="inline-flex h-14 items-center justify-center rounded-full bg-white px-10 text-lg font-bold text-teal-600 shadow-xl transition-all hover:bg-zinc-50 hover:scale-105 active:scale-95"
                            >
                                Schedule Free Water Test
                            </a>
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="border-t border-zinc-100 bg-white py-12">
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
                        <div className="flex items-center gap-2">
                            <div className="h-6 w-6 rounded bg-teal-600 flex items-center justify-center">
                                <span className="text-white font-bold text-xs">E</span>
                            </div>
                            <span className="text-sm font-bold tracking-tight text-zinc-900">ECO ONE WATER</span>
                        </div>
                        <p className="text-sm text-zinc-500">© 2026 Eco One Water. All rights reserved.</p>
                        <div className="flex gap-6">
                            <a href="#" className="text-sm text-zinc-500 hover:text-teal-600">Privacy Policy</a>
                            <a href="#" className="text-sm text-zinc-500 hover:text-teal-600">Terms of Service</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
