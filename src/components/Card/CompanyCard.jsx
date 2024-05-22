import React from 'react';
import './CompanyCard.css';

const CompanyCard = ({ SeekerData }) => {
  console.log('this is seekrs data: ', SeekerData)
  return (
    <div className='Company_card_container'>
      <div className="Company_details">
        <div className="Company_profile_company_dec">
          <div className='Company_profile'>
            <h5>{SeekerData.CompanyName}</h5>
          </div>
          <div className="Company_profile_dec">
            {/* <p><span>Description:</span> {SeekerData.JobDesc}</p> */}
            <p><span>Email:</span> {SeekerData.email}</p>
            <p><span>Location:</span> {SeekerData.CompanyAddress}, {SeekerData.city}</p>
          </div>
          <div className="Company_profile_doc">
            <a href={SeekerData.docLink} target="_blank" rel="noopener noreferrer" className='Company_working_type_remote'>
              <i className="bi bi-file-earmark-text-fill" style={{ fontSize: "30px", marginRight: "5px" }}></i> Docs
            </a>
          </div>
        </div>
      </div>
      <div className=" Company-type ">
        <div className="Company_working_type">
          {/* Assuming status is either 'Reject' or 'Approve' */}
          <p className={SeekerData.status === 'Reject' ? 'Company_working_type_full' : 'Company_working_type_part'}>
            {SeekerData.status}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CompanyCard;
