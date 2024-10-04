import React from 'react'
import { Separator } from "@/components/ui/separator";
import { Button } from '@/components/ui/button';
import { Search , X} from 'lucide-react';

const Topbar = ({progress, departure, returnDate, fromCode, fromName, toCode, toName}:any) => {
    const truncateString = (str: string | null, maxLength: number) => {
        if (!str) return '';
        return str.length > maxLength ? str.slice(0, maxLength) + '...' : str;
    };

    // Function to format dates to "MMM DD"
    const formatDate = (dateString: string | null) => {
        if (!dateString) return '';
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    };
  return (
    <div className={`w-full h-[100px] ${progress === 100 && 'border-b-[2px] border-[#E6E8EB]'} px-40 p-4 pt-8 flex justify-between`}>
    <div className='flex flex-row w-[662px] h-[50px] rounded-3xl border-2 border-[#E6E8EB] pl-5 px-2 p-2 justify-between items-center'>
        <div className='flex gap-x-1'>
            <span className='text-[16px] font-medium text-[#001F1D]'>{fromCode}</span> 
            <span className='text-[16px] font-normal text-[#787B80]'>{truncateString(fromName, 20)}</span>
        </div>
        <Separator orientation="vertical" />
        <div className='flex gap-x-1'>
            <span className='text-[16px] font-medium text-[#001F1D]'>{toCode}</span> 
            <span className='text-[16px] font-normal text-[#787B80]'>{truncateString(toName, 20)}</span>
        </div>
        <Separator orientation="vertical" />
        <div>
            {formatDate(departure)} - {formatDate(returnDate)}
        </div>
        <Separator orientation="vertical" />
        <Button 
className='w-[34px] h-[34px] p-2 flex justify-center items-center bg-[#E5EBEB]  hover:bg-[#E5EBEB] rounded-full' >
<Search  color='#003E39'/> 
</Button>
    </div>
    <Button 
className='w-[44px] h-[44px] p-1 bg-[#FFFFFF] flex justify-center items-center border-[#E6E8EB] border-[1px] hover:bg-[#FFFFFF] rounded-full' >
<X  color='#787B80'/> 
</Button>
</div>
  )
}

export default Topbar