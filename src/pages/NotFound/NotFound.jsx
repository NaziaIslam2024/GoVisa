import React from 'react';
import notFoundPIc from '../../assets/notFound.gif'

const NotFound = () => {
    return (
        <div className='text-center w-96 mx-auto my-20'>
            <img className='' src={notFoundPIc} alt="" />
            <h1 className='text-3xl mt-10 text-[#f9ae3f]'>Page not Found</h1>
        </div>
    );
};

export default NotFound;