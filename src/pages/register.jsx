// src/pages/Register/Register.jsx
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

export const Register = () => {
    const [user, setUser] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    });
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add registration logic here
        navigate('/login');
    };

    return (
        <div className="auth-container">
            <form className="auth-form" onSubmit={handleSubmit}>
                <h2>Register</h2>
                <input
                    type="text"
                    placeholder="Username"
                    onChange={(e) => setUser({ ...user, username: e.target.value })}
                />
                <input type="email" placeholder="Email" onChange={(e) => setUser({ ...user, email: e.target.value })} />
                <input
                    type="password"
                    placeholder="Password"
                    onChange={(e) => setUser({ ...user, password: e.target.value })}
                />
                <input
                    type="password"
                    placeholder="Confirm Password"
                    onChange={(e) => setUser({ ...user, confirmPassword: e.target.value })}
                />
                <button type="submit">Register</button>
                <p>
                    Already have an account? <Link to="/login">Login</Link>
                </p>
            </form>
        </div>
    );
};
