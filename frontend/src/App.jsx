import React from 'react'
import Navbar from './components/Navbar'

const App = () => {
  
  // const isOwnerPath = useLocation().pathname.includes("owner");
  
  return (
    <div>
      {/* {!isOwnerPath && <Navbar />} */}
      <Navbar />
    </div>
  )
}

export default App