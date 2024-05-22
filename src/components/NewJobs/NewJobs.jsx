import React, { useState, useEffect } from 'react';
import './NewJobs.css';
import Card from '../Card/Card';
import JobDeatils from '../JobDetails/JobDeatils';
import { db } from '../../firebase';
import { collection, getDocs, query, where } from 'firebase/firestore';

const NewJobs = () => {
    const [details, setDetails] = useState(false);
    const [data, setData] = useState([]);
    const [selectedJob, setSelectedJob] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            // Create a query against the collection where status is "pending"
            const q = query(collection(db, 'JobList'), where('status', '==', 'Pending'));
            const querySnapshot = await getDocs(q);
            const docs = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setData(docs);
        };

        fetchData();
    }, []);

    console.log(data);

    const handleJobDetailsPage = (JobData) => {
        setSelectedJob(JobData);
        setDetails(true);
    };

    return (
        <div className='newjobs_container'>
            <h2>
                {details === false ? (
                    <>New Jobs Posted !!</>
                ) : (
                    <>
                        <i onClick={() => setDetails(false)} className="bi bi-arrow-left-square-fill" style={{ cursor: "pointer", marginRight: "1rem" }}></i>
                        Job Details
                    </>
                )}
            </h2>
            {details === false ? (
                data.map(JobData => (
                    <Card handleJobDetailsPage={handleJobDetailsPage} key={JobData.id} JobData={JobData} />
                ))
            ) : (
                <JobDeatils company={selectedJob} />
            )}
        </div>
    );
};

export default NewJobs;
