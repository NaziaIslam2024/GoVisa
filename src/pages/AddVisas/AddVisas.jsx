import React, { useContext, useState } from 'react';
import Select from 'react-select';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';

const AddVisas = () => {
    const { user } = useContext(AuthContext);
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [checkedValues, setCheckedValues] = useState([]);
    const [visaType, setVisaType] = useState([]);

    const options = [
        { value: 'Business visa', label: 'Business visa' },
        { value: 'Conference visa', label: 'Conference visa' },
        { value: 'Family visa', label: 'Family visa' },
        { value: 'Hajj/ Umrah visa', label: 'Hajj/ Umrah visa' },
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

    const handleAddVisa = e => {
        e.preventDefault();
        const form = e.target;
        // console.log(visaType);
        const adminUser = user.email;
        const photoUrl = form.photoUrl.value;
        const country = form.country.value;
        const prossTime = form.processing_time.value;
        const description = form.description.value;
        const fee = form.fee.value;
        const age = form.age.value;
        const validity = form.validity.value;
        const appliMethod = form.appliMethod.value;
        const created = Date.now();
        const visaItem = { adminUser, photoUrl, country, visaType, prossTime, description, checkedValues, age, fee, validity, appliMethod, created };



        if (checkedValues.length < 3) {
            Swal.fire("Select minimum 3 items in 'required documents' field.");
            return;
        }
        if (visaType.length < 3) {
            Swal.fire("Select minimum 3 items in 'Visa type' field.");
            return;
        }

        Swal.fire({
            title: 'Adding...'
        });
        Swal.showLoading();
        fetch('https://a10-go-visa-server.vercel.app/visas', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(visaItem)
        })
            .then(res => res.json())
            .then(data => {
                Swal.close();
                Swal.fire('Success!', 'Data added successfully.', 'success');
            })
        // // console.log("All data: ", visaItem);
        form.reset();
        setSelectedOptions([]);
    }
    return (
        <div>
            <div>
                <h1 className='text-3xl text-center'>Add new visa</h1>
            </div>
            <div>
                <form onSubmit={handleAddVisa} className="card-body w-1/2 mx-auto">
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
                        <button className="btn btn-primary">Add Visa</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddVisas;