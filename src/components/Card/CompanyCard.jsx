import React from 'react';
import './CompanyCard.css';
import { db } from '../../firebase';
import { doc, updateDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CompanyCard = ({ SeekerData, refreshData }) => {
  const handleApprove = async () => {
    try {
      const jobRef = doc(db, 'Seeker', SeekerData.id);
      await updateDoc(jobRef, {
        type: 'approved'
      });
      toast.success('Company type updated to approved');
      refreshData(); // Refresh data after updating status
    } catch (error) {
      toast.error('Error updating document: ' + error.message);
    }
  };

  const handleReject = async () => {
    try {
      const jobRef = doc(db, 'Seeker', SeekerData.id);
      await updateDoc(jobRef, {
        type: 'rejected'
      });
      toast.success('Company type updated to rejected');
      refreshData(); // Refresh data after updating status
    } catch (error) {
      toast.error('Error updating document: ' + error.message);
    }
  };

  return (
    <div className='Company_card_container'>
      <div className="Company_details">
        <div className="Company_profile_company_dec">
          <div className='Company_profile'>
            <h5>{SeekerData.CompanyName}</h5>
          </div>
          <div className="Company_profile_dec">
            <p><span>Email:</span> {SeekerData.email}</p>
            <p><span>Location:</span> {SeekerData.CompanyAddress}, {SeekerData.city}</p>
          </div>
          <div className="Company_profile_doc">
            <a href={SeekerData.Certificate} target="_blank" rel="noopener noreferrer" download className='Company_working_type_remote'>
              <i className="bi bi-file-earmark-text-fill" style={{ fontSize: "30px", marginRight: "1px" }}></i> Certificate
            </a>
          </div>
        </div>
      </div>
      <div className="Company-type">
        <div className="Company_working_type">
          <p className="Company_working_type_part" onClick={handleApprove}><i className="bi bi-box-arrow-in-right"></i> Approve</p>
          <p className="Company_working_type_full" onClick={handleReject}><i className="bi bi-box-arrow-in-right"></i> Reject</p>
        </div>
      </div>
    </div>
  );
};

export default CompanyCard;
