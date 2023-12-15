import React from 'react'
import RegisterFormCss from './RegisterForm.module.css';
import { useState } from 'react';

const RegisterForm = () => {

    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = (event) => {
      setIsChecked(event.target.checked);
    };


  return (
    <>
    <div>
    <input className={RegisterFormCss.input} type='text' placeholder='Name'/>
    <br/> <br/>
    <input className={RegisterFormCss.input} type='text' placeholder='Email'/>
    <br/> <br/>
    <input className={RegisterFormCss.input} type='text' placeholder='Mobile'/>
    <br/> <br/>
    <input className={RegisterFormCss.input} type='text' placeholder='Password'/>
    <br/><br/>
    <input
        type="checkbox"
        name="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <span className={RegisterFormCss.terms}>By creating an account, I agree to our terms of use and privacy policy</span>
      <br/><br/>
    <button className={RegisterFormCss.button}>Create Account</button>
    <br/>
    <br/>
    <span className={RegisterFormCss.haveAccount}>Already have an account? <span className={RegisterFormCss.signIn}>Sign In</span></span>
    </div>
    </>
  )
}

export default RegisterForm;