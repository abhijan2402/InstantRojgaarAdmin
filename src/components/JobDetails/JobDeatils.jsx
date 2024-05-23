import React from 'react';
import './JobDeatils.css';
import { db } from '../../firebase';
import { doc, updateDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';

const JobDetails = ({ company, refreshData, setDetails }) => {
    const handleApprove = async () => {
        try {
            const jobRef = doc(db, 'JobList', company.id);
            await updateDoc(jobRef, {
                status: 'approved'
            });
            toast.success('Job status updated to approved');
            refreshData(); // Refresh data after updating status
            setDetails(false); // Go back to job list after approving
        } catch (error) {
            toast.error('Error updating document: ' + error.message);
        }
    };

    const handleReject = async () => {
        try {
            const jobRef = doc(db, 'JobList', company.id);
            await updateDoc(jobRef, {
                status: 'rejected'
            });
            toast.success('Job status updated to rejected');
            refreshData(); 
            setDetails(false); 
        } catch (error) {
            toast.error('Error updating document: ' + error.message);
        }
    };

    return (
        <>
            <div className='details_container'>
                <div className='job_details_container'>
                    <div className="job_details_company_dec">
                        <div className='job_details_profile'>
                            <h5>{company.jobRole} <br /> <span>{company.CompanyName}</span> </h5>
                        </div>
                        <div className="job_details_dec">
                            <p><span>Salary:</span> {company.salary}</p>
                            <p><span>Minimum Experience:</span> {company.MinExp}</p>
                        </div>
                        <div className="job_details_dec">
                            <p><span>Qualification:</span> {company.MinQualification}</p>
                            <p><span>Location: </span> {company.CompanyAddress}, {company.City}</p>
                        </div>
                    </div>
                    <hr />
                    <div className="job_desc">
                        <h5>Job Description:</h5>
                        <p>{company.JobDesc}</p>
                    </div>
                    <div className="experience">
                        <h5>Minimum Experience:</h5>
                        <p>{company.MinExp}</p>
                    </div>
                </div>
            </div>
            <div className="job_details_btn">
                <p className="job_details_approve_btn" onClick={handleApprove}>Approve</p>
                <p className="job_details_reject_btn" onClick={handleReject}>Reject</p>
            </div>
        </>
    );
};

export default JobDetails;
