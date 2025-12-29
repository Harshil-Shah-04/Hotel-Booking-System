import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'

const App = () => {
    
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            
            <main className="flex-grow">
                <div>
                    <Routes>
                        <Route path='/' element={<Home/>} />
                    </Routes>
                </div>
            </main>
            
            <Footer />
        </div>
    )
}

export default App
