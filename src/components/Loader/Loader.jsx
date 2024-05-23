import React from 'react';
import './Loader.css';

const Loader = () => {
    return (
        <div className="loader">
            <div className="spinner"></div>
            <p className="loading-text">Loading, please wait...</p>
        </div>
    );
};

export default Loader;
