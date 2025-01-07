import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Swal from 'sweetalert2'
import { AuthContext } from '../../providers/AuthProvider';
import Modal from 'react-modal';

Modal.setAppElement('#root');
const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        padding: '20px'
    },
};

const VisaDetails = () => {
    const {user} = useContext(AuthContext);
    const loadedVisa = useLoaderData();
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const day = today.getDate();
    const formattedDate = `${day}-${month}-${year}`;
    const { _id, photoUrl, country, visaType, prossTime, checkedValues, description, appliMethod, age, fee, validity } = loadedVisa;
    
    // modal code
    const handleAddVisa = e => {
        const email = e.target.email.value;
        const fname = e.target.fname.value;
        const lname = e.target.lname.value;
        const fee = e.target.fee.value;
        const applied_date = e.target.date.value;
        const userVisaInfo = {email, fname, lname, fee, applied_date, photoUrl, country, visaType, prossTime, checkedValues, description, appliMethod, age, validity};

        fetch('https://a10-go-visa-server.vercel.app/userappliedvisa',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userVisaInfo)
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged == true){
                Swal.fire("Your visa is added");
            }
            else{
                Swal.fire("Please try again.");
            }
        })
        
        
    }

    return (
        <>
            <div className='bg-gradient-to-r from-cyan-500 to-blue-500 py-10'>
                <div className="card glass w-96 mx-auto">
                    <figure>
                        <img
                            src={photoUrl}
                            alt="Visa country photo" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Do you want to apply visa for {country}?</h2>
                        <p>We do these visa processing: </p>
                        <div className='space-x-1'>
                            {
                                visaType.map((item, i) => <p className="badge badge-outline" key={i}>{item}</p>)
                            }
                        </div>
                        <p>Visa processing time: {prossTime}</p>
                        <p>Required documents:</p>
                        <ol>
                            {
                                checkedValues.map((item, i) => <li key={i}>{i + 1}. {item}</li>)
                            }
                        </ol>
                        <p>Description: {description}</p>
                        <p>Age restriction: {age}</p>
                        <p>Fee: {fee}</p>
                        <p>Validity of visa: {validity}</p>
                        <p>Application method: {appliMethod}</p>

                        <div className="card-actions justify-center">
                            <button onClick={() => document.getElementById('my_modal_3').showModal()} className="btn btn-info text-white">Apply for the visa</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* modal section */}
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <form onSubmit={handleAddVisa} method="dialog">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name='email' type="email" defaultValue={user.email} className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">First name</span>
                            </label>
                            <input name='fname' type="text" placeholder="" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Last name</span>
                            </label>
                            <input name='lname' type="text" placeholder="" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Fee</span>
                            </label>
                            <input name='fee' type="text" defaultValue={fee} className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Date of apply</span>
                            </label>
                            <input name='date' type="text" defaultValue={formattedDate} className="input input-bordered" required />
                        </div>
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn">Apply</button>
                    </form>
                   
                    <p className="py-4">Press ESC key to close</p>
                </div>
            </dialog>
            
        </>
    );
};

export default VisaDetails;