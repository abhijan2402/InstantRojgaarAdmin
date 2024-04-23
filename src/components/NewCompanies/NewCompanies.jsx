import React from 'react';
import './NewCompanies.css'
import CompanyCard from '../Card/CompanyCard'

const NewCompanies = () => {
    // Fetch and display new companies data here
    return (
        <div className='newCompanies_container'>
            <h2>New Companies Registered !!</h2>
            <CompanyCard/>
        </div>
    );
};

export default NewCompanies;
