import React from 'react'
import HotelCard from './HotelCard'
import { roomsDummyData } from '../assets/assets'

const Featured = () => {
    return (
        <div>
            <div>
                {roomsDummyData.slice(0,4).map((room, index)=>(
                    <HotelCard key={room._id} room={room} index={index}/>
                ))}
            </div>
        </div>
        
    )
}

export default Featured
