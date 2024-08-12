import React from 'react'
import Navbar from './component/Navbar'
import Button from './component/Button'
import Work from './component/Work'
import Stripe from './component/Stripe'
import Products from './component/Products'

const App = () => {
  return (
    <div className='w-full h-screen bg-zinc-900 text-white  '>
      <Navbar/>
      {/* <Button/> */}
      < Work/>
      <Stripe/>
      <Products/>
    </div>
  )
}

export default App