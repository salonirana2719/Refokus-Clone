import React from 'react'
import Product from './Product'

const Products = () => {

  var productData = [
    {title: "arqutel", description: "simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the remaining standard "    ,live: true , case: false, },
    {title: "TTR", description: " simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the remaining standard ",live: true , case: false, },
    {title: "YIR 2022", description: "simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the remaining standard ",live: true , case: true, },
    {title: "Yahoo!", description: "simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the remaining standard ",live: true, case: true, }


  ];


  return (
    <div className=' bg-zinc-900'>
      {productData.map((elem, index)=><Product elem = {elem}/> )}
        
    </div>
  )
}

export default Products