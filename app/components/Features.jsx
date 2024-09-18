'use client';

import Image from 'next/image';
import React from 'react';
import bgfeedback from '../assets/presalefeedbackflow.jpeg';

export default function Features() {
  return (
    <div className="p-8 pt-72">
      
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">“How It Works”</h1>
        <p className="text-lg max-w-3xl pt-5 mx-auto text-gray-700">
          Follow these simple steps to integrate your feedback portal and start receiving real-time feedback from your users.
        </p>
      </div>

      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16">
      
        <div className="text-center flex flex-col items-center">
          <div className="bg-colorTextf text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl mb-4">
            1
          </div>
          <h1 className="text-2xl font-semibold mb-2">Create Your Portals</h1>
          <p className="text-sm text-gray-700">
            Start by setting up your feedback portals easily from our platform.
          </p>
        </div>

        
        <div className="text-center flex flex-col items-center">
          <div className="bg-green-500 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl mb-4">
            2
          </div>
          <h1 className="text-2xl font-semibold mb-2">Integrate Into Your Website</h1>
          <p className="text-sm text-gray-700">
            Embed your feedback portals into your website with a simple code snippet.
          </p>
        </div>

        
        <div className="text-center flex flex-col items-center">
          <div className="bg-yellow-500 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl mb-4">
            3
          </div>
          <h1 className="text-2xl font-semibold mb-2">Receive User Feedback</h1>
          <p className="text-sm text-gray-700">
            Start collecting real-time feedback from your users and improve your service.
          </p>
        </div>
      </div>

    
      <div className="flex justify-center pt-16">
        <Image src={bgfeedback} alt="Feedback Flow" className="w-full max-w-5xl rounded-xl" />
      </div> 
    </div>
  );
}
