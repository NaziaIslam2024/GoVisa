import React from 'react';
import { Link } from 'react-router-dom';

const VisaCard = ({oneVisa}) => {
    const {_id, photoUrl, country, visaType} = oneVisa;
    return (
        <div className=''>
            <div className="card shadow-xl">
                <figure className=''>
                    <img 
                        className='object-fill min-h-[270px] w-96'
                        src={photoUrl}
                        alt="Country specific photo" />
                </figure>
                <div className="card-body text-center space-y-3 md:min-h-72">
                    <h2 className="text-xl font-bold">{country}</h2>
                    <div className='font-bold'>Visa types: <br />
                        
                        {
                            visaType.map((item, i) => <p className="badge badge-outline" key={i}>{item}</p>)
                        }
                        
                    </div>
                    <div className="card-actions justify-center">
                        <Link to={`/allvisas/${_id}`} className="btn bg-gray-500 text-white">See Details</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VisaCard;