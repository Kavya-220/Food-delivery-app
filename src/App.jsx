import React, { useState } from 'react'
import { NavBar } from './components/navbar/NavBar'
import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/home/Home'
import { PlaceOrder } from './pages/PlaceOrder/PlaceOrder'
import { Footer } from './components/Footer/Footer'
import { LoginPopup } from './components/LoginPopup/LoginPopup'
import { Cart } from './pages/Cart/Cart'
import SearchResults from './pages/SearchResults/SearchResults'

export const App = () => {

  const[showLogin, setShowLogin] = useState(false)

  return (
    <>
    {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
    <div className='app'>
      <NavBar setShowLogin={setShowLogin}/>
      <Routes>
        <Route path='/' element={<Home/>}/>
         <Route path='/cart' element={<Cart/>}/>
        <Route path='/order' element={<PlaceOrder/>}/>
        <Route path="/search" element={<SearchResults/>} />
        </Routes>
    </div>
   <Footer />
</>
  )
}
export default App
