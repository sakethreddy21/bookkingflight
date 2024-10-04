'use client'; // Enable client-side behavior

import React, { useEffect, useState } from 'react';
import { useSearchParams } from "next/navigation";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Button } from '@/components/ui/button';
import { Search , X} from 'lucide-react';
import Topbar from '../components/Topbar';

const Page = () => {
    const searchParams = useSearchParams();

    const [isLoading, setIsLoading] = useState(true);
    const [progress, setProgress] = React.useState(13);

    const fromName = searchParams.get('fromName');
    const fromCode = searchParams.get('fromCode');
    const toName = searchParams.get('toName');
    const toCode = searchParams.get('toCode');
    const departure = searchParams.get('departure');
    const returnDate = searchParams.get('return');

    // Function to truncate strings to 20 characters
   

    // Set a timer to stop loading after 5 seconds
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

    // Render the actual page content after the 5-second delay
    return (
        <div className='flex flex-col w-full '>
            <Topbar progress={progress} departure={departure} returnDate={returnDate} fromName={fromName} toName={toName} fromCode={fromCode} toCode={toCode}/>
            {progress !== 100 && <Progress value={progress} className="w-[100%]" />}

            <div className='w-full  px-40 p-4 pt-8 flex flex-col justify-between gap-y-4'>
                <>jdkfjjf</>
                <div className='w-full h-[184px] border-[#E6E8EB] border-2 rounded-lg'>ddk</div>
            </div>
        </div>
    );
};

export default Page;
