import React from 'react'
import "./Card.css"
import logo from "../../assets/logo.jpg"

const jobCard = () => {
    return (
        <div className='job_card_container'>
            <div className="job_details">
                <div className="job_profile_company_dec">
                    <div className='job_profile'>
                        <img src={logo} alt="profile" className='img-fluid profile-image' />
                        <h5>Web Developer <br /> <span>@Company Name</span> </h5>
                    </div>
                    <div className="job_profile_dec">
                        <p><span>Salary:</span> $20K - $50K</p>
                        <p><span>Experiences:</span> 2 - 3 years</p>
                    </div>
                    <div className="job_profile_dec">
                        <p><span>Deadline:</span> 05-06-2023</p>
                        <p><span>Location: </span> New York, USA</p>
                    </div>
                </div>
                <div className="saved_job">
                    <i className="bi bi-bookmark"></i>
                </div>
            </div>
            <div className=" job-type">
                <div className="job_working_type">
                    <p className='job_working_type_full'>Full Time</p>
                    <p className='job_working_type_part'>Part Time</p>
                    <p className='job_working_type_remote'>Remote</p>
                </div>
                <div className=" apply_job">
                    <p><i className="bi bi-box-arrow-in-right"></i> Apply Now</p>
                </div>
            </div>
        </div>
    )
}

export default jobCard
