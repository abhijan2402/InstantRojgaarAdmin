import React, { useEffect, useState } from 'react';
import './NewCompanies.css';
import CompanyCard from '../Card/CompanyCard';
import { db } from '../../firebase';
import { collection, getDocs, query, where } from 'firebase/firestore';

const NewCompanies = () => {
  const [SeekerData, SetSeekerData] = useState([]);

  const fetchData = async () => {
    const fetch_query = query(collection(db, 'Seeker'), where('type', '==', 'Providing'));
    const fetchData = await getDocs(fetch_query);
    const docs = fetchData.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    SetSeekerData(docs);
  };
  
  useEffect(() => {
    fetchData();
  }, []);

  console.log(SeekerData);

  return (
    <div className='newCompanies_container'>
      <h2>New Companies Registered !!</h2>
      {SeekerData.map(SeekerData => (
        <CompanyCard key={SeekerData.id} SeekerData={SeekerData} refreshData={fetchData} />
      ))}
    </div>
  );
};

export default NewCompanies;
