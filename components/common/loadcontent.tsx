// pages/index.tsx

import * as React from 'react'

import { Button } from '@/components/ui/button'
import LoadingIcon from '@/components/icons/loading'

import { Skeleton } from "@/components/ui/skeleton"
import Box from '@mui/material/Box';
import CircularProgress from '@mui/joy/CircularProgress';

import { useState, useEffect } from 'react';

const LoadingModal = () => {
  const [visibleIndex, setVisibleIndex] = useState(0); // Track the currently visible CircularProgress

  useEffect(() => {
    // Increment the visible index every second
    const interval = setInterval(() => {
      setVisibleIndex((prevIndex) => prevIndex + 1);
    }, 1700);

    // Clean up the interval when component unmounts
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-[99] bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-3 rounded-lg shadow-lg flex flex-col items-center h-[300px] w-[300px] gap-y-4">
        <div className="animate-bounce-horizontal">
          <LoadingIcon />
        </div>

        {/* Loader and text rows */}
        <div className='flex flex-col gap-y-3 justify-center'>
          {/* Row 1: Searching 400+ flights */}
          <div className='flex flex-row items-center gap-x-2'>
            <div style={{ width: '20px', height: '20px' }}>
              {visibleIndex >= 0 && visibleIndex < 1 && (
                <CircularProgress variant="soft" thickness={3} sx={{ '--CircularProgress-size': '20px' }} color='neutral' />
              )}
            </div>
            <div className={` ${visibleIndex >= 0 && visibleIndex < 1  ? 'text-[#787B80]':'text-[#C9CACC]'} font-normal text-[18px]`}>Searching 400+ flights</div>
          </div>

          {/* Row 2: Attaching company rules */}
          <div className='flex flex-row items-center gap-x-2'>
            <div style={{ width: '20px', height: '20px' }}>
              {visibleIndex >= 1 && visibleIndex < 2 && (
                <CircularProgress variant="soft" thickness={3} sx={{ '--CircularProgress-size': '20px' }} color='neutral' />
              )}
            </div>
            <div className={` ${visibleIndex >= 1 && visibleIndex <2 ? 'text-[#787B80]':'text-[#C9CACC]'} font-normal text-[18px]`}>Attaching company rules</div>
          </div>

          {/* Row 3: Serving best results */}
          <div className='flex flex-row items-center gap-x-2'>
            <div style={{ width: '20px', height: '20px' }}>
              {visibleIndex >= 2 && (
                <CircularProgress variant="soft" thickness={3} sx={{ '--CircularProgress-size': '20px' }} color='neutral' />
              )}
            </div>
            <div className={` ${visibleIndex >= 2 ? 'text-[#787B80]':'text-[#C9CACC]'} font-normal text-[18px]`}>Serving best results</div>
          </div>
        </div>

        <div className="loader mt-4"></div> {/* Add loader here if needed */}
      </div>
    </div>
  );
}

export default function Loadng() {
  const [loading, setLoading] = useState(true) // State to toggle modal

  const handleSelectClick = () => {
    setLoading(true) // Show modal on button click

    // Simulate loading process, hide modal after 3 seconds (for demo purposes)
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }

  const components = [1, 2, 3, 4];

  return (
    <div className="relative w-full h-full  justify-center items-center px-40 pt-20 overflow-y-scroll scrollbar-hide"> {/* Container with relative positioning */}
    {components.map((_, index) => (
      <div key={index} className='w-full h-[184px] border-[#E6E8EB] border-2 rounded-lg flex flex-row m-10 '>
        <div className='w-[80%] h-[184px]  p-6 px-8 flex flex-col justify-between'>
          <div className='w-full flex flex-row justify-between'>
            <div className='flex flex-row gap-x-2 items-center'>
              <Skeleton className='h-16 w-16'/>
              <div className='flex flex-col gap-y-4'>
                <div className='text-[#787B80] text-[13px] font-normal'><Skeleton className='w-24 h-3'/></div>
                <div className='text-[#001F1D] font-normal text-[16px]'><Skeleton className=' w-36 h-4'/></div>
              </div>
            </div>
            <div className='flex flex-row gap-x-40'>
              <div className='flex flex-col gap-y-4 p-4'>
                <div className='text-[#787B80] text-[13px] font-normal'> <Skeleton className='w-24 h-3'/></div>
                <div className='text-[#001F1D] font-normal text-[16px]'><Skeleton className='w-36 h-3'/></div>
              </div>
              <div className='flex flex-col justify-end p-4'>
                <div className='text-[#001F1D] font-normal text-[16px]'> <Skeleton className='w-36 h-3'/></div>
              </div>
            </div>
          </div>
          <div className='w-full flex flex-row justify-between'>
            <div className='flex flex-row gap-x-2 items-center'>
              <Skeleton className='h-16 w-16'/>
              <div className='flex flex-col gap-y-2'>
                <div className='text-[#787B80] text-[13px] font-normal'><Skeleton className='w-24 h-3'/></div>
                <div className='text-[#001F1D] font-normal text-[16px]'><Skeleton className=' w-36 h-4'/></div>
              </div>
            </div>
            <div className='flex flex-row gap-x-40'>
              <div className='flex flex-col gap-y-4 p-4'>
                <div className='text-[#787B80] text-[13px] font-normal'> <Skeleton className='w-24 h-3'/></div>
                <div className='text-[#001F1D] font-normal text-[16px]'><Skeleton className='w-36 h-3'/></div>
              </div>
              <div className='flex flex-col justify-end p-4'>
                <div className='text-[#001F1D] font-normal text-[16px]'> <Skeleton className='w-36 h-3'/></div>
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-col h-full justify-end p-4 w-[20%]'>
        
        </div>
      </div>
    ))}
      
      {loading && <LoadingModal />} {/* Conditionally render the loading modal */}
    </div>
  )
}
