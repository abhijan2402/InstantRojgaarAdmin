import React, { useEffect, useState } from 'react';
import './AllCompanies.css';
import CompanyCard from '../Card/CompanyCard';
import Loader from '../Loader/Loader';
import { db } from '../../firebase';
import { collection, getDocs, query, where } from 'firebase/firestore';

const AllCompanies = () => {
  const [SeekerData, SetSeekerData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    setLoading(true); // Set loading to true before fetching data
    const fetch_query = query(collection(db, 'Seeker'), where('type', '==', 'Providing'));
    const fetchData = await getDocs(fetch_query);
    const docs = fetchData.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    SetSeekerData(docs);
    setLoading(false); // Set loading to false after data is fetched
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(SeekerData);

  return (
    <div className='AllCompanies'>
      <h2>New Companies Registered !!</h2>
      {loading ? (
        <Loader /> // Display loader while loading
      ) : (
        SeekerData.map(SeekerData => (
          <CompanyCard key={SeekerData.id} SeekerData={SeekerData} refreshData={fetchData} />
        ))
      )}
    </div>
  );
};

export default AllCompanies;
