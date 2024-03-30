import React, { useState } from 'react';
import './NewJobs.css'
import Card from '../Card/Card'
import JobDeatils from '../JobDetails/JobDeatils';

const NewJobs = () => {
    const [details, setDetails] = useState(false);
    const handleJobDetailsPage = () => {
        setDetails(true);
    }
    return (
        <div className='newjobs_container'>
            <h2>{details === false ? <>New Jobs Posted !!</> : <><i onClick={(e) => setDetails(false)} class="bi bi-arrow-left-square-fill" style={{ cursor: "pointer", marginRight: "1rem" }}></i> Job Details</>}</h2>
            {
                details === false ? <Card handleJobDetailsPage={handleJobDetailsPage} /> : <JobDeatils />
            }
        </div>
    );
};

export default NewJobs;
