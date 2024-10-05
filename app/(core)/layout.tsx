"use client"
import React, { Suspense, useEffect, useState } from 'react';
import { useSearchParams } from "next/navigation";
import Topbar from '../../components/common/Topbar';
import { Progress } from '@/components/ui/progress';
export default function AirportLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

    const searchParams = useSearchParams();

    const [isLoading, setIsLoading] = useState(true);
    const [progress, setProgress] = React.useState(13);

    const fromName = searchParams.get('fromName');
    const fromCode = searchParams.get('fromCode');
    const toName = searchParams.get('toName');
    const toCode = searchParams.get('toCode');
    const departure = searchParams.get('departure');
    const returnDate = searchParams.get('return');

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval); // Stop the interval if progress reaches 100%
                    setIsLoading(false);      // Hide loading screen after completion
                    return 100;
                }
                return prev + 10; // Increment progress
            });
        }, 500); // Adjust the interval time as needed

        return () => clearInterval(interval); // Cleanup on unmount
    }, []);

  return (
    <html lang="en">
      <body
       >
       
        <div className='flex flex-col w-full ' style={{scrollbarWidth:'none'}}>  
          <div className='z-[99] fixed top-0 w-full '>
          <Suspense fallback={<p>Loading feed...</p>}>
            <Topbar progress={progress} departure={departure} returnDate={returnDate} fromName={fromName} toName={toName} fromCode={fromCode} toCode={toCode}/>
          {progress !== 100 && <Progress value={progress} className="w-[100%]" />}
          </Suspense></div>
        
{children}</div>

      </body> 
    </html>
  );
}
