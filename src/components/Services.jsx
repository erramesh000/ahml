import React from 'react'
const Services = () => {
    
    const massages = [
            {
                title:'Spa & Maasage 1',
                img:"/images/spa1.jpg",
                para:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            },
            {
                title:'Spa & Maasage 2',
                img:"/images/spa2.jpg",
                para:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            },
            {
                title:'Spa & Maasage 3',
                img:"/images/spa1.jpg",
                para:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            },
        ];

  return (
    <div className='cta-spa rounded-3xl'>
        <h1 className='text-center uppercase mb-3 font-bold'>Our Services</h1>
        <h2 className='text-center text-orange-500 lg:text-5xl md:text-5xl text-4xl font-bold mb-4'>Our Specializations</h2>
        <div className="h-full flex flex-wrap m-2 ">
            {massages.map((item,idx)=>{
                return <div className="lg:w-1/3 md:w-1/2 p-2" key={idx}>
                    <div className="rounded-2xl flex justify-center items-center flex-col shadow-lg hover:bg-[#bc4b78] hover:text-white">
                        <img src={item.img} className="mb-5 w-full h-50 object-cover rounded-t-2xl" alt=""  />
                        <div className='p-5 text-center'>
                            <h1 className="text-center lg:text-3xl text-2xl font-semibold mb-4">{item.title}</h1>
                            <p className="mb-5 text-justify">
                                {item.para}
                            </p>
                            {/* <button className="bg-orange-600 rounded-lg px-3 py-2 text-white active:bg-orange-600 hover:bg-orange-400 cursor-pointer">Book Now</button> */}
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