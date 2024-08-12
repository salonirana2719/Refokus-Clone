import React from 'react'
import { IoMdReturnRight } from "react-icons/io";

const Button = ({title = "Get started"}) => {
  return (
    <div className='min-w-40 px-3 py-2 bg-slate-50 rounded-full text-black flex items-center justify-between max-w-fit'>
<span className='text-sm font-medium'>{title}</span>
<IoMdReturnRight/>
    </div>
  )
}

export default Button