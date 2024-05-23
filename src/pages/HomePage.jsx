import React, { useState } from 'react';
import './HomePage.css';
import NewCompanies from '../components/NewCompanies/NewCompanies';
import NewJobs from '../components/NewJobs/NewJobs';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const HomePage = () => {
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
        <div className='landingPage_main_container'>
            <h1>Welcome to the Dashboard</h1>
            <div className="landingPage_btn">

                <button className='companies_btn' onClick={handleShowCompanies}> New Companies</button>
                <button className='jobs_btn' onClick={handleShowJobs}> New Jobs</button>
            </div>

            {showCompanies && <NewCompanies />}
            {showJobs && <NewJobs />}
            <ToastContainer />
        </div>
    );
};

export default HomePage;
