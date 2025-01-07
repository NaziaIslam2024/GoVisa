import React from 'react';
import { Link } from 'react-router-dom';

const LatestVisaCard = ({visa}) => {
    return (
        <div className=''>
        <div className="card image-full shadow-xl">
            <figure className=''>
                <img 
                    className='object-fill min-h-[300px] w-full'
                    src={visa.photoUrl}
                    alt="Country specific photo" />
            </figure>
            <div className="card-body text-center space-y-3">
                <h2 className=" text-white text-xl font-bold">{visa.country}</h2>
                <div className='text-white font-bold'>Visa types: <br />
                    
                    {
                        visa.visaType.map((item, i) => <p className="badge badge-outline" key={i}>{item}</p>)
                    }
                    
                </div>
                <div className="card-actions justify-center">
                    <Link to={`/allvisas/${visa._id}`} className="btn bg-gray-500 text-white">See Details</Link>
                </div>
            </div>
        </div>
    </div>
    );
};

export default LatestVisaCard;