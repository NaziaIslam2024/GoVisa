import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import Select from 'react-select';

const VisaAddingCard = ({ visa, handleDataFromChild }) => {
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [checkedValues, setCheckedValues] = useState([]);
    const [visaType, setVisaType] = useState([]);
    const options = [
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

    const handleChange = (selectedOptions) => {
        setSelectedOptions(selectedOptions);
        const dd = selectedOptions.map(item => item.value);
        setVisaType(dd);
       
    };
    
    const handleCheckboxChange = (event) => {
        const { value, checked } = event.target;
        
        if (checked) {
            setCheckedValues([...checkedValues, value]);
        } else {
            setCheckedValues(checkedValues.filter((val) => val !== value));
        }
    };

    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                // console.log("delete confirm")
                fetch(`https://a10-go-visa-server.vercel.app/visas/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {

                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            const ata = id;
                            handleDataFromChild(ata);
                        }
                    })
            }
        });
    }

    const [idd, setIdd] = useState('');
    const handleClickUpdateButton = (id) => {
        const updateButtonValue = id;
        setIdd(updateButtonValue);
        // console.log(id, idd);
        document.getElementById('my_modal_3').showModal();
    }
    // useEffect(() => {
    //     console.log('Updated idd:', idd);
    //   },);

    console.log(idd)

    const handleUpdateVisa = e =>{
        e.preventDefault();
        const form = e.target;
        const prossTime = form.processing_time.value; 
        console.log(visaType);
        // console.log(form.processing_time.value);
        const visaItem = {  prossTime, visaType};
        // fetch('https://a10-go-visa-server.vercel.app/visaUpdate/6755942950243b11e5cbece5', {
        fetch(`http://localhost:5000/visaUpdate/${idd}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(visaItem)
        })
        .then(res => res.json())
        .then(data => {
            Swal.fire("Updated")
        })
    }
    return (
        <>
            <div className="card bg-base-100 lg:w-96 shadow-xl">
                <figure>
                    <img
                        src={visa.photoUrl}
                        alt="visa applied country" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title items-center">Country: {visa.country}</h2>

                    <div>Visa type:
                        <div className='space-x-1'>
                            {
                                visa.visaType.map((item, i) => <p className="badge badge-outline" key={i}>{item}</p>)
                            }
                        </div>
                    </div>
                    <p>Processing time : {visa.prossTime}</p>
                    <p>Fee : {visa.fee}</p>
                    <p>Validity : {visa.validity}</p>
                    <p>Application method : {visa.appliMethod}</p>
                    <div className="card-actions justify-between mt-8">
                        <button onClick={() => handleClickUpdateButton(visa._id)} className="btn btn-primary">Update</button>
                        <button onClick={() => handleDelete(visa._id)} className="btn btn-primary">Delete</button>
                    </div>
                </div>
            </div>
            {/* modal section */}
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <form onSubmit={handleUpdateVisa} className="card-body">
                        <input type="text" defaultValue={idd}/>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo url</span>
                            </label>
                            <input name='photoUrl' type="text" placeholder="Enter a url of your desired country's photo" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Country Name</span>
                            </label>
                            <input name='country' type="text" placeholder="Country name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Visa type</span>
                            </label>
                            <Select
                                isMulti
                                className=" select-bordered w-full"
                                placeholder="You have to select at least 3 types"
                                options={options}
                                value={selectedOptions}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Processing time</span>
                            </label>
                            <input name='processing_time' type="text" placeholder="Your desired visa's processing time" className="input input-bordered" required />
                        </div>
                        {/* checkbox part */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Required documents</span>
                            </label>
                            <div className='space-y-2'>
                                <label className="flex gap-4 items-center cursor-pointer">
                                    <input value='Valid passport' type="checkbox" className="checkbox" onChange={handleCheckboxChange} />
                                    <span className="label-text">Valid passport</span>
                                </label>
                                <label className="flex gap-4 items-center cursor-pointer">
                                    <input value='Visa application form' type="checkbox" className="checkbox" onChange={handleCheckboxChange} />
                                    <span className="label-text">Visa application form</span>
                                </label>
                                <label className="flex gap-4 items-center cursor-pointer">
                                    <input value='Recent passport-sized photograph' type="checkbox" className="checkbox" onChange={handleCheckboxChange} />
                                    <span className="label-text">Recent passport-sized photograph</span>
                                </label>
                                <label className="flex gap-4 items-center cursor-pointer">
                                    <input value='Proof of accommodation' type="checkbox" className="checkbox" onChange={handleCheckboxChange} />
                                    <span className="label-text">Proof of accommodation</span>
                                </label>
                                <label className="flex gap-4 items-center cursor-pointer">
                                    <input value='Health insurance' type="checkbox" className="checkbox" onChange={handleCheckboxChange} />
                                    <span className="label-text">Health insurance</span>
                                </label>
                                <label className="flex gap-4 items-center cursor-pointer">
                                    <input value='Financial proof' type="checkbox" className="checkbox" onChange={handleCheckboxChange} />
                                    <span className="label-text">Financial proof</span>
                                </label>
                            </div>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <input name='description' type="text" placeholder="" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Age restriction</span>
                            </label>
                            <input name='age' type="number" placeholder="" className="input input-bordered" min='0' required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Fee</span>
                            </label>
                            <input name='fee' type="number" min='0' placeholder="Amount of money" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Validity</span>
                            </label>
                            <input name='validity' type="text" placeholder="" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Application method</span>
                            </label>
                            <input name='appliMethod' type="text" placeholder="" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Update Visa</button>
                        </div>
                    </form>
                    <p className="py-4">Press ESC key to close</p>
                </div>
            </dialog>
        </>
    );
};

export default VisaAddingCard;