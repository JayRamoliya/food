import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";

const Login = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        // You can add your authentication logic here
        // For simplicity, let's just pass the username to the parent component
        sessionStorage.setItem('username', username);
        sessionStorage.setItem('password', password);
        navigate('/')
        // onLogin(username);
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-xl">
            <h2 className="text-2xl font-semibold mb-4">Login</h2>
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