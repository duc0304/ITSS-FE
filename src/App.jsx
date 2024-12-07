import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/login';
import { Register } from './pages/register';
import Display from './pages/display';
import Changepass from './pages/changepass';
import './App.css';

function App() {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/display" element={<Display />} />
            <Route path="/changepass" element={<Changepass />} />
            <Route
                path="/"
                element={
                    <Navigate
                        to="/display
            "
                        replace
                    />
                }
            />
        </Routes>
    );
}

export default App;
