import { useState } from 'react'
import { emailRegx, passwordRegx } from 'utils/regexs'

export default function useForm(state: any) {

  //values
  const [values, setValues] = useState({ ...state });

  //Errors
  const [errors, setErrors] = useState({ ...state });

  //set errors on handlechange when this state true
  const [inputChangeErrors, setInputChangeErrors] = useState(false);

  //set errors on handlechange when this state true
  const [isValidEnable, setIsValidEnable] = useState(false);


  // validate all inputs fields
  const validation = (name: string, value: any) => {
    switch (name) {
      case 'email':
        if (!value) setErrors((prevErr: any) => ({ ...prevErr, email: 'This field is required.' }))
        else if (!emailRegx.test(String(value).toLowerCase())) setErrors((prevErr: any) => ({ ...prevErr, email: 'Must be a valid email.' }))
        else setErrors((prevErr: any) => ({ ...prevErr, email: '' }))
        break;
      case 'password':
        if (!value) setErrors((prevErr: any) => ({ ...prevErr, password: 'This field is required.' }))
        else if (!passwordRegx.test(value)) setErrors((prevErr: any) => ({ ...prevErr, password: 'Must be strong password' }))
        else setErrors((prevErr: any) => ({ ...prevErr, password: '' }))
        break;
      default:
        break;
    }
  }

  // this fn will execute on each key pess in inputs of form
  const handleChange = (event: { persist: () => void; target: { name: any; value: any; }; }) => {
    event.persist();
    const { name, value } = event.target
    // this "inputChangeErrors" will be true if got errors previously after that execute on each key pess in inputs 
    if (inputChangeErrors) validation(name, value)
    setValues({ ...values, [name]: value })
  }

  // this fn will execute when submit form
  const isValidForm = (): any => {
    // send input key and value one by one to check validation
    for (const key in state) {
      validation(key, values[key]);
    }
    // check if each object key has same value ("") and return true/false
    const isError = Object.values(errors).some((err: any) => err !== '')
    const isValue = Object.values(values).some((v: any) => v === '')
    if (isValue || isError) { setInputChangeErrors(true); setIsValidEnable(false); return false }
    setIsValidEnable(true)
    return true
  }

  return {
    values,
    errors,
    handleChange,
    isValidForm,
    isValidEnable
  }
}
