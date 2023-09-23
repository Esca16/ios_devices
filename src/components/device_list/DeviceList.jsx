import React from 'react'
import { useContext } from 'react'
import { DeviceContext } from '../../context/DeviceProvider'
import DeviceItem from './DeviceItem';

const DeviceList = () => {
    const { devices, setDevices } = useContext(DeviceContext);
    return (
        <div className='flex flex-wrap'>
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