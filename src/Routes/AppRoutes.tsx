import React from 'react';
import {Routes, Route} from "react-router-dom";
import Home from "../Pages/Home/Home";
import Layout from "../Components/Layout/Layout";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout children={<Home/>}/>}/>
        </Routes>
    );
};

export default AppRoutes;