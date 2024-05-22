import React, { useEffect, useState } from 'react';
import './NewCompanies.css';
import CompanyCard from '../Card/CompanyCard';
import { db } from '../../firebase';
import { collection, getDocs } from 'firebase/firestore';

const NewCompanies = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const fetchData = await getDocs(collection(db, 'JobList'));
      const docs = fetchData.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setData(docs);
    };

    fetchData();
  }, []);

  console.log(data);

  return (
    <div className='newCompanies_container'>
      <h2>New Companies Registered !!</h2>
      {data.map(company => (
        <CompanyCard key={company.id} company={company} />
      ))}
    </div>
  );
};

export default NewCompanies;
