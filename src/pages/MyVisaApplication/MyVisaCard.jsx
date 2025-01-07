import React from 'react';
import Swal from 'sweetalert2';

const MyVisaCard = ({ visa, handleDataFromChild }) => {

    const handleCancel = (id) => { 
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
                // console.log(id)
                fetch(`https://a10-go-visa-server.vercel.app/visaApplication/${id}`, {
                     method: 'DELETE'
                 })
                    .then(res => res.json())
                    .then(data => {
                        // if(data){
                        //     Swal.fire("deleted")
                        // }
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your visa application has been deleted.",
                                icon: "success"
                            });
                            const ata = id;
                            handleDataFromChild(ata);
                        }
                    })
            }
        });
    }
    
    return (
        <div className="card bg-base-100 lg:w-96 shadow-xl">
            <figure className=''>
                <img className=''
                    src={visa.photoUrl}
                    alt="visa applied country" />
            </figure>
            <div className="card-body ">
                <h2 className="card-title items-center">{visa.country}</h2>
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
                <p>Applied Date : {visa.applied_date}</p>
                <p>Applicant's name : {visa.fname} {visa.lname}</p>
                <p className='text-sm'>Applicant's email: {visa.email}</p>
                <div className="card-actions justify-center">
                    <button onClick={() => handleCancel(visa._id)} className="btn btn-primary">Cancel</button>
                </div>
            </div>
        </div>
    );
};

export default MyVisaCard;