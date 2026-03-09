import clsx from "clsx";
import React from 'react'
import { CgSpinner} from 'react-icons/cg'
import { FaCircleArrowRight } from 'react-icons/fa6'

const AuthButton = ({
    isLoading = false,
    text,
    className
}) => {
  return (
    <>
       <button type={isLoading?'button':'submit'} disabled={isLoading} className={clsx("flex p-3 w-full y-2 bg-blue-500 text-white rounded outline-none gap-x-1 disabled:cursor-no-drop items-center justify-center font-bold",
        className)}> <span>{text}</span>{
            isLoading ? <CgSpinner className="animate-spin text-xl"/>: <FaCircleArrowRight className="text-xl"/>
        }</button>
    </>
  )
}

export default AuthButton
