import React, { useRef } from "react";

export default function Services() {
    const divRef = useRef(null);
    const handleScrollToDiv = () => {
        if (divRef.current) {
            divRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };
    return (
        <>
            <main className="min-h-screen bg-[#eef4ff] flex items-center justify-center px-4 py-12 md:py-20">
                <section className="w-full max-w-6xl">
                    <div className="p-20 flex flex-col justify-center items-center">
                        <h1 className="tracking-[0.25em] uppercase text-sm text-[#bc4b78]">Advanced Healing Massage Ltd</h1>
                        <h1 className="text-7xl font-semibold mt-10 mb-10">Services</h1>
                        <p className="w-80 sm:w-120 md:w-150 lg:w-200 text-2xl text-center">
                            Tailored massage therapies designed to release tension, support recovery, and help you feel
                            lighter, calmer, and deeply restored.
                        </p>
                        <button onClick={handleScrollToDiv} className="mt-10 mb-10 px-8 py-3 bg-[#bc4b78] hover:bg-bg-[#bc4b78] rounded-full text-white cursor-pointer">Services</button>
                    </div>


                    <div className="flex flex-warp gap-x-4 gap-y-4 mt-5 flex-col lg:flex-row" ref={divRef} style={{ scrollMarginTop: "160px" }}>
                        <div className="lg:w-1/2 w-full rounded-3xl min-h-[260px]" style={{ backgroundImage: "url(/images/spa1.jpg)", backgroundSize: "cover", backgroundPosition: "center" }}>
                        </div>
                        <div className="lg:w-1/2 w-full bg-white rounded-3xl p-8 sm:p-18 lg:p-20">
                            <div className="flex flex-col justify-center">
                                <h1 className="text-[26px] sm:text-[30px] md:text-[34px] font-bold leading-tight text-[#163469] mb-6">
                                    Deep Tissue Massage
                                </h1>

                                <div className="space-y-10 text-sm sm:text-[15px] text-slate-600">
                                    <FeatureItem>
                                        Focused, slower strokes that work into deeper muscle layers to release long-held tension.
                                    </FeatureItem>
                                    <FeatureItem>
                                        Ideal for chronic tightness in the neck, shoulders, lower back, and hips.
                                    </FeatureItem>
                                    <FeatureItem>
                                        Helps improve mobility, posture, and overall body alignment after everyday strain.
                                    </FeatureItem>
                                </div>

                                <div className="my-8 h-px w-full bg-slate-200" />

                                <div className="flex flex-wrap flex-col gap-y-10 text-sm">
                                    <button className="rounded-full bg-[#bc4b78] py-5 font-medium text-white shadow-[0_18px_45px_rgba(188,75,120,0.55)] cursor-pointer hover:bg-[#bc4b78] transition-colors w-50">
                                        Book a visit
                                    </button>
                                    <p className="text-slate-500">
                                        or call us: <span className="font-medium text-[#bc4b78]">+1 (403)-477-2394</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-warp gap-x-4 gap-y-4 mt-5 flex-col lg:flex-row">
                        <div className="lg:w-1/2 w-full bg-white rounded-3xl p-8 sm:p-18 lg:p-20 order-2 lg:order-1">
                            <div className="flex flex-col justify-center">
                                <h1 className="text-[26px] sm:text-[30px] md:text-[34px] font-bold leading-tight text-[#163469] mb-6">
                                    Relaxation Massage
                                </h1>

                                <div className="space-y-10 text-sm sm:text-[15px] text-slate-600">
                                    <FeatureItem>
                                        Long, flowing movements that calm the nervous system and melt away day-to-day stress.
                                    </FeatureItem>
                                    <FeatureItem>
                                        Gentle pressure paired with warm oils to encourage deep breathing and full-body ease.
                                    </FeatureItem>
                                    <FeatureItem>
                                        Perfect when you want to slow down, quiet the mind, and simply be cared for.
                                    </FeatureItem>
                                </div>

                                <div className="my-8 h-px w-full bg-slate-200" />

                                <div className="flex flex-wrap flex-col gap-y-10 text-sm">
                                    <button className="rounded-full bg-[#bc4b78] py-5 font-medium text-white shadow-[0_18px_45px_rgba(188,75,120,0.55)] cursor-pointer hover:bg-[#bc4b78] transition-colors w-50">
                                        Book a visit
                                    </button>
                                    <p className="text-slate-500">
                                        or call us: <span className="font-medium text-[#bc4b78]">+1 (403)-477-2394</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/2 w-full rounded-3xl min-h-[260px] order-1 lg:order-2" style={{ backgroundImage: "url(/images/spa2.jpg)", backgroundSize: "cover", backgroundPosition: "center" }}>
                        </div>
                    </div>
                    <div className="flex flex-warp gap-x-4 gap-y-4 mt-5 flex-col lg:flex-row">
                        <div className="lg:w-1/2 w-full rounded-3xl min-h-[260px]" style={{ backgroundImage: "url(/images/spa3.jpg)", backgroundSize: "cover", backgroundPosition: "center" }}>
                        </div>
                        <div className="lg:w-1/2 w-full bg-white rounded-3xl p-8 sm:p-18 lg:p-20">
                            <div className="flex flex-col justify-center">
                                <h1 className="text-[26px] sm:text-[30px] md:text-[34px] font-bold leading-tight text-[#163469] mb-6">
                                    Therapeutic Massage
                                </h1>

                                <div className="space-y-10 text-sm sm:text-[15px] text-slate-600">
                                    <FeatureItem>
                                        A balanced blend of relaxation and focused work, tailored to the areas you need most.
                                    </FeatureItem>
                                    <FeatureItem>
                                        Supports recovery from desk work, sport, or injury with customized pressure and techniques.
                                    </FeatureItem>
                                    <FeatureItem>
                                        Great for ongoing wellness plans and maintaining long-term comfort in your body.
                                    </FeatureItem>
                                </div>

                                <div className="my-8 h-px w-full bg-slate-200" />

                                <div className="flex flex-wrap flex-col gap-y-10 text-sm">
                                    <button className="rounded-full bg-[#bc4b78] py-5 font-medium text-white shadow-[0_18px_45px_rgba(188,75,120,0.55)] cursor-pointer hover:bg-[#bc4b78] transition-colors w-50">
                                        Book a visit
                                    </button>
                                    <p className="text-slate-500">
                                        or call us: <span className="font-medium text-[#bc4b78]">+1 (403)-477-2394</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-warp gap-x-4 gap-y-4 mt-5 flex-col lg:flex-row">
                        <div className="lg:w-1/2 w-full bg-white rounded-3xl p-8 sm:p-18 lg:p-20 order-2 lg:order-1">
                            <div className="flex flex-col justify-center">
                                <h1 className="text-[26px] sm:text-[30px] md:text-[34px] font-bold leading-tight text-[#163469] mb-6">
                                    Cupping Massage
                                </h1>

                                <div className="space-y-10 text-sm sm:text-[15px] text-slate-600">
                                    <FeatureItem>
                                        Gentle suction cups are used to lift the tissue and encourage fresh circulation.
                                    </FeatureItem>
                                    <FeatureItem>
                                        Helps ease stubborn knots, fascial restrictions, and a sense of heaviness in the body.
                                    </FeatureItem>
                                    <FeatureItem>
                                        Often combined with massage to deepen relief while still feeling nurturing and relaxing.
                                    </FeatureItem>
                                </div>

                                <div className="my-8 h-px w-full bg-slate-200" />

                                <div className="flex flex-wrap flex-col gap-y-10 text-sm">
                                    <button className="rounded-full bg-[#bc4b78] py-5 font-medium text-white shadow-[0_18px_45px_rgba(188,75,120,0.55)] cursor-pointer hover:bg-[#bc4b78] transition-colors w-50">
                                        Book a visit
                                    </button>
                                    <p className="text-slate-500">
                                        or call us: <span className="font-medium text-[#bc4b78]">+1 (403)-477-2394</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/2 w-full rounded-3xl min-h-[260px] order-1 lg:order-2" style={{ backgroundImage: "url(/images/hero1.jpg)", backgroundSize: "cover", backgroundPosition: "center" }}>
                        </div>
                    </div>
                </section>
            </main>
            {/* Outside of services */}
            <div className="flex flex-col justify-between h-full bg-orange-500 mt-10 rounded-3xl m-4 p-10" style={{ backgroundImage: "url(/images/spa1.jpg)", backgroundSize: "cover", backgroundPosition: "center", backgroundAttachment: "fixed" }}>
                <div className="mt-20 px-3 text-5xl font-semibold text-white">
                    <h1>Why you should</h1>
                    <h1>choose me</h1>
                    <button className="mt-10 mb-10 px-8 py-4 text-sm bg-[#bc4b78] hover:bg-[#bc4b78] rounded-full text-white cursor-pointer">My Experience</button>
                </div>
                <div className="mb-20 px-3">
                    <div className="flex flex-col md:flex-row gap-y-10 md:justify-between">
                        <div>
                            <h1 className="text-5xl font-semibold text-white">01</h1>
                            <p className="lg:w-70 md:text-lg text-sm font-semibold text-white">Posuere viverra felis cursus porta. Lacus, egestas elit sed faucibus id nisl scelerisque.</p>
                        </div>
                        <div>
                            <h1 className="text-5xl font-semibold text-white">02</h1>
                            <p className="lg:w-70 md:text-lg text-sm font-semibold text-white">Posuere viverra felis cursus porta. Lacus, egestas elit sed faucibus id nisl scelerisque.</p>
                        </div>
                        <div>
                            <h1 className="text-5xl font-semibold text-white">03</h1>
                            <p className="lg:w-70 md:text-lg text-sm font-semibold text-white">Posuere viverra felis cursus porta. Lacus, egestas elit sed faucibus id nisl scelerisque.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

function FeatureItem({ children }) {
    return (
        <div className="flex gap-x-5 items-center relative">
            <span className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#bc4b78] bg-white shadow-[0_0_0_6px_rgba(188,75,120,0.18)] ">
                <span className="text-[#bc4b78] text-lg leading-none">✓</span>
            </span>
            <p className="leading-relaxed absolute left-15">{children}</p>
        </div>
    );
}