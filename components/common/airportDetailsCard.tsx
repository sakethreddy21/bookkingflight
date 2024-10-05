import Emirates from '@/components/icons/emirates'
import React from 'react'
import { Button } from '@/components/ui/button'
import AirportDetalsModal from './AirportDetailsModal'
import { useState } from 'react'
const AirportDetailsCard = ({ flightData }:any) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  return (
    <div className='flex flex-col gap-y-7'>
  {flightData.flights.map((flight:any, index:any) => (
    <div className='w-full h-[184px] border-[#E6E8EB] border-2 rounded-lg flex flex-row'>
    <div className='w-[80%] h-[184px] border-r-[#E6E8EB] border-r-2 p-6 px-8 flex flex-col justify-between'>
        <div className='w-full flex flex-row justify-between'>
<div className='flex flex-row gap-x-2 items-center'>
<Emirates/>
<div className='flex flex-col'>
<div className='text-[#787B80] text-[13px] font-normal'>   {flight.arrival_airline} • {flight.arrival_flight_number}</div>
<div className='text-[#001F1D] font-normal text-[16px]'>    {flight.arrival_flight_departure_time} - {flight.arrival_flight_departure_time}</div>
</div>
</div>
<div className='flex flex-row gap-x-20'>
<div className='flex flex-col'>
<div className='text-[#787B80] text-[13px] font-normal'> {flight.arrival_route}</div>
<div className='text-[#001F1D] font-normal text-[16px]'>{flight.arrival_flight_arrival_duration}</div>
</div>
<div className='flex flex-col justify-end'>
<div className='text-[#001F1D] font-normal text-[16px]'>    {flight.arrival_stops}</div>
</div>
</div>
        </div>
        <div className='w-full flex flex-row justify-between'>
<div className='flex flex-row gap-x-2 items-center'>
<Emirates/>
<div className='flex flex-col'>
<div className='text-[#787B80] text-[13px] font-normal'>   {flight.departure_airline} • {flight.departure_flight_number}</div>
<div className='text-[#001F1D] font-normal text-[16px]'>    {flight.departure_flight_departure_time} - {flight.departure_flight_arrival_time}</div>
</div>
</div>
<div className='flex flex-row gap-x-20   justify-start items-start'>
<div className='flex flex-col'>
<div className='text-[#787B80] text-[13px] font-normal'> {flight.departure_route}</div>
<div className='text-[#001F1D] font-normal text-[16px]'>{flight.departure_duration}</div>
</div>
<div className='flex flex-col justify-end'>
<div className='text-[#001F1D] font-normal text-[16px]'>    {flight.departure_stops}</div>
</div>
</div>
        </div>
     

    </div>
    <div className='flex flex-col h-full justify-end p-4 w-[20%]'>
        <div className='text-[#787B80] text-[14px]'>from</div>
    <div className='text-[#001F1D] text-[20px]'>{flight.total_price}  </div> 
    <Button onClick={()=>{setDrawerOpen(true)} }>Select</Button>
    </div>
</div>
  ))}
  <AirportDetalsModal
 
  drawerOpen={drawerOpen}
  setDrawerOpen={setDrawerOpen}/>
</div>
  )
}

export default AirportDetailsCard