import React from 'react'
import Link from 'next/link'
const Services = () => {

    const massages = [
        {
            title: 'Relaxing Spa Massage',
            img: "/images/spa1.jpg",
            para: "Unwind with a full‑body aroma oil massage that melts away stress, eases muscle tension, and restores deep relaxation from head to toe. Ideal after a long work week or travel."
        },
        {
            title: 'Hot Stone Therapy',
            img: "/images/spa2.jpg",
            para: "A warm stone therapy that combines gentle pressure with heated stones to improve circulation, relieve stiffness, and leave you feeling grounded, calm, and refreshed."
        },
        {
            title: 'Head, Neck & Shoulder',
            img: "/images/spa3.jpg",
            para: "A soothing head, neck, and shoulder massage focused on releasing everyday tension, improving sleep quality, and giving you an instant sense of lightness and clarity."
        },
    ];

    return (
        <div className='rounded-3xl mt-10'>
            <h1 className='text-center uppercase mb-3 font-bold text-[#bc4b78]'>Our Services</h1>
            <h2 className='text-center text-[#bc4b78] lg:text-5xl md:text-5xl text-4xl font-bold mb-4'>Our Specializations</h2>
            <div className="h-full flex flex-wrap m-2 ">
                {massages.map((item, idx) => {
                    return <div className="lg:w-1/3 md:w-1/2 p-2" key={idx}>
                        <div className="rounded-2xl flex justify-center items-center flex-col shadow-lg">
                            <img src={item.img} className="mb-5 h-70 rounded-t-2xl" alt="Pain Relief Massage Calgary" />
                            <div className='p-5 text-center'>
                                <h1 className="text-center text-[#bc4b78] lg:text-3xl text-2xl font-semibold mb-4">{item.title}</h1>
                                <p className="mb-5 text-justify text-[#bc4b78]">
                                    {item.para}
                                </p>
                                <Link
                                    href="/appointment"
                                    className="inline-block bg-[#bc4b78] rounded-lg px-4 py-2 text-white font-medium active:bg-[#bc4b78] hover:bg-[#bc4b78] cursor-pointer"
                                >
                                    Book Now
                                </Link>
                            </div>
                        </div>
                    </div>
                })

                }
            </div>
        </div>
    )
}

export default Services