import React from 'react'
import { CgNotes } from "react-icons/cg";
const CardDash = ({label="-",number="000"}) => {
  return (
    <div className='w-64 px-5 py-3 h-24  bg-[var(--primary-color)] shadow-md  rounded-lg text-white flex flex-col justify-evenly'>
        <div className='flex w-[100%] items-center justify-between'>
        <p className='font-semibold'>{label}</p>
        <CgNotes className='text-2xl'/>
        </div>  
        <div className='flex items-center justify-between'>
        <h1 className='text-2xl font-bold'>{number}</h1>  
        {/* <p className='text-green-500'>+11.02%</p>   */}
        </div>  
        </div>
  )
}

export default CardDash