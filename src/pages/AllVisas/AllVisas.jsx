import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Select from 'react-select';
import VisaCard from '../../components/VisaCard/VisaCard';
import Swal from 'sweetalert2';

const AllVisas = () => {
    
    const allLoadedVisas = useLoaderData();
    // console.log(allLoadedVisas[0].visaType);
    // console.log(allLoadedVisas[0].visaType.includes('Tourist visa'));
    const [filteredVisas, setFilteredVisas] = useState([]);
    const [selectedOptions, setSelectedOptions] = useState([{value: 'All', label: 'All'}]);
    const options = [
        {value: 'All', label: 'All'},
        { value: 'Business visa', label: 'Business visa' },
        { value: 'Conference visa', label: 'Conference visa' },
        { value: 'Family visa', label: 'Family visa' },
        { value: 'Pilgrimage visa', label: 'Hajj/ Umrah visa' },
        { value: 'Medical visa', label: 'Medical visa' },
        { value: 'Student visa', label: 'Student visa' },
        { value: 'Tourist visa', label: 'Tourist visa' },
        { value: 'Transit visa', label: 'Transit visa' },
        { value: 'Work visa', label: 'Work visa' },
    ];
    useEffect(() => {
        // Swal.fire({
        //     title: 'loading...'
        // });
        Swal.showLoading();
        setFilteredVisas(allLoadedVisas);
        Swal.close();
    }, []);
    const handleChange = (selectedOptions) => {
        setSelectedOptions(selectedOptions);
        if(selectedOptions.value === 'All'){
            setFilteredVisas(allLoadedVisas);
        }
        else {
            const filtered = allLoadedVisas.filter((item) =>
              item.visaType.includes(selectedOptions.value)
            );
            setFilteredVisas(filtered);
          }
    };

    
    // console.log(allVisas)
    return (
        <div className='my-10'>
            {/* <h1 className='text-center text-3xl text-blue-500 my-5'>We work with these visas</h1> */}
            <div className="form-control md:w-1/3 my-5 md:mx-auto">
                <label className="label">
                    <span className="label-text">Select your desired Visa type</span>
                </label>
                <Select
                    className=" select-bordered w-full"
                    placeholder="Select your desired visa type"
                    options={options}
                    value={selectedOptions}
                    onChange={handleChange}
                />
            </div>
            <div className='grid gap-2 md:grid-cols-2 lg:grid-cols-4'>
                {
                    filteredVisas.map(oneVisa => <VisaCard key={oneVisa._id} oneVisa={oneVisa}></VisaCard>)
                }
            </div>
        </div>
    );
};

export default AllVisas;