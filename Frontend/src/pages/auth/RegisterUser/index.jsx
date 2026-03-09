import React, { useState } from 'react'
import Logo from '@/components/UI/Logo'
import AuthButton from '@/components/UI/AuthButton'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { Formik, Form, Field, ErrorMessage} from 'formik'
import * as yup from 'yup'
import { ROLE_TYPE } from '@/constant/auth.constant'
import { Link } from 'react-router-dom'
import { API } from '@/utils/axiosClient'
import { toast } from 'react-toastify'



const RegisterUser = () => {

    const [ isLoading, setisLoading] = useState(false)
    const [ isHide, setisHide ] = useState(true)


    const validationSchema = yup.object({
        name:yup.string().required("name is required"),
        email:yup.string().required("Email is required"),
        password:yup.string().required("Password is required").min(6, " Password must be greater than 6 characters"),
        role:yup.string().required("Role is required").oneOf(Object.values(ROLE_TYPE),"Choose a valid role")
    })

     const onSubmitHandler = async(values, helpers) => {
           
                   try {
                       setisLoading(true)
                       const response = await API.post('/auth/register', values)
                       const token = response.data.token                     
                       localStorage.setItem("token", token)
                       console.log("Success:", response.data);
                       toast.success("Registration Sucessfully Done")

                       helpers.resetForm();
                   } catch (error) {
        
                       const errorMsg = error.response?.data?.detail || "Something went wrong";
                       toast.error(errorMsg)
                   }finally{
                       setisLoading(false)
                   }
             }
   

    const initialValues ={
        name:'',
        email:'',
        password:'',
        role:ROLE_TYPE.BUYER
    }

  return (
    <>
    <Formik onSubmit={onSubmitHandler} validationSchema={validationSchema} initialValues={initialValues} >
        <Form className='min-h-[90vh] flex items-center justify-center '>
            <div className='lg:w-1/2 w-[96%] mx-auto lg:1/2 xl:w-1/3 p-8 rounded-lg border border-gray-100 shadow'>
                <div className='mb-3 w-full flex items-center justify-center'>
                    <Logo className={'mx-auto block'}/>
                </div>
                <div className='mb-3'>
                    <label htmlFor='name'>Name<span className='text-red-500'>*</span></label>
                        <Field id='name' name='name' type='text' className='w-full py-3 px-2 rounded outlinine-none bg-gray-100 border border-gray-200' placeholder="Enter Your Name"/>
                        <ErrorMessage name="name" component="div" className="text-red-500 text-xs" components="p" />
                </div>
                <div className='mb-3'>
                    <label htmlFor='email'> Email ID<span className='text-red-500'>*</span></label>
                        <Field id='email' name='email' type='text' className='w-full py-3 px-2 rounded outlinine-none bg-gray-100 border border-gray-200' placeholder="Enter Your Email ID"/>
                        <ErrorMessage name="email" component="div" className="text-red-500 text-xs" components="p" />
                </div>
                <div className='mb-3'>
                    <label htmlFor='password'>Password<span className='text-red-500'>*</span></label>
                    <div className='w-full  rounded outline-none bg-gray-50 border border-gray-200 flex'>
                    <Field id='password' name='password' type={isHide? 'password' : 'text'} className='w-full px-2 py-3 rounded outline-none bg-gray-100 border border-gray-200' placeholder="Enter Your Password"/>
                    <button type='button' onClick={ () =>setisHide(!isHide) } className='px-2'>
                        {isHide?<FaEye/>:<FaEyeSlash/>}
                    </button>
                    </div>
                    <ErrorMessage name="password" component="div" className="text-red-500 text-xs" components="p" />

                </div>
                <div className='mb-3'>
                    <label htmlFor='role'>Role<span className='text-red-500'>*</span></label>
                    <div className='w-full  rounded outline-none bg-gray-50 border border-gray-200 flex'>
                    <Field id='role' as='select' name='role' className='w-full px-2 py-3 rounded outline-none bg-gray-100 border border-gray-200' placeholder="Enter Your Password">
                       {
                        Object.values(ROLE_TYPE).map( 
                            (curr, i) =>{
                                return <option value={curr} key={i} className='capitalize'>{curr}</option>
                            }
                        )
                       }
                       
                        
                    </Field>
                    </div>
                    <ErrorMessage name="role" component="div" className="text-red-500 text-xs" components="p" />

                </div>
                <div className='mt-3'>
                    <AuthButton isLoading={isLoading} text={'Register'} />
                </div>

                <div className='mb-3 mt-3 flex justify-center items-center gap-x-6'>

                        <div className='w-full h-[0.1000px] bg-gray-400'></div>
                        <div className=''>OR</div>
                        <div className='w-full h-[0.1000px] bg-gray-400'></div>


                </div>

                <div className='mb-3 mt-3 flex  justify-center items-center'>
                        <p className=''>
                            Already have An Account ? <Link to={'/login'} className='text-blue-400'>Login</Link>
                        </p>
                </div>

            </div>

        </Form>
    </Formik>
    </>
  )
}

export default RegisterUser