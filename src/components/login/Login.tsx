import React, { useEffect, useState } from "react";
import { LoginUser } from 'assets'
import { Link, useNavigate } from "react-router-dom";
import { onLoginUser } from "redux/actions/userAction";
import { useDispatch, useSelector } from "react-redux";
import { getUserData } from "redux/reducers/userReducer";
import { useForm } from "hooks";

const Login: React.FC = () => {

  // init
  const navigate = useNavigate()
  const userCredentials = useSelector(getUserData)
  const dispatch = useDispatch()
  const [inputState, setInputState] = useState({
    login_email: '',
    login_password: ''
  })

  // dip
  useEffect(() => {
    if (userCredentials?.data?.auth) navigate('/home')
  }, [navigate, userCredentials?.data?.auth])

  const { handleChange, errors, isValidForm } = useForm(inputState, setInputState)

  // submit form
  const handleLogin = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    if (isValidForm()) {
      dispatch(onLoginUser({
        email: inputState.login_email,
        password: inputState.login_password
      }))
    }
  }


  return (
    <>
      {userCredentials?.defaultStates?.isLoading && <div className='loader-wapper'><div className="lds-facebook"><div></div><div></div><div></div></div></div>}
      <div className="flex justify-center items-center absolute h-full w-full">
        <div className="relative">
          <div className="rounded-full bg-gray-200 w-32 h-32 mx-auto flex items-center justify-center loginuserimg absolute">
            <img src={LoginUser} alt="login user" className="w-28" />
          </div>
          <form onSubmit={handleLogin} className="w-100 p-5 md:p-10 shadow-sm bg-white">
            <label htmlFor="email" className="sr-only">Email</label>
            <input type="email" name="login_email" placeholder="Email*" onChange={handleChange} className="w-full focus:outline-0 px-4 py-2 rounded mt-10 border-slate-200 border-2" />
            <span className="text-red-700 h-0.5 block text-xs">{errors.login_email}</span>
            <br></br>
            <label htmlFor="password" className="sr-only">Password</label>
            <input type="password" name="login_password" placeholder="Password*" onChange={handleChange} className="w-full focus:outline-0 px-4 py-2 rounded border-slate-200 border-2" />
            <span className="text-red-700 h-0.5 block text-xs">{errors.login_password}</span>
            <br></br>
            <button type="submit" className="px-8 py-2 text-center text-white bg-indigo-500 rounded hover:bg-indigo-800 w-full duration-100">Sign in</button>
            <p className="text-sm mt-5 text-center">Create an account <Link to="/signup" className="text-blue-700">Sign up</Link></p>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
