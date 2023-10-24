import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'; // Make sure to import axios

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      //throw Error("Error");
      // Replace 'URL' with the correct API URL
      //console.log(username);
      //console.log(password);
      //URL+'/api/auth/login'
      const res = await axios.post("http://localhost:5000/api/auth/login", { username, password }).then((respose)=>{console.log(respose)});
      console.log("Login successful!");
      // Correct the route path to "/Store" if that's where you want to navigate.
      navigate("/store");
    } catch (err) {
      setError(true);
      console.log(err);
    }
  };

  return (
    <div className="bg-cover bg-center h-screen flex items-center" style={{ backgroundImage: 'url("public/images/img01.jpg")' }}>
      <div className="bg-[rgba(33,33,33,0.75)] p-8 ml-20 mx-auto rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold text-center text-white mb-4">Let's Begin the Journey!</h2>
        <form className="space-y-4">
          <div>
            <label  className="block text-sm font-medium text-white">Username</label>
            <input onChange={(e) => setUsername(e.target.value)} type="text"  name="username" className="w-full px-3 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
          </div>
          <div>
            <label  className="block text-sm font-medium text-white">Password</label>
            <input onChange={(e) => setPassword(e.target.value)} type="password"  name="password" className="w-full px-3 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
          </div>
          <div>
            <button onClick={handleLogin} type="button" className="w-full inline-flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gray-900 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900">
              Sign In
            </button>
            {error && <h3 className='text-red-600 text-sm'>Something went wrong !</h3>}
          </div>
        </form>
        <div className="text-center mt-4 text-white">
          <p>Don't have an account? <Link to="/Signup" className="text-blue-500 hover:underline">Sign up</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
