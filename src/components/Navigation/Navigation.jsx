import React, { useState } from 'react';
import './Navigation.css';
import NewCompanies from '../NewCompanies/NewCompanies';
import NewJobs from '../NewJobs/NewJobs';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Navigation = () => {
    const [showCompanies, setShowCompanies] = useState(true);
    const [showJobs, setShowJobs] = useState(false);

    const handleShowCompanies = () => {
        setShowCompanies(true);
        setShowJobs(false);
    };

    const handleShowJobs = () => {
        setShowJobs(true);
        setShowCompanies(false);
    };

    return (
        <>
            <div className="top_nav">
                <h1 className="logo">InstaRogar</h1>
                <div className="nav_links">
                    <ul>
                        <li
                            onClick={handleShowCompanies}
                            className={showCompanies ? 'active' : ''}
                        >
                            New Companies
                        </li>
                        <li
                            onClick={handleShowJobs}
                            className={showJobs ? 'active' : ''}
                        >
                            New Jobs
                        </li>
                    </ul>
                </div>
            </div>
            <div className="nav_content_container">
                <div className="content_board">
                    <div className='landingPage_main_container'>
                        <h1>Welcome to the Dashboard!!!</h1>
                    </div>
                    {showCompanies && <NewCompanies />}
                    {showJobs && <NewJobs />}
                    <ToastContainer />
                </div>
            </div>
        </>
    );
};

export default Navigation;
