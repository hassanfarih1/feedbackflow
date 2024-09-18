import Link from 'next/link';
import React from 'react';

export default function Deal({ dealSectionRef }) {
  return (
    <div ref={dealSectionRef} className="p-8 pt-72 pb-48 text-center max-w-screen-xl mx-auto">
      
      <h1 className="text-5xl font-bold mb-6">One payment, lifetime access.</h1>
      <p className="text-lg mb-10 opacity-80">
      Exclusive one-time payment for all Feedbackflow users. No subscriptions — pay once, enjoy forever.
      </p>

    
      <div className="grid md:grid-cols-2 gap-16 p-8 border border-gray-300 rounded-lg space-y-8 md:space-y-0">
        
       
        <div className="text-left space-y-6">
          <h1 className="text-3xl font-semibold">One plan, one decision</h1>
          <p className="text-base opacity-80">
          Unlock advanced features with a paid plan and start gathering valuable feedback from your customers.
          </p>

          <h3 className="text-2xl font-semibold">What's included:</h3>
          <ul className="list-none space-y-3 text-lg">
            <li>✔️ 3 Portals</li>
            <li>✔️ Unlimited users</li>
            <li>✔️ Unlimited feedbacks</li>
            <li>✔️ Email notifications</li>
          </ul>
        </div>


        <div className="text-left flex flex-col items-start justify-center border-l border-gray-300 pl-8 space-y-6">
          <p className="text-lg font-medium opacity-80">
          Minimize churn and create stronger software.
          </p>
          <h1 className="text-4xl font-bold">
            $80 <span className="text-lg font-medium opacity-70 bg-colorTextf rounded-md px-1">one time </span>
            
          </h1>

          <Link href={process.env.NEXT_PUBLIC_API_PAYEMENT}>
            <button className="bg-colorTextf text-black font-bold py-3 px-6 border-none rounded-lg">
              Take Lifetime Deal
            </button>
          </Link>

          <p className="text-sm opacity-80">
          Once you provide your email and secure the lifetime deal, we'll ensure you receive access promptly. <br />
          
          </p>
        </div>
      </div>
    </div>
  );
}
