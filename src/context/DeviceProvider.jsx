import { useState } from 'react';
import { createContext } from 'react'

export const DeviceContext = createContext();

const DeviceProvider = ({ children }) => {
    const [devices, setDevices] = useState([
        {
            id: 1,
            brand_name: "i phone 13",
            img_url: "http://geniusmobile.lk/wp-content/uploads/2019/09/black-11.jpg",
            price: "599 $"
        },
        {
            id: 2,
            brand_name: "i phone 13 pro",
            img_url: "https://res.cloudinary.com/grover/image/upload/f_webp,q_auto/b_white,c_pad,dpr_2.0,h_500,w_520/f_auto,q_auto/v1632406339/fmt73rmr3ieyb41wajdb.png",
            price: "699 $"
        },
        {
            id: 3,
            brand_name: "i phone 13",
            img_url: "http://geniusmobile.lk/wp-content/uploads/2019/09/black-11.jpg",
            price: "599 $"
        },
        {
            id: 4,
            brand_name: "i phone 13",
            img_url: "http://geniusmobile.lk/wp-content/uploads/2019/09/black-11.jpg",
            price: "599 $"
        },
        {
            id: 5,
            brand_name: "i phone 13",
            img_url: "http://geniusmobile.lk/wp-content/uploads/2019/09/black-11.jpg",
            price: "599 $"
        },
    ])
    return (
        <DeviceContext.Provider value={{ devices, setDevices }}>{children}</DeviceContext.Provider>
    )
}

export default DeviceProvider