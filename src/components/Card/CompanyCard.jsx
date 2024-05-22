import React from 'react';
import './CompanyCard.css';

const CompanyCard = ({ company }) => {
  return (
    <div className='Company_card_container'>
      <div className="Company_details">
        <div className="Company_profile_company_dec">
          <div className='Company_profile'>
            <h5>{company.CompanyName}</h5>
          </div>
          <div className="Company_profile_dec">
            <p><span>Description:</span> {company.JobDesc}</p>
            <p><span>Email:</span> {company.Email}</p>
            <p><span>Location:</span> {company.City}, {company.CompanyAddress}</p>
          </div>
          <div className="Company_profile_doc">
            <p className='Company_working_type_remote'>
              <i className="bi bi-file-earmark-text-fill" style={{ fontSize: "30px", marginRight: "5px" }}></i> Docs
            </p>
          </div>
        </div>
      </div>
      <div className=" Company-type">
        <div className="Company_working_type">
          {/* Assuming status is either 'Reject' or 'Approve' */}
          <p className={company.status === 'Reject' ? 'Company_working_type_full' : 'Company_working_type_part'}>
            {company.status}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CompanyCard;
