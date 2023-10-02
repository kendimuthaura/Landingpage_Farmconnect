
import React from 'react';

import { PhoneIcon} from '@heroicons/react/outline';
import {ChipIcon, SupportIcon} from '@heroicons/react/solid'
import bgImg from "../../assets/marketsales.jpg";


const Support = () => {
  return (
  <div name='support' className='w-full mt-24'>
      <div className='w-full h-[900px] bg-green-900/90 absolute'>
        <img className='w-full h-full object-cover mix-blend-overlay' src={bgImg} alt="/" />
      </div>
      
      <div className="my-4 py-4">
                      <h2 className="my-2 text-center text-3xl text-green-900 uppercase font-bold">Get Started</h2>
                      
                      <div className='flex justify-center'>
                          <div className='w-24 border-b-4 border-green-900'></div>
                      </div>
                      </div>
      <div className='max-w-[1240px] mx-auto text-white relative'>
        
          <div className='px-4 py-12'>
              <h2 className='text-4xl pt-8 text-white-800 uppercase text-center'>Why Farmconnect ?</h2>
              <h3 className='text-5xl font-bold py-6 text-center'>Finding a reliable platform to get your products to the market</h3>
              <p className='py-4 text-3xl text-slate-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. In repudiandae veritatis ratione error tenetur, voluptates architecto possimus ad! Omnis minima ea quidem quisquam unde beatae, minus illo et cum vel?</p>
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black'>
              <div className='bg-white rounded-xl shadow-2xl'>
                  <div className='p-8'>
                      <PhoneIcon className='w-16 p-4 bg-green-800 text-white rounded-lg mt-[-4rem]' />
                      <h3 className='font-bold text-2xl my-6'>Local Adaptation and Support</h3>
                      <p className='text-gray-600 text-xl'>Our system is customized  to cater to local languages and content preferences. This ensures that farmers can easily understand and use the system.</p>
                  </div>
                               </div>
              <div className='bg-white rounded-xl shadow-2xl'>
                  <div className='p-8'>
                      <SupportIcon className='w-16 p-4 bg-green-800 text-white rounded-lg mt-[-4rem]' />
                      <h3 className='font-bold text-2xl my-6'>Feedback Mechanism</h3>
                      <p className='text-gray-600 text-xl'>Create a feedback mechanism for farmers to voice their concerns, make suggestions, and report problems. Act on this feedback to continuously improve the system.</p>
                  </div>
                  
              </div>
              <div className='bg-white rounded-xl shadow-2xl'>
                  <div className='p-8'>
                      <ChipIcon className='w-16 p-4 bg-green-800 text-white rounded-lg mt-[-4rem]' />
                      <h3 className='font-bold text-2xl my-6'>Real and Tangible Benefits</h3>
                      <p className='text-gray-600 text-xl'>The farmconnect system can help farmers increase their agricultural productivity. This might include features like crop management, pest and disease alerts, and optimized planting and harvesting schedules.</p>
                  </div>
                  
              </div>
          </div>
      </div>
  </div>
  );
};

export default Support;
