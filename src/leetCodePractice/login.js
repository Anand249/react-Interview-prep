import React, { useState } from 'react';
import './login.css';
import utils from './utils/utils';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const disableButton = !email || password.length < 6 || loading;

    const handleLogin = async () => {
        setError(null)
        setLoading(true)
        try {
            await utils({ email, password })
            alert('Login Successful')
            setLoading(false)
        } catch (error) {
            setError(error.message)
            setLoading(false)
        }
    }
    return (
        <div>
            <h2>Login Form</h2>
            <div className="container">
                <label className='alignLeft'><b>Email</b></label>
                <input type="text" placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <label className='alignLeft'><b>Password</b></label>
                <input type='password' placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <div className='errorMessage alignLeft'>{error}</div>
                <button disabled={disableButton} type="submit" onClick={handleLogin}>Login</button>
            </div>
        </div>
    )
}
