import React from 'react';
import Wave from "../assets/wave.png"

const GetStarted = () => {
    return (
        <div className="flex items-center justify-center w-full px-4 py-6">
            <div className="p-4 sm:p-8 max-w-5xl w-full bg-black min-h-[12rem] md:h-72 flex items-center justify-center text-white relative overflow-hidden">
                {/* Wave images with responsive positioning */}
                <img src={Wave || "/placeholder.svg"} className='absolute top-[-5rem] sm:top-[-10rem] left-[-15rem] sm:left-[-30rem] rounded-full w-[20rem] sm:w-auto' alt="" />
                <img src={Wave || "/placeholder.svg"} className='absolute bottom-[-5rem] sm:bottom-[-10rem] right-[-15rem] sm:right-[-30rem] rounded-full w-[20rem] sm:w-auto' alt="" />

                <div className='flex flex-col items-center z-10'>
                    <div className='text-xl sm:text-2xl md:text-3xl text-center max-w-2xl'>
                        Want to stay connected to Ogidi happenings? Enter your email below
                    </div>
                    <div className='mt-5 flex flex-col sm:flex-row gap-3 sm:gap-5 w-full max-w-md'>
                        <input 
                            type='email' 
                            placeholder='Your email address'
                            className='p-3 bg-white rounded-sm text-black w-full'
                        />
                        <button className='p-3 rounded-sm border-2 whitespace-nowrap hover:bg-white hover:text-black transition-colors'>
                            Get Started
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GetStarted;
