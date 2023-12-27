import React from 'react'
import { Link } from 'react-router-dom'


function PretplataComponenet() {
  return (
    <div className='container mx-0'>
   
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mx-40 place-items-center w-full'>
          <div className='col-span-2'>
              <div className=' bg-white rounded-2xl my-[20px]  text-left'><h1 className='text-[36px] font-bold mx-10 mb-10'>Sadrzaj paketa</h1>
                <p className='text-[20px] mx-10'>Sa ovom pretplatom aktivirate <span className='font-bold'>svaki kurs</span> na sajtu mesec dana.</p>
                <p className='text-[20px] mx-10'>Dok traje pretplata <strong>novi kurs</strong> koji izadje će takodje biti aktiviran.</p>
                <div className='container mx-auto flex justify-end'>
                <Link to=''
                className='bg-yellow-300 px-[32px] py-[16px] rounded-[30px] me-8 mb-[10px] font-bold items-end hover:bg-red-700 hover:text-white duration-300'>
                  Vidi placanja
                </Link>
                </div>
              </div>
          </div>
          <div className='text-center'>
            <h1 className='font-[16px]'>Kursevi</h1>
          </div>
      </div>

   </div>
   

        
  
  
  )
}

export default PretplataComponenet