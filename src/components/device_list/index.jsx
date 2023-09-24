import React from 'react'
import DeviceList from './DeviceList'
import DeviceProvider from '../../context/DeviceProvider'

const Device = () => {
    return (
        <>
            <DeviceProvider>
                <DeviceList />
            </DeviceProvider>
        </>
    )
}

export default Device