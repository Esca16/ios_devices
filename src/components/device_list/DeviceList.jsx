import React from 'react'
import { useContext } from 'react'
import DeviceItem from './DeviceItem';
import { DeviceContext } from '../../context/DeviceProvider'

const DeviceList = () => {
    const { devices } = useContext(DeviceContext)
    return (
        <div className='flex flex-wrap w-[80%] mx-auto'>
            {devices.map((data) => {
                return (
                    <DeviceItem
                        key={data.id}
                        data={data}
                    />)
            })}
        </div>
    )
}

export default DeviceList