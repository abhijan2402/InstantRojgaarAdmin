import React, { useState, useEffect } from 'react';
import './NewJobs.css';
import Card from '../Card/Card';
import JobDeatils from '../JobDetails/JobDeatils';
import { db } from '../../firebase';
import { collection, getDocs } from 'firebase/firestore';

const NewJobs = () => {
    const [details, setDetails] = useState(false);
    const [data, setData] = useState([]);
    const [selectedJob, setSelectedJob] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const querySnapshot = await getDocs(collection(db, 'JobList'));
            const docs = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setData(docs);
        };

        fetchData();
    }, []);

    console.log(data);
    const handleJobDetailsPage = (company) => {
        setSelectedJob(company);
        setDetails(true);
    };

    return (
        <div className='newjobs_container'>
            <h2>{details === false ? <>New Jobs Posted !!</> : <><i onClick={() => setDetails(false)} className="bi bi-arrow-left-square-fill" style={{ cursor: "pointer", marginRight: "1rem" }}></i> Job Details</>}</h2>
            {
                details === false ? (
                    data.map(company => (<Card handleJobDetailsPage={handleJobDetailsPage} key={company.id} company={company} />))
                ) : (
                    <JobDeatils company={selectedJob} />
                )
            }
        </div>
    );
};

export default NewJobs;
