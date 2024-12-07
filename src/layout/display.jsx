import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom';
import DisplayHome from './displayhome';

const display = ()  => {
    return(
    <div>
        <Routes>
        <Route path="/" element={<DisplayHome />} />
        </Routes>
    </div>

    )
}

export default display;