import React from 'react'

const Prices = () => {
  const massages = [
            {
                title:'Massage 1',
                img:"/images/spa1.jpg",
                price:85,
                min:45
            },
            {
                title:'Massage 2',
                img:"/images/spa1.jpg",
                price:100,
                min:60
            },
            {
                title:'Massage 3',
                img:"/images/spa1.jpg",
                price:145,
                min:90
            },
            {
                title:'Massage 3',
                img:"/images/spa1.jpg",
                price:190,
                min:120
            },
        ];

  return (
    <div className='rounded-3xl mt-10'>
        <h1 className='text-center uppercase mb-3 font-bold text-[#bc4b78]'>In Clinic Massage</h1>
        <h2 className='text-center text-[#bc4b78] lg:text-5xl md:text-5xl text-4xl font-bold mb-4'>Our Special Prices</h2>
        <div className="h-full flex flex-wrap m-2 ">
            {massages.map((item,idx)=>{
                return <div className="lg:w-1/2 md:w-1/2 p-2" key={idx}>
                    <div className="rounded-2xl flex flex-col lg:flex-row lg:justify-evenly p-2 shadow-md">
                        <img src={item.img} className="mb-5 w-full lg:w-1/2 mt-5 object-cover rounded-2xl" alt=""  />
                        <div className='p-5 flex flex-col justify-between'>
                            <h1 className="lg:text-3xl text-2xl font-semibold mb-4 text-[#bc4b78]">{item.title}</h1>
                            <div>
                                <p className="mb-5 text-justify">
                                    <span className='text-2xl font-bold text-[#bc4b78]'>${item.price}</span> <span className='text-[#bc4b78]'>|</span> <span className='text-[#bc4b78]'>{item.min} Mins </span>
                                </p>
                                <hr className='mb-2 text-[#bc4b78]' />
                            </div>
                            <button className="bg-[#bc4b78] rounded-lg px-3 py-2 text-white active:bg-[#be3a6f] hover:bg-[#be3a6f] cursor-pointer">Book Now</button>
                        </div>
                    </div>
                </div>
            })

            }
        </div>
    </div>
  )
}

export default Prices