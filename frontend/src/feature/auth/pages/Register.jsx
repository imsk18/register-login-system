import React from 'react'
import './style.css'
import { Link } from 'react-router'

const Register = () => {
  return (
    <main>
        <div className="form-container">
            <h1>Register</h1>
            <form >
                <input 
                type="text"
                placeholder='enter your email'

                 />
                <input 
                type="text"
                placeholder='enter your fullname'

                 />
                <input 
                type="password"
                placeholder='enter your password'

                 />
                
            </form>
            <p>Already have an Account <Link to = "/login">login</Link></p>
        </div>
    </main>
  )
}

export default Register