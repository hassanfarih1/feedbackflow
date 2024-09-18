'use client';

import React, { useState, useEffect } from 'react';
import Lottie from 'lottie-react';
import animation from '../../app/assets/Animation1.json';
import { supabase } from '../../lib/supabaseClient';  

export default function Hero() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [isAnimationLoaded, setIsAnimationLoaded] = useState(false);

  useEffect(() => {
    const loadAnimation = () => {
      setIsAnimationLoaded(true);
    };

    const timer = setTimeout(loadAnimation, 300);

    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = async () => {
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const { error } = await supabase
        .from('emails')
        .insert([{ email }]);

      if (error) {
        if (error.code === '23505') {
          setError('This email is already with us.'); // Fixed single quote issue
        } else {
          setError('An error occurred. Please try again.'); // Fixed single quote issue
        }
      } else {
        setSuccess('Welcome with us!'); // Fixed single quote issue
        setEmail(''); 
      }
    } catch (err) {
      setError('An unexpected error occurred. Please try again.'); // Fixed single quote issue
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-between mx-4 md:mx-32 pt-16 md:pt-20 gap-8">
      <div className="space-y-4 md:space-y-6">
        <h1 className="text-3xl md:text-5xl font-bold">
          Collect Meaningful Feedback from Players to Improve Your Crypto Game
        </h1>
        <p className="text-base text-gray-600 md:text-lg pt-1 md:pt-8">
          Understand what your players really think and make data-driven decisions to optimize your crypto game&apos;s experience. {/* Escaped single quote */}
        </p>
        
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mt-4 md:mt-9">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-2 border border-gray-300 rounded-md w-full md:w-80 text-base md:text-lg"
          />
          <button
            onClick={handleSubmit}
            disabled={loading}
            className="bg-colorTextf py-2 px-4 md:px-6 rounded-md hover:bg-purple-500 text-base md:text-lg"
          >
            {loading ? 'Submitting...' : 'Get Early Access'}
          </button>
        </div>

        {error && <p className="text-red-500">{error}</p>}
        {success && <p className="text-green-500">{success}</p>}
      </div>

      <div className="flex justify-center md:justify-end relative">
        {!isAnimationLoaded && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 border-4 border-t-4 border-gray-200 border-t-colorTextf rounded-full animate-spin"></div>
          </div>
        )}
        {isAnimationLoaded && (
          <Lottie animationData={animation} loop={true} className="w-full md:w-96" />
        )}
      </div>
    </div>
  );
}
