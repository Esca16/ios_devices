import React from 'react'
import { useContext } from 'react'
import DeviceItem from './DeviceItem';
import { DeviceContext } from '../../context/DeviceProvider'

const DeviceList = () => {
    const { devices } = useContext(DeviceContext)
    return (
        <div>
            <div className='text-3xl font-bold ms-4'>I phone lists</div>
            <div className='flex flex-wrap gap-x-[2%] gap-y-6 mt-4'>
                {devices.map((data) => {
                    return (
                        <DeviceItem
                            key={data.id}
                            data={data}
                        />)
                })}
            </div>
        </div >
    )
}

export default DeviceList