import { useFormik } from 'formik'
import React, { useEffect } from 'react'
import * as yup from 'yup'
import IndexPage from './IndexPage'


function RegisterPages() {

    const formik= useFormik({
        initialValues: {
            firstName:'',
            lastName:'',
            email: '',
            password:'',
            passwordConfirmation:'',
        },
        validationSchema: yup.object({
            firstName: yup.string().required('First name requred'),
            lastName: yup.string().required('Last name requred'),
            email: yup.string().required('Email name requred'),
            password: yup.string().required('Password name requred'),
            passwordConfirmation:  yup.string()
            .oneOf([yup.ref('password'), null], "Passwords must match")
            .required("Required"),
           
        }),
        onSubmit: (values) => {
            
            if (values.password===values.passwordConfirmation){
                localStorage.setItem('user', JSON.stringify(values))
                formik.resetForm();
               
            }else
                                  
            formik.resetForm();
            
        }
    })

 useEffect(()=>{<IndexPage/>},[formik.password])

const showError = (name) => formik.errors[name] && formik.touched[name] && formik.errors[name]

  return (
    <div className='bg-[#4cbe9e] flex flex-col justify-center items-center'>
        <h2>Register Form</h2>
    <div className='my-[100px] items-center '>
        <form onSubmit={formik.handleSubmit} className='flex flex-col gap-3 w-[400px]'>
            <div className='flex flex-col'>
                <label>Ime:<span className='text-[14px] text-red-600'>{showError('firstName')}</span></label>
                <input type="text"
                name="firstName"
                value={formik.values.firstName}
                onChange={formik.handleChange}
                placeholder='Insert name' className='p-[10px] rounded-lg border-none bg-green-900 text-white placeholder:text-[#ddd]'/>
            </div>
            <div className='flex flex-col'> 
                <label>Pprezime:<span className='text-[14px] text-red-600'>{showError('lastName')}</span></label>
                <input type="text"
                name="lastName"
                value={formik.values.lastName}
                onChange={formik.handleChange}
                placeholder='Insert name'  className='p-[10px] rounded-lg border-none bg-green-900 text-white placeholder:text-[#ddd]'/>
            </div>
            <div className='flex flex-col'>
                <label>Email:<span className='text-[14px] text-red-600'>{showError('email')}</span></label>
                <input type="email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                placeholder='Insert name'  className='p-[10px] rounded-lg border-none bg-green-900 text-white placeholder:text-[#ddd]'/>
            </div>
            <div className='flex flex-col'>
                <label>Lozinka:<span className='text-[14px] text-red-600'>{showError('password')}</span></label>
                <input type="text"
                name='password'
                value={formik.values.password}
                onChange={formik.handleChange}
                placeholder='Insert name'  className='p-[10px] rounded-lg border-none bg-green-900 text-white placeholder:text-[#ddd]'/>
            </div>
            <div className='flex flex-col'>
                <label>Potvrda lozinke:<span className='text-[14px] text-red-600'>{showError('passwordConfirmation')}</span></label>
                <input type="text"
                name='passwordConfirmation'
                value={formik.values.passwordConfirmation}
                onChange={formik.handleChange}
                placeholder='Confirmation password'  className='p-[10px] rounded-lg border-none bg-green-900 text-white placeholder:text-[#ddd]'/>
            </div>

            <button type='submit' className='px-[16px] py-[8px] bg-green-400 rounded-lg border-none text-white'>Registruj se</button>
        </form>
      
    </div>
    </div>
  )
}

export default RegisterPages