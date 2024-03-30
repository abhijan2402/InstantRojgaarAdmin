import React, { useState } from 'react';
import './Navigation.css'
import HomePage from '../../pages/HomePage';

const Navigation = () => {

    const [page, setPage] = useState("HomePage");

    return (
        <>
            <div className="top_nav">
                <h1 className="logo">LOGO</h1>
            </div>
            <div className="nav_content_container">
                <div className="content_board">
                    {page === "HomePage" && <HomePage />}
                </div>
            </div>
        </>
    );
};

export default Navigation;
