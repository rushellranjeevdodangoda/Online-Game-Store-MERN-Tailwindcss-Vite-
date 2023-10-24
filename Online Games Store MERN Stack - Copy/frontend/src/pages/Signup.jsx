import { useState } from "react";
import axios from 'axios'
import {URL} from '../url'
import { useNavigate } from "react-router-dom";





const Signup = () => {

  const [username,setUserName]=useState("")
  const [email,setEmail]=useState("")
  const [telephone,setTelephone]=useState("")

  const [password,setPassword]=useState("")
  const [error,setError]=useState(false)
  const navigate=useNavigate()

  const handleSignup=async()=>{
    try{
      const res=await axios.post(URL+"/api/auth/register",{username,email,telephone,password})
      console.log(res.data)
      setUserName(res.data.username)
      setEmail(res.data.email)
      setTelephone(res.data.telephone)
    
      setPassword(res.data.password)
      setError(false)
      navigate("/") 
    }
    catch(err){
      setError(true)
      console.log(err)
    }
  }


  return (
    <div className="bg-cover bg-center h-screen flex items-center" style={{ backgroundImage: 'url("/images/signup.jpg")' }}>
      <div className="bg-[rgba(33,33,33,0.75)] p-8 ml-20 mx-auto rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold text-center text-white mb-4">Let's get you Signed Up</h2>
        <form className="space-y-4">
          <div>
            <label  className="block text-sm font-medium text-white">Enter your username</label>
            <input onChange={(e)=>setUserName(e.target.value)} type="text"  name="username" className="w-full px-3 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
          </div>
          <div>
            <label className="block text-sm font-medium text-white">Email Address</label>
            <input onChange={(e)=>setEmail(e.target.value)} type="text" name="email" className="w-full px-3 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
          </div>
          <div>
            <label className="block text-sm font-medium text-white">Telephone Number</label>
            <input onChange={(e)=>setTelephone(e.target.value)} type="text" name="telephone" className="w-full px-3 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
          </div>
       
          <div>
            <label className="block text-sm font-medium text-white">Create a new password</label>
            <input onChange={(e)=>setPassword(e.target.value)} type="password"  name="password" className="w-full px-3 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
          </div>
          <div>
            <div onClick={handleSignup} type="submit" className="w-full inline-flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gray-900 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900">
              Sign Up
            </div>{error && (
            <p className="text-red-500 text-sm mt-2">Something went wrong</p>
          )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
