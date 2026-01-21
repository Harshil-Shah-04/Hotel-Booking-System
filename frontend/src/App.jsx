import { Route, Routes, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Rooms from './pages/Rooms'
import RoomDetails from './pages/RoomDetails'
import Bookings from './pages/Bookings'
import HotelRegistration from './components/HotelRegistration'
import Layout from './pages/hotel-owner/Layout'

const App = () => {
    
    const isOwnerPath = useLocation().pathname.includes("/owner");
    
    return (
        <div className="min-h-screen flex flex-col">
            {!isOwnerPath && <Navbar/>}
            {false && <HotelRegistration/>}
            
            <main className="flex-grow">
                <div>
                    <Routes>
                        <Route path='/' element={<Home/>} />
                        <Route path='/rooms' element={<Rooms/>} />
                        <Route path='/rooms/:id' element={<RoomDetails/>} />
                        <Route path='/my-bookings' element={<Bookings/>} />
                        <Route path='/owner' element={<Layout/>}></Route>
                    </Routes>
                </div>
            </main>
            
            <Footer/>
        </div>
    )
}

export default App
