import React from 'react';
import bgImg from "../../assets/farmsales.jpg";
const Hero = () => {
    return (
        <div className='min-h-screen bg-cover' style={{ backgroundImage: `url(${bgImg})` }}>
            <div className="min-h-screen flex justify-center pl-11 text-white items-center bg-black bg-opacity-60">
                <div className="">
                    <div className="space-y-4">
                        <h3 className='text-4xl'>At Farmconnect</h3>
                        <h1 className='md:text-5xl text-2xl font-bold '>We  bridge the gap between farmers and markets.</h1>
                        <div className="w-1/2">
                            <p className='text-xl'>Our services collectively aim to simplify the agricultural supply chain, reduce inefficiencies, and empower farmers to connect with markets more effectively while promoting sustainability and transparency in the agricultural sector.</p>
                        </div>
                        <div className="flex flex-wrap items-center gap-5">
                           
                            <button className='px-9 py-[10px] bg-opacity-80 hover:bg-white hover:text-black hover:outline-white duration-200  rounded-full bg-transparent outline  font-bold uppercase'>Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;