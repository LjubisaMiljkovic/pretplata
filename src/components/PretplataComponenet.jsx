import React from 'react'
import { Link } from 'react-router-dom'
import { FaEuroSign } from "react-icons/fa";
import { useSelector } from 'react-redux';


 

function PretplataComponenet() {


  const {subscription} = useSelector((state) => state.paketStore)
 
  return (
    <div className='container mt-0'>
           
      {/* kurs n eur */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 mx-40  w-full'>
      <div className='col-span-2 mt-0 '>
            <div className='bg-yellow-300 mb-5 w-[80px]'>
            <h1 className='flex mt-5'><span className='text-[40px] text-white' >{subscription}</span >
            <span className='text-[30px] text-white py-4'><FaEuroSign/></span></h1> 
            </div>
        {/* description      */}
      <div className=' bg-white rounded-2xl ml-[0px] text-left'><h1 className='text-[36px] font-bold mx-10 mb-10'>Sadrzaj paketa</h1>
            <p className='text-[20px] mx-10'>Sa ovom pretplatom aktivirate <span className='font-bold'>svaki kurs</span> na sajtu mesec dana.</p>
            <p className='text-[20px] mx-10'>Dok traje pretplata <strong>novi kurs</strong> koji izadje će takodje biti aktiviran.</p>
              <div className='container mx-auto flex justify-end'>
                <Link to='/paypackage'
                className='bg-yellow-300 px-[32px] py-[16px] rounded-[30px] me-8 mb-[10px] font-bold items-end hover:bg-red-700 hover:text-white duration-300'>
                  Vidi placanja
                </Link>
              </div>
      </div>
         </div>
      <div className='text-center mt-[240px]'>
             {/* kursevi */}
            <div className='bg-slate-300 w-[400px] h-[400px] justify-center'>
                <h1 className='font-[16px]'>Kursevi</h1>
            </div>
            <div className='bg-slate-300 w-[400px] h-[400px] justify-center mt-10'>
                <h1 className='font-[16px]'>Kursevi</h1>
            </div>
      </div>
      </div>

   </div>
   
  
  )
}

export default PretplataComponenet