
import {  useTheme,  } from '@mui/material';
import AddDetailsDrawer from '@/components/common/Drawer';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent, {
    timelineOppositeContentClasses,
  } from '@mui/lab/TimelineOppositeContent';

  import { ArrowLeft } from 'lucide-react';
  

import { Separator } from '../ui/separator';
import Emirates from '../icons/emirates';
import { Button } from '../ui/button';
const AirportDetalsModal = ({
  drawerOpen,
  setDrawerOpen,
  editEnabled,
}:any) => {
  const theme = useTheme();

  const handleDrawerClose = () => {
    // if (reason && reason === 'backdropClick') {
    //   return;
    // }
    setDrawerOpen(false);
  };


  return (
    
    <AddDetailsDrawer
      anchor="right"
      open={drawerOpen}
      onClose={handleDrawerClose}
      height='93%'
      margin='30px'
      width='700px'

    >
     <div className='h-[60%]  w-full flex flex-col gap-y-6  rounded-xl p-6 shadow-sm z-[9999999] ' >
     <Button className='flex w-8 h-8 rounded-full bg-[#F5F7FA] p-2  hover:bg-[#F5F7FA]' onClick={handleDrawerClose}>
       <ArrowLeft size={16} color='#000000'/>
     </Button>
<div className='text-[20px] font-medium'>Flight Details</div>
<Separator className='w-full'/>

<div className='flex w-[600px] flex-row  justify-between'>

<Timeline
      sx={{
        [`& .${timelineOppositeContentClasses.root}`]: {
            flex: 0,
            padding: 0,
        },
        [`$ . ${timelineOppositeContentClasses}`]:{

        }
      }}
    >
      <TimelineItem>
        <TimelineOppositeContent color="textSecondary">
         
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
            <div className=''><div className='flex flex-col justify-center text-[12px] text-[#787B80]'>Sat 28 Sept • 2:15</div><div  className='text-[14px] text-[#001F1D] font-medium'>DXB • Dubai International Airport</div></div></TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="textSecondary">
     
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
            <div className=''><div  className='flex flex-col justify-center text-[12px] text-[#787B80]'>Sat 28 Sept • 2:15</div><div className='text-[14px] text-[#001F1D] font-medium'>RUH • King Khalid International Airport</div></div></TimelineContent>

      </TimelineItem>
    
      
      <TimelineItem>
      <TimelineOppositeContent color="textSecondary">
         
         </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector sx={{   height:'0px'}} />
          <TimelineDot >
            
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{my:'80px', }}>
        <div ><div className='flex flex-col justify-center text-[12px] text-[#787B80]'>Sat 28 Sept • 2:15</div><div className='text-[14px] text-[#001F1D] font-medium'>RUH • King Khalid International Airport</div></div>

        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
      <TimelineOppositeContent color="textSecondary">
         
         </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot  />
        </TimelineSeparator>
        <TimelineContent> <div ><div className='flex flex-col justify-center text-[12px] text-[#787B80]'>Sat 28 Sept • 2:15</div><div className='text-[14px] text-[#001F1D] font-medium'>RUH • King Khalid International Airport</div></div>
        </TimelineContent>
      </TimelineItem>
      
    </Timeline>
   
<div className='flex flex-col justify-between items-start h-full py-10'>
    <div className='flex flex-row gap-x-2' >
<Emirates/>
<div className='flex flex-col text-[#484A4D] text-[12px] font-normal '>
    <div>Saudi Arabian Airlines SV553</div>
    <div>Economy</div>
    <div>Flight time 3h 45m</div></div></div>
    <div className='flex flex-row gap-x-2' >
<Emirates/>
<div className='flex flex-col text-[#484A4D] text-[12px] font-normal '>
    <div>Saudi Arabian Airlines SV553</div>
    <div>Economy</div>
    <div>Flight time 3h 45m</div></div></div></div>
    
</div>
       
     </div>
    </AddDetailsDrawer>
 
  );
};

export default AirportDetalsModal;
