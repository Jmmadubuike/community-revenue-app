import React from 'react';
import Wave from "../assets/wave.png"
const GetStarted = () => {
    return (
        <div className="flex items-center justify-center w-full">
            <div className="p-8 max-w-5xl w-full bg-[#7A7D47] h-72 flex items-center justify-center text-white relative overflow-hidden">
            <img src={Wave} className='absolute top-[-10rem] left-[-30rem] rounded-full'/>
            <img src={Wave} className='absolute bottom-[-10rem] right-[-30rem] rounded-full'/>

                <div className='flex flex-col items-center'>
                    <div className='text-3xl text-center max-w-2xl'>
                    Want to stay connected to Ogidi happenings? Enter your email below
                    </div>
                    <div className='mt-5 flex gap-5'>
                        <input type='text' className='p-3 bg-white rounded-sm'/>
                        <button className='p-3 rounded-sm border-2'>Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GetStarted;