import React from "react";

export default function Services() {
    return (
        <main className="min-h-screen bg-[#eef4ff] flex items-center justify-center px-4 py-12 md:py-20">
            <section className="w-full max-w-6xl">
                <div className="grid gap-8 md:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] bg-white rounded-[32px] shadow-[0_24px_60px_rgba(15,23,42,0.12)] overflow-hidden px-6 py-10 sm:px-10 md:px-14 md:py-14">
                    {/* Left: Text content */}
                    <div className="flex flex-col justify-center">
                        <h1 className="text-[26px] sm:text-[30px] md:text-[34px] font-bold leading-tight text-[#163469] mb-6">
                            Dental Department
                        </h1>

                        <div className="space-y-5 text-sm sm:text-[15px] text-slate-600">
                            <FeatureItem>
                                Ac amet in adipiscing in sed sit eget. Aliquam suspendisse viverra varius.
                            </FeatureItem>
                            <FeatureItem>
                                Ac justo, elementum sed nec consequat odio velit, imperdiet eu risus eget.
                            </FeatureItem>
                            <FeatureItem>
                                Nunc in senectus bibendum ut dictum.
                            </FeatureItem>
                        </div>

                        <div className="my-8 h-px w-full bg-slate-200" />

                        <div className="flex flex-wrap items-center gap-4 text-sm">
                            <button className="rounded-full bg-[#1d4ed8] px-8 py-3 font-medium text-white shadow-[0_18px_45px_rgba(37,99,235,0.55)] hover:bg-[#1e40af] transition-colors">
                                Book a visit
                            </button>
                            <p className="text-slate-500">
                                or call us: <span className="font-medium text-[#3b82f6]">+61 (0) 3 8376 6284</span>
                            </p>
                        </div>
                    </div>

                    {/* Right: Image */}
                    <div className="relative h-64 sm:h-80 md:h-full">
                        <img
                            src="/images/spa1.jpg"
                            alt="Dental treatment at the clinic"
                            className="h-full w-full object-cover"
                        />
                    </div>
                </div>
            </section>
        </main>
    );
}

function FeatureItem({ children }) {
    return (
        <div className="flex gap-4 items-start">
            <span className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#3b82f6] bg-white shadow-[0_0_0_6px_rgba(59,130,246,0.18)]">
                <span className="text-[#2563eb] text-lg leading-none">✓</span>
            </span>
            <p className="leading-relaxed">{children}</p>
        </div>
    );
}