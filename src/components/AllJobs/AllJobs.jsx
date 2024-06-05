import React, { useState, useEffect } from 'react';
import './AllJobs.css';
import Card from '../Card/Card';
import JobDetails from '../JobDetails/JobDeatils';
import Loader from '../Loader/Loader';
import { db } from '../../firebase';
import { collection, getDocs, query, where } from 'firebase/firestore';

const AllJobs = () => {
    const [details, setDetails] = useState(false);
    const [data, setData] = useState([]);
    const [selectedJob, setSelectedJob] = useState(null);
    const [loading, setLoading] = useState(true);

    const fetchData = async () => {
        setLoading(true); // Set loading to true before fetching data
        const q = query(collection(db, 'JobList'));
        const querySnapshot = await getDocs(q);
        const docs = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setData(docs);
        setLoading(false); // Set loading to false after data is fetched
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleJobDetailsPage = (JobData) => {
        setSelectedJob(JobData);
        setDetails(true);
    };

    return (
        <div className='AllJobs_container'>
            <h2>
                {details === false ? (
                    <>All Jobs Listed</>
                ) : (
                    <>
                        <i onClick={() => setDetails(false)} className="bi bi-arrow-left-square-fill" style={{ cursor: "pointer", marginRight: "1rem" }}></i>
                        Job Details
                    </>
                )}
            </h2>
            {loading ? (
                <Loader /> // Display loader while loading
            ) : details === false ? (
                data.map(JobData => (
                    <Card handleJobDetailsPage={handleJobDetailsPage} key={JobData.id} JobData={JobData} refreshData={fetchData} />
                ))
            ) : (
                <JobDetails company={selectedJob} refreshData={fetchData} setDetails={setDetails} />
            )}
        </div>
    );
};

export default AllJobs;
