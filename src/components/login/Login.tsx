import React, { useState } from "react";
import { loginProps } from "./login.types";
import { LoginUser } from 'assets'
import { useForm } from 'hooks'

const Login: React.FC<loginProps> = () => {

  const [state] = useState({
    email: '',
    password: ''
  })

  //Custom hook for form validation
  const { handleChange, errors, isValidForm } = useForm(state);

  const handleLogin = (e: any) => {
    e.preventDefault();
    if (isValidForm()) {
      e.target.reset()
      alert('done')
    }
  }

  return (
    <div className="flex justify-center items-center absolute h-full w-full">
      <div className="relative">
        <div className="rounded-full bg-gray-200 w-32 h-32 mx-auto flex items-center justify-center loginuserimg absolute">
          <img src={LoginUser} alt="login user" className="w-28" />
        </div>
        <form onSubmit={handleLogin} className="w-100 p-5 md:p-10 shadow-sm">
          <label htmlFor="email" className="sr-only">Email</label>
          <input type="email" name="email" placeholder="Email*" onChange={handleChange} className="w-full focus:outline-0 px-4 py-2 rounded mt-10 border-slate-200 border-2" />
          <span className="text-red-700 h-0.5 block text-xs">{errors.email}</span>
          <br></br>
          <label htmlFor="password" className="sr-only">Password</label>
          <input type="password" name="password" placeholder="Password*" onChange={handleChange} className="w-full focus:outline-0 px-4 py-2 rounded border-slate-200 border-2" />
          <span className="text-red-700 h-0.5 block text-xs">{errors.password}</span>
          <br></br>
          <button type="submit" className="px-8 py-2 text-center text-white bg-indigo-500 rounded hover:bg-indigo-800 w-full duration-100">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
