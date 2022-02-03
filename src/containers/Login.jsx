import React from 'react';
import '../styles/Login.scss';
import logoLogin from '../../public/assets/logos/logo_yard_sale.svg';

const Login = () => {
    return (
        
        <div className="login">
            <div className="form-container">
                <img src={logoLogin} alt="logo" className="logo" />
                <h1 className="title">Create a new password</h1>
                <p className="subtitle">Enter a new password for you account</p>
                <form action="/" className="form">
                    <label htmlFor="password" className="label">Password</label>
                    <input type="password" id="password" placeholder="*********" className="input input-password" />
                    <label htmlFor="new-password" className="label">Confirm password</label>
                    <input type="password" id="new-password" placeholder="*********" className="input input-password" />
                    <input type="submit" defaultValue="Confirm" className="primary-button login-button" />
                </form>
            </div>
        </div>

    );
}

export default Login;