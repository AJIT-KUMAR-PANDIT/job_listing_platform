import React from 'react'
import LoginFormCss from './Login.module.css'
import LoginForm from '../../Components/LoginForm/LoginForm'

const Login = () => {
  return (
    <>
    <div className={LoginFormCss.body}>
        <div className={LoginFormCss.leftPannel}>
            <div className={LoginFormCss.title}>
                <br/>
                Already have an account? 
            </div>
            <div className={LoginFormCss.title2}>
            Your personal job finder is here
            </div>
            <div className={LoginFormCss.forms}>
                <LoginForm/>
            </div>
        </div>
        <div className={LoginFormCss.rightPannel}>
        <br/>
            Your Personal Job Finder
        </div>
    </div>
    </>
  )
}

export default Login