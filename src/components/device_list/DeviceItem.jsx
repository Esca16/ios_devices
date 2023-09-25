import React from 'react'

const DeviceItem = ({ data }) => {
    return (
        <div className='basis-[30%] mx-auto border-2 pb-5 border-slate-600'>
            <img className='w-full h-[450px] object-cover' src={data.img_url} alt={data.brand_name} />
            <p className='ms-4 text-lg'><span className='font-semibold'>Brand name</span>: {data.brand_name}</p>
            <p className='ms-4 text-lg'><span className='font-semibold'>Price</span>: {data.price}</p>
        </div>
    )
}

export default DeviceItem