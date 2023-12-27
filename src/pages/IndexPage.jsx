import React from 'react'
import { Link } from 'react-router-dom'

//icons
import { FaEuroSign } from "react-icons/fa";
import { AiOutlinePlaySquare } from "react-icons/ai";


function IndexPage() {
  return (
    <div>
      <div className='container mt-[80px] mx-auto'>
        <h1 className='text-[42px] font-bold text-center'><span className='text-yellow-500'>Upis</span> polaznika u toku</h1>
        <h1 className='text-[76px] font-bold text-center'>Live kursevi i <span className='text-yellow-500'>FullStack</span>Obuka</h1>
        <h1 className='text-center font-bold'>HTML/CSS/JS/React/Node/MongoDB/React Native</h1>
      </div>

      <div className='container flex mx-auto w-[100%vh] mt-[100px] h-[350px]'>
          <div className='bg-red-600 w-[33%]'>
          <Link to='/mesec_dana_paket' >
            <h1 className='text-[30px] font-bold underline mt-[15px] text-white text-center'>
            Junior member</h1>
          </Link>  
            <div className='container flex justify-center items-center'>
              <h1 className='text-[60px] font-bold mt-[15px] text-white flex items-center'>
              30 
              <span><FaEuroSign/></span></h1>
            </div>
            <h2 className='text-[20px] font-bold mt-[15px] text-white text-center'>Aktiviraj sve kurseve <span className='bg-[#f32b5af5] py-2'>mesec dana</span></h2>
        <div className='container mx-auto flex justify-center items-center'>
        <Link to='/mesec_dana_paket'
          className='bg-yellow-300 px-[64px] py-[16px] mt-[30px] rounded-[30px] font-bold flex items-center hover:bg-red-700 hover:text-white duration-300'>
          Vidi više 
          <div className='items-bottom'><AiOutlinePlaySquare/></div>
          </Link>
        </div>
        </div>

          <div className='bg-yellow-300 w-[33%]'>
          <Link to='/sest_meseci_paket'>
          <h1 className='text-[30px] font-bold underline mt-[15px] text-white text-center '
          >Medior member</h1>
          </Link>
          <div className='container flex justify-center items-center'>
              <h1 className='text-[60px] font-bold mt-[15px] text-white flex items-center'>
              50 
              <span><FaEuroSign/></span></h1>
            </div>
            <h2 className='text-[20px] font-bold mt-[15px] text-white text-center'>Aktiviraj sve kurseve <span className='bg-[#f32b5af5] py-2'>6 meseci</span></h2>
        <div className='container mx-auto flex justify-center items-center'>
          <Link to='/sest_meseci_paket' className='bg-red-600 px-[64px] py-[16px] mt-[30px] rounded-[30px] font-bold flex items-center hover:text-white duration-300'>
            Vidi više 
          <div className='items-bottom'><AiOutlinePlaySquare/></div>
          </Link>
        </div>
          </div> 
            
          <div className='bg-green-500 w-[33%]'>
          <Link to='/godinu_dana_paket'>
          <h1 className='text-[30px] font-bold underline mt-[15px] text-white text-center'
          >Senior member</h1>
          </Link>
          <div className='container flex justify-center items-center'>
              <h1 className='text-[60px] font-bold mt-[15px] text-white flex items-center'>
              80 
              <span><FaEuroSign/></span></h1>
            </div>
            <h2 className='text-[20px] font-bold mt-[15px] text-white text-center'>Aktiviraj sve kurseve <span className='bg-[#f32b5af5] py-2'>12 meseci</span></h2>
        <div className='container mx-auto flex justify-center items-center'>
          <Link to='/godinu_dana_paket' className='bg-yellow-300 px-[64px] py-[16px] mt-[30px] rounded-[30px] font-bold flex items-center hover:bg-red-700 hover:text-white duration-300'>
            Vidi više 
          <div className='items-bottom'><AiOutlinePlaySquare/></div>
          </Link>
        </div>
        </div>
      </div>
    </div>
  )
}

export default IndexPage