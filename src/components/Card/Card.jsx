import React from 'react';
import './Card.css';
import { db } from '../../firebase';
import { doc, updateDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const JobCard = ({ handleJobDetailsPage, JobData, refreshData }) => {
    const handleApprove = async () => {
        try {
            const jobRef = doc(db, 'JobList', JobData.id);
            await updateDoc(jobRef, {
                status: 'approved'
            });
            toast.success('Job status updated to approved');
            refreshData(); // Refresh data after updating status
        } catch (error) {
            toast.error('Error updating document: ' + error.message);
        }
    };

    const handleReject = async () => {
        try {
            const jobRef = doc(db, 'JobList', JobData.id);
            await updateDoc(jobRef, {
                status: 'rejected'
            });
            toast.success('Job status updated to rejected');
            refreshData(); // Refresh data after updating status
        } catch (error) {
            toast.error('Error updating document: ' + error.message);
        }
    };

    return (
        <div className='job_card_container'>
            <div className="job_details">
                <div className="job_profile_company_dec">
                    <div className='job_profile'>
                        <h5>{JobData.jobRole} <br /> <span>{JobData.CompanyName}</span> </h5>
                    </div>
                    <div className="job_profile_dec">
                        <p><span>Salary:</span> {JobData.Salary}</p>
                        <p><span>Minimum Experience:</span> {JobData.MinExp}</p>
                    </div>
                    <div className="job_profile_dec">
                        <p><span>Qualification:</span> {JobData.MinQualification}</p>
                        <p><span>Location: </span> {JobData.City}</p>
                    </div>
                </div>
            </div>
            <div className=" job-type">
                <div className="job_working_type">
                    <p className='job_working_type_full'>Full Time</p>
                    <p className='job_working_type_part'>Part Time</p>
                    <p className='job_working_type_remote'>Remote</p>
                </div>
                <div className=" apply_job">
                    <p className="approve_btn" onClick={handleApprove}><i className="bi bi-box-arrow-in-right"></i> Approve</p>
                    <p className="reject_btn" onClick={handleReject}><i className="bi bi-box-arrow-in-right"></i> Reject</p>
                    <p className="details_btn" onClick={() => handleJobDetailsPage(JobData)}><i className="bi bi-box-arrow-in-right"></i> Details</p>
                </div>
            </div>
        </div>
    );
};

export default JobCard;
