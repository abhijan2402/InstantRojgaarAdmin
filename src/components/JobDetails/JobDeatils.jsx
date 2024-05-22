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
                    <div className="Key_Respons">
                        <h5>Key Responsibilities:</h5>
                        <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt voluptates suscipit et tenetur perferendis fugiat tempora ducimus nemo odio id. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure autem voluptates modi, illo laboriosam eaque odio aliquid ratione, voluptatibus accusantium mollitia totam expedita officia a hic distinctio fuga nulla? Magni?</p>
                    </div>
                    <div className="Skill_Experience">
                        <h5>Skill & Experience:</h5>
                        <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt voluptates suscipit et tenetur perferendis fugiat tempora ducimus nemo odio id. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, facere. Mollitia modi in quo ea quasi labore. Harum rerum odit reprehenderit consequuntur nostrum dolor magni libero corporis repellendus obcaecati? Soluta.</p>
                    </div>
                </div>
                <div className='company-details_container'>

                    <div className="company_deatils">

                    </div>
                    <div className="company_media_handle">
                        <h5>View All jobs in This Company</h5>
                        <div className='company_social_link'>
                            <i class="bi bi-facebook"></i>
                            <i class="bi bi-twitter-x"></i>
                            <i class="bi bi-linkedin"></i>
                            <i class="bi bi-instagram"></i>
                            <i class="bi bi-threads"></i>
                        </div>
                    </div>
                    <div className="company_email">
                        <h5><span> <i class="bi bi-envelope-at-fill"></i></span>Email Now</h5>
                        <p>Send your resume at <span>info12@gmail.com</span></p>
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
