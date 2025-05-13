import React, { useState } from 'react';
import Wave from "../assets/wave.png";

const SupportOgidi = () => {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <div className="flex items-center justify-center w-full px-4 py-6">
                <div className="p-4 sm:p-8 max-w-5xl w-full bg-black min-h-[12rem] md:h-72 flex items-center justify-center text-white relative overflow-hidden rounded-lg">
                    {/* Decorative wave background */}
                    <img src={Wave || "/placeholder.svg"} className='absolute top-[-5rem] sm:top-[-10rem] left-[-15rem] sm:left-[-30rem] rounded-full w-[20rem] sm:w-auto' alt="" />
                    <img src={Wave || "/placeholder.svg"} className='absolute bottom-[-5rem] sm:bottom-[-10rem] right-[-15rem] sm:right-[-30rem] rounded-full w-[20rem] sm:w-auto' alt="" />

                    <div className='flex flex-col items-center z-10 text-center'>
                        <h2 className='text-2xl sm:text-3xl font-bold max-w-xl'>
                            Support Ogidi Union Advancement Forum
                        </h2>
                        <p className='mt-3 text-sm sm:text-base max-w-md text-gray-300'>
                            Help us empower the Ogidi community by making a contribution. Every support counts!
                        </p>
                        <button
                            onClick={() => setShowModal(true)}
                            className='mt-6 px-6 py-3 bg-white text-black font-semibold rounded-md hover:bg-gray-200 transition'
                        >
                            Donate Now
                        </button>
                    </div>
                </div>
            </div>

            {showModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
                    <div className="bg-white p-6 rounded-xl shadow-2xl max-w-sm w-full relative">
                        <button onClick={() => setShowModal(false)} className="absolute top-3 right-3 text-gray-400 hover:text-black text-xl">
                            &times;
                        </button>
                        <h2 className="text-xl font-bold mb-2 text-gray-800">Bank Details</h2>
                        <p className="text-sm text-gray-600 mb-4">You can donate using the information below:</p>
                        
                        <div className="bg-gray-100 p-4 rounded-lg text-sm space-y-2">
                            <div><span className="font-medium text-gray-700">Account Name:</span> Ogidi Union Advancement Forum</div>
                            <div><span className="font-medium text-gray-700">Bank Name:</span> United Bank for Africa</div>
                            <div><span className="font-medium text-gray-700">Account Number:</span> 1028021273</div>
                        </div>

                        <button
                            onClick={() => setShowModal(false)}
                            className="mt-6 w-full px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition"
                        >
                            I’ve Sent Support
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default SupportOgidi;
