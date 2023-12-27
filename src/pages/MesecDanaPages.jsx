import React from 'react'
import PretplataComponenet from '../components/PretplataComponenet'
import { FaEuroSign } from "react-icons/fa";

function MesecDanaPages() {
  let time=30;
  return (
    <div className='mx-0 px-0 bg-slate-100'>
      <div className='bg-yellow-300 sm:ml-[100px] md:ml-[247px] w-[80px]'>
      <h1 className='flex items-center'><span className='text-[40px] text-white' >{time}</span >
      <span className='text-[30px] text-white py-4'><FaEuroSign/></span></h1> 
      </div>
        <PretplataComponenet/>
    </div>
  )
}

export default MesecDanaPages