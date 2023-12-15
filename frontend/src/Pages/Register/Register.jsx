import React from 'react'
import RegisterCss from './Register.module.css'
import RegisterForm from '../../Components/RegisterForm/RegisterForm'

const Register = () => {
  return (
    <>
    <div className={RegisterCss.body}>
        <div className={RegisterCss.leftPannel}>
            <div className={RegisterCss.title}>
                <br/>
            Create an account
            </div>
            <div className={RegisterCss.title2}>
            Your personal job finder is here
            </div>
            <div className={RegisterCss.forms}>
                <RegisterForm/>
            </div>
        </div>
        <div className={RegisterCss.rightPannel}>
        <br/>
            Your Personal Job Finder
        </div>
    </div>
    </>
  )
}

export default Register