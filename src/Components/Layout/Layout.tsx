import React from 'react';
import Header from "../Header/Header";

// @ts-ignore
const Layout = ({children}) => {
    return (
        <>
            <Header />
            {children}
        </>
    );
};

export default Layout;