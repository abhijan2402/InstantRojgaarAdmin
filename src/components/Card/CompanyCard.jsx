import React, { useState } from 'react'
import "./CompanyCard.css"

const CompanyCard = () => {
    return (
        <div className='Company_card_container'>
            <div className="Company_details">
                <div className="Company_profile_company_dec">
                    <div className='Company_profile'>
                       <h5>@Company Name</h5>
                    </div>
                    <div className="Company_profile_dec">
                        <p><span>Description:</span> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus exercitationem ab repellendus! Voluptas maiores perferendis voluptates dolores voluptatibus, unde iste adipisci at, quisquam quo ullam obcaecati odit voluptate sunt amet.</p>
                        <p><span>Email:</span> company@123gmail.com</p>
                        <p><span>Location: </span> New York, USA</p>
                    </div>
                    <div className="Company_profile_doc">
                        <p className='Company_working_type_remote'> <i class="bi bi-file-earmark-text-fill" style={{fontSize:"30px", marginRight:"5px"}}></i> Docs</p>
                    </div>
                </div>
            </div>
            <div className=" Company-type">
                <div className="Company_working_type">
                    <p className='Company_working_type_full'>Reject</p>
                    <p className='Company_working_type_part'>Approve</p>
                </div>

            </div>

        </div>
    )
}

export default CompanyCard
