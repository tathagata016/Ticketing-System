import React from 'react'
import { Navigate } from 'react-router-dom'


interface Props{
    children:React.ReactNode // The component can accept anything that React can render inside it eg:JSX, string ,null, boolean ,number 
}

function ProtectedRoute({children}:Props) {
  const isAuthenticated= localStorage.getItem("isAuthenticated")
  if(!isAuthenticated)
   return <Navigate to='/' replace/>
  return (
    <>
     {children} 
    </>
  )
}

export default ProtectedRoute
