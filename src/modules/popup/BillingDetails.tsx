import { CloseIcon } from 'assets'
import { useForm } from 'hooks'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { userBillingDetails } from 'redux/actions/userAction'

export default function BillingDetails({
  showPopUp,
  setshowPopUp
}: {
  showPopUp: boolean,
  setshowPopUp: (params: boolean) => void
}) {

  // init
  const dispatch = useDispatch()
  const [inputState] = useState({
    card_number: '',
    cvc: '',
    phone: '',
    address: ''
  })

  const { handleChange, errors, isValidForm, initialState, isEdit } = useForm(inputState)

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault()
    if (isValidForm()) {
      dispatch(userBillingDetails({
        // @ts-ignore
        email: JSON.parse(localStorage.getItem('user_agent')).email,
        billingDetails: initialState
      }))
      setshowPopUp(false)
    }
  }

  return (
    <div className={`${showPopUp ? 'block' : 'hidden'} flex justify-center items-center fixed h-full w-full bg-white z-10 fixed left-0 top-0 bg-slate-600`}>
      <div className="relative bg-white">
        <form onSubmit={handleSubmit} className="w-100 p-5 md:p-10 shadow-sm">
          <p className="text-xs text-blue-600">Add billing details</p>
          <div className="flex items-center justify-end"><img src={CloseIcon} alt="close" title="Close" className="mb-5 h-4 cursor-pointer" onClick={() => setshowPopUp(false)} /></div>
          <label htmlFor="address" className="sr-only">Address</label>
          <input type="text" name="address" placeholder="Address*" onChange={handleChange} className="w-full focus:outline-0 px-4 py-2 rounded border-slate-200 border-2" />
          <span className="text-red-700 h-0.5 block text-xs">{errors.address}</span>
          <br></br>
          <label htmlFor="phone" className="sr-only">phone</label>
          <input type="text" name="phone" placeholder="Phone*" onChange={handleChange} className="w-full focus:outline-0 px-4 py-2 rounded border-slate-200 border-2" />
          <span className="text-red-700 h-0.5 block text-xs">{errors.phone}</span>
          <br></br>
          <label htmlFor="card_number" className="sr-only">card_number</label>
          <input type="text" name="card_number" placeholder="Card Number*" onChange={handleChange} className="w-full focus:outline-0 px-4 py-2 rounded border-slate-200 border-2" />
          <span className="text-red-700 h-0.5 block text-xs">{errors.card_number}</span>
          <br></br>
          <label htmlFor="cvc" className="sr-only">cvc</label>
          <input type="text" name="cvc" placeholder="CVC*" onChange={handleChange} className="w-full focus:outline-0 px-4 py-2 rounded border-slate-200 border-2" />
          <span className="text-red-700 h-0.5 block text-xs">{errors.cvc}</span>
          <br></br>
          <button type="submit" className={`${isEdit ? 'bg-indigo-500 hover:bg-indigo-800' : 'bg-gray-500 cursor-no-drop'} 'px-8 py-2 text-center text-white  rounded  w-full duration-100`}>Save</button>
        </form>
      </div>
    </div>
  )
}
