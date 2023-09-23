import { useState } from 'react';
import { createContext } from 'react'

export const DeviceContext = createContext();

const DeviceProvider = ({ children }) => {
    const [devices, setDevices] = useState([{
        id: 1,
        brand_name: "i phone 13",
        img_url: "http://geniusmobile.lk/wp-content/uploads/2019/09/black-11.jpg",
        price: "599 $"
    }])
    return (
        <DeviceContext.Provider value={{ devices, setDevices }}>{children}</DeviceContext.Provider>
    )
}

export default DeviceProvider