import React from 'react';
import {Link} from 'react-router-dom';
import DonutPanel from '../../components/donut-panel/donut-panel.component'
import LogoComponent from '../../components/logo/logo.component'
import InputField from '../../components/labeled-input/labeled-input.component'
import '../../App.css';

export default function Register() {
  return (
    <div className="pages">
      <div className="data-container">
        <div className="inputs-container">
          <LogoComponent />
          <form className="inputs-container">
            <InputField title='Login' placeholder='Enter your login' required={true}/>
            <InputField title='Email' placeholder='Enter your email' type="email" required={true}/>
            <InputField title='First name' placeholder='Enter your first name' required={true}/>
            <InputField title='Last name' placeholder='Enter your last name' required={true}/>
            <InputField title='Password' placeholder='Enter password' type="password" required={true}/>
            <InputField title='Password repeat' placeholder='Repeat password' type="password" required={true}/>
            <button className='button button-gradient' type='submit'>Sign Up</button>
          </form>
          <Link className='button button-bordered' to="/" >Sign In</Link>
        </div>
      </div>
      <DonutPanel />
    </div>
  )
}