import React,{ useRef } from "react";

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
                    <h1>BEDOCTOR</h1>
                    <h1 className="text-7xl font-semibold mt-10 mb-10">Services</h1>
                    <p className="w-80 sm:w-120 md:w-150 lg:w-200 text-2xl text-center">Vulputate fringilla in gravida hendrerit quis sed ultrices. Risus in vestibulum turpis velit. Varius id consequat consectetur odio elementum elit enim.</p>
                    <button onClick={handleScrollToDiv} className="mt-10 mb-10 px-8 py-3 bg-[#1d4ed8] hover:bg-[#123fbb] rounded-full text-white cursor-pointer">Services</button>
                </div>
                {/* <div className="grid gap-8 md:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] bg-white rounded-4xl shadow-[0_24px_60px_rgba(15,23,42,0.12)] overflow-hidden px-6 py-10 sm:px-10 md:px-14 md:py-14"> */}
                    {/* Left: Text content */}
                    {/* <div className="flex flex-col justify-center">
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
                    </div> */}

                    {/* Right: Image */}
                    {/* <div className="relative h-64 sm:h-80 md:h-full">
                        <img
                            src="/images/spa1.jpg"
                            alt="Dental treatment at the clinic"
                            className="h-full w-full object-cover"
                        />
                    </div> */}
                {/* </div> */}

                <div className="flex flex-warp gap-x-4 gap-y-4 mt-5 flex-col lg:flex-row" ref={divRef} style={{scrollMarginTop:"160px"}}>
                    <div className="lg:w-1/2 w-full rounded-3xl h-80 lg:h-screen" style={{backgroundImage:"url(/images/spa1.jpg)",backgroundSize:"cover",backgroundPosition:"center"}}>
                    </div>
                    <div className="lg:w-1/2 w-full bg-white rounded-3xl p-8 sm:p-18 lg:p-20">
                        <div className="flex flex-col justify-center">
                            <h1 className="text-[26px] sm:text-[30px] md:text-[34px] font-bold leading-tight text-[#163469] mb-6">
                                Dental Department
                            </h1>

                            <div className="space-y-10 text-sm sm:text-[15px] text-slate-600">
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

                            <div className="flex flex-wrap flex-col gap-y-10 text-sm">
                                <button className="rounded-full bg-[#1d4ed8] py-5 font-medium text-white shadow-[0_18px_45px_rgba(37,99,235,0.55)] hover:bg-[#1e40af] transition-colors w-50">
                                    Book a visit
                                </button>
                                <p className="text-slate-500">
                                    or call us: <span className="font-medium text-[#3b82f6]">+61 (0) 0 0000 0000</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-warp gap-x-4 gap-y-4 mt-5 flex-col lg:flex-row">                    
                    <div className="lg:w-1/2 w-full bg-white rounded-3xl p-8 sm:p-18 lg:p-20">
                        <div className="flex flex-col justify-center">
                            <h1 className="text-[26px] sm:text-[30px] md:text-[34px] font-bold leading-tight text-[#163469] mb-6">
                                Dental Department
                            </h1>

                            <div className="space-y-10 text-sm sm:text-[15px] text-slate-600">
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

                            <div className="flex flex-wrap flex-col gap-y-10 text-sm">
                                <button className="rounded-full bg-[#1d4ed8] py-5 font-medium text-white shadow-[0_18px_45px_rgba(37,99,235,0.55)] hover:bg-[#1e40af] transition-colors w-50">
                                    Book a visit
                                </button>
                                <p className="text-slate-500">
                                    or call us: <span className="font-medium text-[#3b82f6]">+61 (0) 0 0000 0000</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/2 w-full rounded-3xl h-80 lg:h-screen" style={{backgroundImage:"url(/images/spa2.jpg)",backgroundSize:"cover",backgroundPosition:"center"}}>
                    </div>
                </div>
                <div className="flex flex-warp gap-x-4 gap-y-4 mt-5 flex-col lg:flex-row">
                    <div className="lg:w-1/2 w-full rounded-3xl h-80 lg:h-screen" style={{backgroundImage:"url(/images/spa3.jpg)",backgroundSize:"cover",backgroundPosition:"center"}}>
                    </div>
                    <div className="lg:w-1/2 w-full bg-white rounded-3xl p-8 sm:p-18 lg:p-20">
                        <div className="flex flex-col justify-center">
                            <h1 className="text-[26px] sm:text-[30px] md:text-[34px] font-bold leading-tight text-[#163469] mb-6">
                                Dental Department
                            </h1>

                            <div className="space-y-10 text-sm sm:text-[15px] text-slate-600">
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

                            <div className="flex flex-wrap flex-col gap-y-10 text-sm">
                                <button className="rounded-full bg-[#1d4ed8] py-5 font-medium text-white shadow-[0_18px_45px_rgba(37,99,235,0.55)] hover:bg-[#1e40af] transition-colors w-50">
                                    Book a visit
                                </button>
                                <p className="text-slate-500">
                                    or call us: <span className="font-medium text-[#3b82f6]">+61 (0) 0 0000 0000</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-warp gap-x-4 gap-y-4 mt-5 flex-col lg:flex-row">                    
                    <div className="lg:w-1/2 w-full bg-white rounded-3xl p-8 sm:p-18 lg:p-20">
                        <div className="flex flex-col justify-center">
                            <h1 className="text-[26px] sm:text-[30px] md:text-[34px] font-bold leading-tight text-[#163469] mb-6">
                                Dental Department
                            </h1>

                            <div className="space-y-10 text-sm sm:text-[15px] text-slate-600">
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

                            <div className="flex flex-wrap flex-col gap-y-10 text-sm">
                                <button className="rounded-full bg-[#1d4ed8] py-5 font-medium text-white shadow-[0_18px_45px_rgba(37,99,235,0.55)] hover:bg-[#1e40af] transition-colors w-50">
                                    Book a visit
                                </button>
                                <p className="text-slate-500">
                                    or call us: <span className="font-medium text-[#3b82f6]">+61 (0) 0 0000 0000</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/2 w-full rounded-3xl h-80 lg:h-screen" style={{backgroundImage:"url(/images/hero1.jpg)",backgroundSize:"cover",backgroundPosition:"center"}}>
                    </div>
                </div>
            </section>
        </main>
        {/* Outside of services */}
        <div className="flex flex-col justify-between h-full bg-orange-500 mt-10 rounded-3xl m-4 p-10" style={{backgroundImage:"url(/images/spa1.jpg)",backgroundSize:"cover",backgroundPosition:"center",backgroundAttachment:"fixed"}}>
                    <div className="mt-20 px-3 text-5xl font-semibold text-white">
                        <h1>Why you should</h1>
                        <h1>choose me</h1>
                        <button className="mt-10 mb-10 px-8 py-4 text-sm bg-[#1d4ed8] hover:bg-[#123fbb] rounded-full text-white">My Experience</button>
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
            <span className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#3b82f6] bg-white shadow-[0_0_0_6px_rgba(59,130,246,0.18)] ">
                <span className="text-[#2563eb] text-lg leading-none">✓</span>
            </span>
            <p className="leading-relaxed absolute left-15">{children}</p>
        </div>
    );
}