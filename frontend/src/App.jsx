import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'

const App = () => {
    
    return (
        <div>
            <Navbar />
            <div>
                <Routes>
                    <Route path='/' element={<Home/>} />
                </Routes>
            </div>
            <Footer />
        </div>
    )
}

export default App
