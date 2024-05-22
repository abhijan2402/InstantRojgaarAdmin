import React from 'react'
import "./Card.css"

const JobCard = ({ handleJobDetailsPage, company }) => {
    return (
        <div className='job_card_container'>
            <div className="job_details">
                <div className="job_profile_company_dec">
                    <div className='job_profile'>
                        <h5>{company.jobRole} <br /> <span>{company.CompanyName}</span> </h5>
                    </div>
                    <div className="job_profile_dec">
                        <p><span>Salary:</span> {company.Salart}</p>
                        <p><span>Minimum Experience:</span> {company.MinExp}</p>
                    </div>
                    <div className="job_profile_dec">
                        <p><span>Qualification:</span> {company.MinQualification}</p>
                        <p><span>Location: </span> {company.City}</p>
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
                    <p className="details_btn" onClick={() => handleJobDetailsPage(company)}><i className="bi bi-box-arrow-in-right"></i> Details</p>
                </div>
            </div>

        </div>
    )
}

export default JobCard
