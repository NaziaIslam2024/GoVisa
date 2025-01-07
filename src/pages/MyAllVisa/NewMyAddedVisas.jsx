import React, { useState } from 'react';
import Swal from 'sweetalert2';

const NewMyAddedVisas = ({ visa }) => {
    console.log(visa)
    const { _id, photoUrl, country, prossTime, appliMethod, fee, validity } = visa;
    const handleUpdateClick = visa => {
        // console.log(createFormFields())
        document.getElementById('vId').value =  _id;
        document.getElementById('processing_time').value = prossTime;
        document.getElementById('photoUrl').value = photoUrl;
        document.getElementById('country').value = country;
        document.getElementById('fee').value = fee;
        document.getElementById('validity').value = validity;
        document.getElementById('appliMethod').value = appliMethod;
        document.getElementById('my_modal_3').showModal();
    }

    const closeModalClick = () => {
        document.getElementById('my_modal_3').close();
    }
    

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

    const handleUpdateVisa = e =>{
        e.preventDefault();
        const form = e.target;
        console.log(form);
        const prossTime = form.processing_time.value; 
        console.log(prossTime);
        const visaId = form.vId.value
        const photoUrl = form.photoUrl.value;
        const country = form.country.value;
        const fee = form.fee.value;
        const validity = form.validity.value;
        const applicationMethod = form.appliMethod.value;
        // console.log(form.processing_time.value);
        // const visaType = ["Conference visa","Student visa"]
        const visaItem = { prossTime, photoUrl, country, fee, validity, applicationMethod};
        // console.log(visaItem)
        // // fetch('https://a10-go-visa-server.vercel.app/visaUpdate/6755942950243b11e5cbece5', {
        fetch(`https://a10-go-visa-server.vercel.app/visaUpdate/${visaId}`, {
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
    const createFormFields = () => {
        return Object.keys(visa).map((key) => (
            <div key={key} className="form-control">
                <label className="label" htmlFor={key}>{key}</label>
                <input
                    type="text"
                    id={key}
                    defaultValue={visa[key]}
                    className='input input-bordered'
                />
            </div>
        ));
    };
   
    return (
        <>
            <div className="card bg-base-100 w-96 shadow-xl">
                <figure>
                    <img
                        src={photoUrl}
                        alt="user's added visa" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{country}</h2>
                    <div>Visa type:
                        <p className='space-x-1'>
                            {
                                visa.visaType.map((item, i) => <li className="badge badge-outline" key={i}>{item}</li>)
                            }
                        </p>
                    </div>
                    <p>Processing time : {prossTime}</p>
                    <p>Fee : {fee}</p>
                    <p>Validity : {validity}</p>
                    <p>Application method : {appliMethod}</p>
                    <div className="card-actions justify-between">
                        <button onClick={() => handleUpdateClick(visa)} className="btn btn-primary">Update</button>
                        <button onClick={() => handleDelete(visa._id)} className="btn btn-primary">Delete</button>
                    </div>
                </div>
            </div>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <form onSubmit={handleUpdateVisa} >
                        <input type="text" id="vId" hidden/>
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        {/* <div id = "formData">{createFormFields()}</div> */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Country Name</span>
                            </label>
                            <input id='country' name='country' type="text" placeholder="Country name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo url</span>
                            </label>
                            <input id='photoUrl' name='photoUrl' type="text" placeholder="Enter a url of your desired country's photo" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Processing time</span>
                            </label>
                            <input id='processing_time' name='processing_time' type="text" placeholder="Your desired visa's processing time" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Fee</span>
                            </label>
                            <input id='fee' name='fee' type="number" min='0' placeholder="Amount of money" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Validity</span>
                            </label>
                            <input id='validity' name='validity' type="text" placeholder="" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Application method</span>
                            </label>
                            <input id='appliMethod'  name='appliMethod' type="text" placeholder="" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary" onClick={closeModalClick} >Update Visa</button>
                        </div>
                    </form>
                </div>
            </dialog>
        </>
    );
};

export default NewMyAddedVisas;

