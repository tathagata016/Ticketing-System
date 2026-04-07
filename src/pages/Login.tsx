import React, { useState } from 'react'
import Input from '../components/Input'
import { useNavigate } from 'react-router-dom'

function Login() {
    const[email,setEmail]=useState<string>("")
    const[password,setPassword]=useState<string>("")
    const navigate=useNavigate();

    const handleLogic=(e:React.FormEvent<HTMLFormElement>)=>{
      e.preventDefault();
      if(!email && !password)
        return;
    
    localStorage.setItem("isAuthenticated","true")
    navigate('/Dashboard')
}

    return (
       
    <div className='"min-h-screen flex mt-50 justify-center bg-gray-100'>
     <div className='"bg-red-500 p-8 rounded shadow-md w-80'>
      <h2 className='text-2xl font-bold mb-6 text-center'>Login</h2>
       <form onSubmit={handleLogic}>
      <div className='mb-4'>
      <Input
       type="email"
       placeholder='email'
       value={email}
       onChange={e=>setEmail(e.target.value)}
      />
      </div>
      
      <div className='mb-6'>
       <Input
       type="password"
       placeholder='password'
       value={password}
       onChange={e=>setPassword(e.target.value)}
      />

       </div>
      <button type='submit' className='w-full bg-green-600 text-white py-2  rounded hover:bg-green-700 cursor-pointer '>
        Submit</button>
      </form>
      
      </div> 
    </div>
  )
}

export default Login
