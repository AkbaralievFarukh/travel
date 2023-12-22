import React from 'react';
import Header from "./Components/Header/Header";
import {BrowserRouter} from "react-router-dom";
import Routes from "./Routes/AppRoutes";

const App = () => {
    return (
        <BrowserRouter>
            <Routes />
        </BrowserRouter>
    );
};

export default App;