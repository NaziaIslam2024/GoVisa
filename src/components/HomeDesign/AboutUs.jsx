import React from 'react';

const AboutUs = () => {
    return (
        <div>
            <h1 className='text-5xl mb-10 text-center mt-20 font-bold text-blue-500'>About Us</h1>
            <div className='md:flex justify-between bg-blue-100 p-5 my-10'>
                <div className='md:w-7/12'>
                    <h1 className='text-2xl text-blue-700 font-bold mb-3'>We are working as a team with our client</h1>
                    <p className='text-justify text-gray-600'>Welcome to the Electronic Visa Applications Forms Instructions Page. Forms available on this page can be filled out on-line and assist in the processing of your application.

                        If you are using Internet Explorer (Windows), the minimum version that will work with this site is version 9.0.
                        If you are using Mozilla Firefox, the minimum version that will work with this site is version 3.5.
                        You must also have Adobe Acrobat Reader version 8.0 or higher installed on your PC in order to download and print the completed application form. (If you do not have Adobe Acrobat Reader)
                        You should use either an ink-jet or laser printer to print the completed application form.</p>

                </div>
                <div className="inline stats shadow md: w-4/12 ">
                    <div className="stat">
                        <div className="stat-figure text-primary">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                className="inline-block h-8 w-8 stroke-current">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                            </svg>
                        </div>
                        <div className="stat-title">Total visa applications</div>
                        <div className="stat-value text-primary">25.6K</div>
                        <div className="stat-desc">21% more than last month</div>
                    </div>

                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                className="inline-block h-8 w-8 stroke-current">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                            </svg>
                        </div>
                        <div className="stat-title">Visa Processing in stack</div>
                        <div className="stat-value text-secondary">2.6M</div>
                        <div className="stat-desc">10% more than last year</div>
                    </div>

                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <div className="avatar online">
                                <div className="w-16 rounded-full">
                                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                                </div>
                            </div>
                        </div>
                        <div className="stat-value">86% </div>
                        <div className="stat-title">Visa Application done</div>
                        <div className="stat-desc text-secondary">31 tasks remaining</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;