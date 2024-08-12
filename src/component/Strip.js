import React from 'react'

const Strip = ({val, key}) => {
  return (
    <div key={key}  className='w-[16.66%] px-10 py-3  border-t-[1px] border-b-[1px] border-r-[1px] border-zinc-700 gap-20 flex '>
<span>{val.name}</span>
<span className='font-semibold'>{val.number}</span>

    </div>
  )
}

export default Strip