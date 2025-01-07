import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import VisaAddingCard from './visaAddingCard';
import NewMyAddedVisas from './NewMyAddedVisas';

const MyAllVisa = () => {
    const { user } = useContext(AuthContext);
    const allVisaData = useLoaderData();
    const [allVisa, setAllVisa] = useState(allVisaData);

    const handleDataFromChild = (ata) => {
        const remainingvisa = allVisa.filter(visa => visa._id !== ata);
        setAllVisa(remainingvisa)
      };
    
    return (
        <div className='mt-20'>
            {/* <h1 className='text-3xl text-blue-500 font-bold text-center my-10'>All visas added by {user.displayName}</h1> */}
            <div className='gap-4 grid md:grid-cols-2 lg:grid-cols-3 mb-10'>
                {/* {
                    allVisa.map(visa => <VisaAddingCard key={visa._id} visa={visa} handleDataFromChild={handleDataFromChild}></VisaAddingCard>)
                } */}
                {
                    allVisa.map(visa => <NewMyAddedVisas key={visa._id} visa={visa}></NewMyAddedVisas>)
                }
            </div>
        </div>
    );
};
export default MyAllVisa;