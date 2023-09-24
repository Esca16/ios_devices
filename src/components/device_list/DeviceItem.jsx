import React from 'react'

const DeviceItem = ({ data }) => {
    return (
        <div>
            <div>
                <img className='w-full h-[350px] object-cover' src={data.img_url} alt={data.brand_name} />
                <p>{data.brand_name}</p>
            </div>
        </div>
    )
}

export default DeviceItem