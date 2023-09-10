import React from 'react'
import Navbar from '../layouts/Navbar'
import Footer from '../layouts/Footer'
import Button from "../components/base/button/Button";

export default function Login() {
    return (
        <div>
            <Navbar />
            <form className='form-container'>
                <h3 className='form-heading'>FORM LOGIN</h3>
                <div className='form-group'>
                    <label className='form-label' htmlFor="email">Email</label>
                    <input className='form-input' type="text" id="email" />
                </div>
                <div className='form-group'>
                    <label className='form-label' htmlFor="password">Password</label>
                    <input className='form-input' type="password" id="password" />
                </div>
                <Button title='Login' type='primary'>Login</Button>
            </form>
            <Footer />
        </div>
    )
}