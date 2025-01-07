import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import VisaCard from '../../components/VisaCard/VisaCard';
import MyVisaCard from './MyVisaCard';

const MyVisaApplication = () => {
    const { user } = useContext(AuthContext);
    const userVisaInfo = useLoaderData();
    const [filteredAppliedVisa, setFilteredAppliedVisas] = useState([]);
    const [searchValue, setSearchTerm] = useState('');
    const [allVisa, setAllVisa] = useState(userVisaInfo);
    
    useEffect(() => {
        setFilteredAppliedVisas(userVisaInfo);
    }, []);

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
      };
    
    
    const handleSearch = () => {
        // console.log(searchValue);
        if(searchValue === ''){
            setFilteredAppliedVisas(userVisaInfo);
        }
        else {
            const filtered = userVisaInfo.filter((item) =>
                item.country.toLowerCase().includes(searchValue.toLowerCase())
            );
            setFilteredAppliedVisas(filtered);
        }
    };

    const handleDataFromChild = (ata) => {
        const remainingvisa = allVisa.filter(visa => visa._id !== ata);
        setFilteredAppliedVisas(remainingvisa)
      };
        
    
    return (
        <div className='space-y-6 my-20'>
            {/* <h1 className='text-3xl font-bold text-center'>Hi {user.displayName || user.email}, your visa applications are here</h1> */}
            <div className='md:w-1/3 md:mx-auto'>
                <input className="input input-bordered" onChange={handleSearchChange} placeholder='Country name' type="text" name="search" id="" />
                <button className='btn btn-info ml-4 text-lg' onClick={handleSearch}>Search</button>
            </div>
            <div className='gap-2 grid md:grid-cols-2 lg:grid-cols-3 '>
                {
                    filteredAppliedVisa.map(visa => <MyVisaCard key={visa._id} visa={visa} handleDataFromChild={handleDataFromChild}></MyVisaCard>)
                }
            </div>
        </div>
    );
};

export default MyVisaApplication;