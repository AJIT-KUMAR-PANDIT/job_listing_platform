import React from 'react';
import RegisterFormCss from './RegisterForm.module.css';
import { useState } from 'react';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';


const RegisterForm = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [name, setName] = useState('Name');
  const [email, setEmail] = useState('Email');
  const [mobile, setMobile] = useState('Mobile');
  const [password, setPassword] = useState('Password');
  const [t, sett] = useState(false);
  const [error, setError] = useState('');

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked); // Toggle the checkbox state
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (isChecked ) {
      try {
        const response = await axios.post('http://localhost:5000/register', {
          name,
          email,
          mobile,
          password,
        });
        sett(true);
        console.log(response.data);

        setName('');
        setEmail('');
        setMobile('');
        setPassword('');
        setIsChecked(false);
        sett(false);
        setError('');



      } catch (error) {
        console.error(error.response.data);
        setError(error.response.data.message);


        setName('');
        setEmail('');
        setMobile('');
        setPassword('');
        setIsChecked(false);
        sett(false);
        setError('');
      }
    }
  };


  const err = () => {
    if (t) {
      toast.success('Successfully Created Your Account!');
    }
    else {
      toast.error(`${error}`);
    }
  };




  return (
    <>
      <div>
        <form onSubmit={handleSubmit} >
          <input
            className={RegisterFormCss.input}
            type='text'
            placeholder={`${name}`}
            onChange={(e) => setName(e.target.value)}
          />
          <br /> <br />
          <input
            className={RegisterFormCss.input}
            type='text'
            placeholder={`${email}`}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br /> <br />
          <input
            className={RegisterFormCss.input}
            type='text'
            placeholder={`${mobile}`}
            onChange={(e) => setMobile(e.target.value)}
          />
          <br /> <br />
          <input
            className={RegisterFormCss.input}
            type='text'
            placeholder={`${password}`}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br /><br />
          <input
            type="checkbox"
            name="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
          <span className={RegisterFormCss.terms}>
            By creating an account, I agree to our terms of use and privacy policy
          </span>
          <br /><br />
          <button type="submit"
            onClick={err} className={RegisterFormCss.button}>
            Create Account
          </button>
        </form>

        
      

<Toaster
          position="top-center"
          reverseOrder={false}
        />
        <br />
        <br />
        <span className={RegisterFormCss.haveAccount}>
          Already have an account? <span className={RegisterFormCss.signIn}>Sign In</span>
        </span>
      </div>


    </>
  );
}

export default RegisterForm;
