'use client'; // Enable client-side behavior

import React, { useEffect, useState } from 'react';

import AirportDetailsCard from '../../../components/common/airportDetailsCard';
import { flightDetails } from '@/lib/constants';
import Loading from '../../../components/common/loadcontent'
export default function Airport() {
    // State to manage loading status
    const [isLoading, setIsLoading] = useState(true);

    // Set a timer to stop loading after 5 seconds
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false); // Stop loading after 5 seconds
        }, 0);

        // Cleanup the timer on component unmount
        return () => clearTimeout(timer);
    }, []);

    // Render the actual page content after the 5-second delay
    return (
        <div className='flex flex-col w-full pt-24 scrollbar-hide'>
            {isLoading? <div ><Loading/></div>:<div className='w-full  px-[240px] p-4 pt-8 flex flex-col justify-between gap-y-4'>
                {/* Show loading text if loading, otherwise show the content */}
               
              
                        <div>Showing 356 of 767 results</div>
                        <AirportDetailsCard flightData={flightDetails} />
                 
             
            </div>}
            
        </div>
    );
}
