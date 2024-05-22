import React from 'react'
import './JobDeatils.css';

const JobDeatils = ({ company }) => {
    console.log("theis is ", company)
    return (
        <>
            <div className='deatails_container'>
                <div className='job_details_container'>
                    <div className="job_details_company_dec">
                        <div className='job_details_profile'>
                            <h5>{company.jobRole} <br /> <span>{company.CompanyName}</span> </h5>
                        </div>
                        <div className="job_details_dec">
                            <p><span>Salary:</span> {company.salart}</p>
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

                <p className="job_details_approve_btn"> Approve</p>
                <p className="job_details_reject_btn">Reject</p>

            </div>
        </>
    )
}

export default JobDeatils;
