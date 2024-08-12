import React from 'react'
import Strip from './Strip'

const Stripe = () => {
var data = [
    {name: "cssDesign", number:"48"},
    {name: "No-code", number:"2"},
    {name: "awords", number:"11"},
    {name: "ccDesign", number:"48"},  
    {name: "nocode", number:"11"},  
    {name: "Css code", number:"2"},  
]


  return (
    <div className='flex items-center mt-20'>
        {data.map((elem, index)=>(
                <Strip key={index} val ={elem}/>
        )   
        )}

    </div>
  )
}

export default Stripe