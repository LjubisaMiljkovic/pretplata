import React from 'react'
import { Link } from 'react-router-dom'

// icons

import { HiOutlineMailOpen } from "react-icons/hi";
import { FaRegUser } from "react-icons/fa";
import { GiMoebiusTriangle } from "react-icons/gi";


function NavbarComponenet() {
  return (
    <div className=''>
        <div className="conatiner mx-auto bg-mainBlue h-[90px] flex justify-between items-center">
           <div className='container flex ml-[150px] justify-between w-full'>
              <div className='flex'>
                  <div className='sm px-[50px] flex justify-center items-center'>
                  <h1 className='text-white flex'>Online škola programiranja</h1>
                  </div>
                  <div className='flex justify-center items-center'>
                    <HiOutlineMailOpen className='text-white text-2xl'/><span className='text-white  cursor-pointer text-[16px]'>mail adresa</span>
                  </div>
              </div>
              <div className='flex justify-end items-center pl-[150px] mt-0 '> 
                  <Link to='' className='text-white text-[16px] ml-[100px]'>Registruj se</Link>
                  <Link to='/godinu_dana_paket' className='bg-yellow-300 px-[44px] py-[10px] ml-[20px] rounded-[30px] font-bold flex  hover:bg-red-700 hover:text-white duration-300'>
                  <div className='items-bottom'><FaRegUser /></div>
                  Uloguj se 
                  </Link>
              </div>

           </div>
        </div> 
        <div className='mt-auto'>
       
          <div className='container mx-auto h-[100px] flex items-center '>
              <div>
                <div className='flex justify-center place-items-start mt-0 ml-0 '>
                      <Link to='/'><GiMoebiusTriangle className='text bg-red-700 text-[40px]' /></Link>
                </div>
              </div>
              <div className='flex pl-[500px] justify-center items-center'>
                <ul className='flex gap-10'>
                    <Link to='/'>Pocetna</Link>
                    <li>Kursevi</li>
                    <li>Blog</li>
                    <li>Kontakt</li>
                    
                </ul>
            </div>
          </div>
        </div>
    </div>

  )
}

export default NavbarComponenet
