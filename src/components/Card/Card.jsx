import React, { useState } from 'react'
import "./Card.css"

const JobCard = ({ handleJobDetailsPage }) => {
    return (
        <div className='job_card_container'>
            <div className="job_details">
                <div className="job_profile_company_dec">
                    <div className='job_profile'>
                        <h5>Web Developer <br /> <span>@Company Name</span> </h5>
                    </div>
                    <div className="job_profile_dec">
                        <p><span>Salary:</span> $20K - $50K</p>
                        <p><span>Minimum Experience:</span> 2 - 3 years</p>
                    </div>
                    <div className="job_profile_dec">
                        <p><span>Qualification:</span> BE/B.Tech</p>
                        <p><span>Location: </span> New York, USA</p>
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
                    <p className="approve_btn"><i className="bi bi-box-arrow-in-right"></i> Approve</p>
                    <p className="reject_btn"><i className="bi bi-box-arrow-in-right"></i> Reject</p>
                    <p className="details_btn" onClick={handleJobDetailsPage}><i className="bi bi-box-arrow-in-right"></i> Details</p>
                </div>
            </div>

        </div>
    )
}

export default JobCard
