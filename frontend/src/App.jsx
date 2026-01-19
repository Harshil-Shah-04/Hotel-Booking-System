import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Rooms from './pages/Rooms'
import RoomDetails from './pages/RoomDetails'

const App = () => {
    
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            
            <main className="flex-grow">
                <div>
                    <Routes>
                        <Route path='/' element={<Home/>} />
                        <Route path='/rooms' element={<Rooms/>} />
                        <Route path='/rooms/:id' element={<RoomDetails/>} />
                    </Routes>
                </div>
            </main>
            
            <Footer />
        </div>
    )
}

export default App
