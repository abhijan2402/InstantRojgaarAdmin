import React, { useState } from 'react';
import './Navigation.css';
import NewCompanies from '../NewCompanies/NewCompanies';
import NewJobs from '../NewJobs/NewJobs';
import AllJobs from '../AllJobs/AllJobs';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AllCompanies from '../AllCompanies/AllCompanies';

const Navigation = () => {
    const [activeComponent, setActiveComponent] = useState('newCompanies');

    const handleShowCompanies = () => {
        setActiveComponent('newCompanies');
    };

    const handleShowJobs = () => {
        setActiveComponent('newJobs');
    };

    const handleShowAllJobs = () => {
        setActiveComponent('allJobs');
    };

    const handleShowAllCompanies = () => {
        setActiveComponent('allCompanies');
    };

    return (
        <>
            <div className="top_nav">
                <h1 className="logo">InstaRogar</h1>
                <div className="nav_links">
                    <ul>
                        <li
                            onClick={handleShowCompanies}
                            className={activeComponent === 'newCompanies' ? 'active' : ''}
                        >
                            New Companies
                        </li>
                        <li
                            onClick={handleShowJobs}
                            className={activeComponent === 'newJobs' ? 'active' : ''}
                        >
                            New Jobs
                        </li>
                        <li
                            onClick={handleShowAllJobs}
                            className={activeComponent === 'allJobs' ? 'active' : ''}
                        >
                            All Jobs
                        </li>
                        <li
                            onClick={handleShowAllCompanies}
                            className={activeComponent === 'handleShowAllCompanies' ? 'active' : ''}
                        >
                            All Companies
                        </li>
                    </ul>
                </div>
            </div>
            <div className="nav_content_container">
                <div className="content_board">
                    <div className='landingPage_main_container'>
                        <h1>Welcome to the Dashboard!!!</h1>
                    </div>
                    {activeComponent === 'newCompanies' && <NewCompanies />}
                    {activeComponent === 'newJobs' && <NewJobs />}
                    {activeComponent === 'allJobs' && <AllJobs />}
                    {activeComponent === 'allCompanies' && <AllCompanies/>}
                    <ToastContainer />
                </div>
            </div>
        </>
    );
};

export default Navigation;
