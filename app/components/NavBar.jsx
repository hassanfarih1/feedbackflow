import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

export default function NavBar({ scrollToDealSection }) {
  return (
    <div className='flex items-center justify-between mx-4 md:mx-32 py-4'>
      <Link href='/'>
        <div className='flex flex-row items-center gap-2 md:gap-4 text-xl md:text-2xl'>
          <img src='/FeedbackFlowLogo.png' width={80} height={80} alt='FeedbackFlow Logo' />
          <p className='text-sm md:text-2xl'>FeedbackFlow</p>
        </div>
      </Link>

      <div>
        <button
          className='bg-colorTextf py-2 px-3 text-sm md:py-2 md:px-4 md:text-base rounded-md'
          onClick={scrollToDealSection}  
        >
          Get lifetime deal
        </button>
      </div>
    </div>
  );
}
