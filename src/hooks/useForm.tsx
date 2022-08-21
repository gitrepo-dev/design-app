import { useState } from 'react'
import { emailRegx, passwordRegx, numberRegx } from 'utils/regexs'

export default function useForm(state: any, setState: (params: any) => void) {

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
      case 'name':
        if (!value) setErrors((prevErr: any) => ({ ...prevErr, name: 'This field is required.' }))
        else if (value.length < 3) setErrors((prevErr: any) => ({ ...prevErr, name: 'Min 3 character long.' }))
        else setErrors((prevErr: any) => ({ ...prevErr, name: '' }))
        break;
      case 'login_email':
        if (!value) setErrors((prevErr: any) => ({ ...prevErr, login_email: 'This field is required.' }))
        else setErrors((prevErr: any) => ({ ...prevErr, login_email: '' }))
        break;
      case 'login_password':
        if (!value) setErrors((prevErr: any) => ({ ...prevErr, login_password: 'This field is required.' }))
        else setErrors((prevErr: any) => ({ ...prevErr, login_password: '' }))
        break;
      case 'email':
        if (!value) setErrors((prevErr: any) => ({ ...prevErr, email: 'This field is required.' }))
        else if (!emailRegx.test(String(value).toLowerCase())) setErrors((prevErr: any) => ({ ...prevErr, email: 'Must be a valid email.' }))
        else setErrors((prevErr: any) => ({ ...prevErr, email: '' }))
        break;
      case 'password':
        if (!value) setErrors((prevErr: any) => ({ ...prevErr, password: 'This field is required.' }))
        else if (value?.length > 15) setErrors((prevErr: any) => ({ ...prevErr, password: 'Must not be more than 15 characters' }))
        else if (!passwordRegx.test(value)) setErrors((prevErr: any) => ({ ...prevErr, password: 'Must be strong password' }))
        else setErrors((prevErr: any) => ({ ...prevErr, password: '' }))
        break;

      case 'address':
        if (!value) setErrors((prevErr: any) => ({ ...prevErr, address: 'This field is required.' }))
        else if (value.length < 5) setErrors((prevErr: any) => ({ ...prevErr, address: 'Min 5 character long.' }))
        else setErrors((prevErr: any) => ({ ...prevErr, address: '' }))
        break;
      case 'phone':
        if (!value) setErrors((prevErr: any) => ({ ...prevErr, phone: 'This field is required.' }))
        else if (!numberRegx.test(String(value).toLowerCase())) setErrors((prevErr: any) => ({ ...prevErr, phone: 'Only digits allowed.' }))
        else if (value.length !== 10 || value.length > 10) setErrors((prevErr: any) => ({ ...prevErr, phone: 'Must be 10 digits phone no.' }))
        else setErrors((prevErr: any) => ({ ...prevErr, phone: '' }))
        break;
      case 'card_number':
        if (!value) setErrors((prevErr: any) => ({ ...prevErr, card_number: 'This field is required.' }))
        else if (!numberRegx.test(String(value).toLowerCase())) setErrors((prevErr: any) => ({ ...prevErr, card_number: 'Only digits allowed.' }))
        else if (value.length < 12 || value.length > 12) setErrors((prevErr: any) => ({ ...prevErr, card_number: 'Must be 12 digis card number.' }))
        else setErrors((prevErr: any) => ({ ...prevErr, card_number: '' }))
        break;
      case 'cvc':
        if (!value) setErrors((prevErr: any) => ({ ...prevErr, cvc: 'This field is required.' }))
        else if (!numberRegx.test(String(value).toLowerCase())) setErrors((prevErr: any) => ({ ...prevErr, cvc: 'Only digits allowed.' }))
        else if (value.length < 3 || value.length > 3) setErrors((prevErr: any) => ({ ...prevErr, cvc: 'Must 3 digit cvc number.' }))
        else setErrors((prevErr: any) => ({ ...prevErr, cvc: '' }))
        break;
      default:
        break;
    }
  }


  // this fn will execute on each key pess in inputs of form
  const handleChange = (event: { persist: () => void; target: { name: string; value: any; }; }) => {
    event.persist();
    const { name, value } = event.target
    // this "inputChangeErrors" will be true if got errors previously after that execute on each key pess in inputs
    // preview code
    // if (inputChangeErrors) validation(name, value)
    validation(name, value)
    setValues({ ...values, [name]: value })
    setState({ ...values, [name]: value })
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

    if (isValue || isError) {
      setInputChangeErrors(true);
      setIsValidEnable(false);
      return false
    }
    else {
      setIsValidEnable(true)
      return true
    }
  }

  return {
    values,
    errors,
    handleChange,
    isValidForm,
    isValidEnable
  }
}
