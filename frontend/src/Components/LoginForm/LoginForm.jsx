import React from 'react'
import LoginFormCss from './LoginForm.module.css';

const LoginForm = () => {

  return (
    <>
    <div>
    <input className={LoginFormCss.input} type='text' placeholder='Email'/>
    <br/> <br/>
    <input className={LoginFormCss.input} type='text' placeholder='Password'/>
    <br/> <br/>
    <button className={LoginFormCss.button}>Sign in</button>
    <br/>
    <br/>
    <span className={LoginFormCss.haveAccount}>Don’t have an account? <span className={LoginFormCss.signIn}>Sign Up</span></span>
    </div>
    </>
  )
}

export default LoginForm;