import React, { createContext, useContext, useEffect} from 'react'
import { useSelector } from 'react-redux'
import { UserSlicePath } from '@/redux/slice/userSlice'
import { API } from '@/utils/axiosClient.js'
import { toast } from 'react-toastify'


const AuthContext = createContext()

export const useAuthContext = () => useContext(AuthContext)

export const AuthContextprovider = ({children}) => {

  const user = useSelector(UserSlicePath)

  const fetchUser= async()=>{
        try{
          const token = localStorage.getItem("token") || " "
          if(!token) return
          const response = await API.get("/auth/profile",{
            headers:{
              'Authorization':`Bearer ${token}`
            }
          })
          const data = await response.data
          console.log(data)
         } catch(error){
          toast.error(error.response.data.detail || error.message)
         }

  }

  useEffect( () =>{
    fetchUser()
  },[])

  return(
    <AuthContext.Provider value={user}>
      {children}
    </AuthContext.Provider>
  )

}