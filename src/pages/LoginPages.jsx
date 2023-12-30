import { useFormik } from 'formik'
import React from 'react'

function LoginPages() {

    const formik = useFormik({
        initialValues:{

        },
        //validation
        onSubmit: (values) => {
            console.log(values);
        }
    })
  return (
    <div>
       <h2 className='text-center my-[30px] text-blue-800 font-bold uppercase text-3xl '>Loggin form</h2>

        <form onSubmit={formik.handleSubmit} className='border-2 border-yellow-500 w-[50%] mx-auto p-[20px] rounded-2xl flex flex-col items-center justify-center gap-5'>
            {/*username email*/}
            <div className='flex flex-col'>
                <labe className='text-gray-300 text-[15px] '>Username-email</labe>
                <input type="text"
                placeholder='Insert email'
                className='border border-blue-800 rounded-md px-[16px] py-[8px]' />
            </div>
            {/*password*/}
            <div className='flex flex-col'>
                <label className='text-gray-300 text-[15px] '>Password</label>
                <input type="text"
                placeholder='Insert password'
                className='border border-blue-800 rounded-md px-[16px] py-[8px]' />
            </div>
            <button type='submit'
            className='bg-yellow-500 text-white px-[16px] py-[8px] rounded-xl'>Login Me</button>
        </form>
    


    </div>
  )
}

export default LoginPages