import React, { useEffect, useState } from 'react';
import LatestVisaCard from './LatestVisaCard';
import { Link } from 'react-router-dom';
import NewLatestVisaCard from './NewLatestVisaCard';

const LatestVisas = () => {
    const [visas, setVisas] = useState([]);
    useEffect(() => {
        fetch("https://a10-go-visa-server.vercel.app/visas/latest")
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setVisas(data);
            })
    }, [])


    return (
        <div>
            <h1 className='text-xl md:text-3xl lg:text-5xl mb-10 text-center mt-20 font-bold text-blue-500'>Latest Visas</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {/* {
                    visas.map(visa => <LatestVisaCard key={visa._id} visa={visa}></LatestVisaCard>)
                } */}
                {
                    visas.map(visa => <NewLatestVisaCard key={visa._id} visa={visa}></NewLatestVisaCard>)
                }
            </div>
            <div className='flex mt-10 justify-center'>
                <Link className='btn btn-info' to='/allvisas'>See All Visas</Link>
            </div>
        </div>
    );
};

export default LatestVisas;