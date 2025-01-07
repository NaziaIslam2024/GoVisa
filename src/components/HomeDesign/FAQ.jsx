import React from 'react';
import faq from '../../assets/icons8-question-mark.gif';
import { useLottie } from "lottie-react";
import groovyWalkAnimation from './question.json';


const FAQ = () => {
    const options = {
        animationData: groovyWalkAnimation,
        loop: true
      };
      const { View } = useLottie(options);
    return (
        <div>
            <div className='relative'>
                <h1 className='text-5xl mb-10 text-center mt-20 font-bold text-blue-500'>Questions about visa processing</h1>
                {/* <img className='absolute top-1 left-60' src={faq} alt="" /> */}
            </div>
            <div className='md:flex'>
                <div className='space-y-5 w-8/12 text-justify'>
                    <div tabIndex={0} className="collapse collapse-plus border-blue-300 border-b rounded-none">
                        <div className="collapse-title text-xl font-medium">What are the stages of visa processing?
                        </div>
                        <div className="collapse-content text-gray-500">
                            <div>
                                However, a number of steps can be specified that will be repeated in almost every application, such as:
                                <ul>
                                    <li>1 – Orientation and choice of strategy.</li>
                                    <li>2 – Collect information and prepare visa application.</li>
                                    <li>3 – Submit visa application.</li>
                                    <li>4 – Pick up or receive visa.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div tabIndex={0} className="collapse collapse-plus border-blue-300 border-b rounded-none">
                        <div className="collapse-title text-xl font-medium">What is the process of a Bangladesh visa?</div>
                        <div className="collapse-content">
                            <p>You can apply for a Bangladesh visa on the official website or visit the Embassy with your documents. You'll need to submit the required documents, including an application form, passport-sized photos, and the visa fee.</p>
                        </div>
                    </div>
                    <div tabIndex={0} className="collapse collapse-plus border-blue-300 border-b rounded-none">
                        <div className="collapse-title text-xl font-medium">How long does UAE visa process take?</div>
                        <div className="collapse-content">
                            <p>This will typically take around 5 working days, it can be quicker, but it can take longer.</p>
                        </div>
                    </div>
                    <div tabIndex={0} className="collapse collapse-plus border-blue-300 border-b rounded-none">
                        <div className="collapse-title text-xl font-medium">How to get a Europe visa from Bangladesh?</div>
                        <div className="collapse-content">
                            <p>You have to apply for your Schengen visa at the Embassy of your main destination. If the main destination cannot be determined, responsibility for issuance of the visa lies with the Schengen state of first entry.</p>
                        </div>
                    </div>
                    <div tabIndex={0} className="collapse collapse-plus border-blue-300 border-b rounded-none">
                        <div className="collapse-title text-xl font-medium">What are the stages of visa processing?
                        </div>
                        <div className="collapse-content">
                            {/* <p></p> */}
                            <div>
                                However, a number of steps can be specified that will be repeated in almost every application, such as:
                                <ul>
                                    <li>1 – Orientation and choice of strategy.</li>
                                    <li>2 – Collect information and prepare visa application.</li>
                                    <li>3 – Submit visa application.</li>
                                    <li>4 – Pick up or receive visa.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                {View}
                </div>
            </div>
        </div>
    );
};

export default FAQ;