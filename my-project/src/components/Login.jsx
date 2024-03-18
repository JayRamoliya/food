import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
    const [error, setError] = useState('');

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        if (!username || !password) {
            setError('Please enter both username and password');
            return;
        }
        sessionStorage.setItem('username', username);
        sessionStorage.setItem('password', password);
        navigate('/')
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-xl">
            <h2 className="text-2xl font-semibold mb-4">Login</h2>
            {error && <p className="text-red-500 mb-4 text-center">{error}</p>}
            <input
                className="w-full border border-gray-300 rounded-md p-2 mb-4"
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                className="w-full border border-gray-300 rounded-md p-2 mb-4"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md"
                onClick={handleLogin}
            >
                Login
            </button>
        </div>
    );
};

export default Login;
