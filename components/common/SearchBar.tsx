"use client"
import { Button } from '@/components/ui/button'
import React, { useState } from 'react'
import { ArrowUpDown, Search } from 'lucide-react';
import { flightdata } from '@/lib/constants'
import { DatePicker } from './Datepicker';
import { useRouter } from 'next/navigation';
import AirportCombobox from './AirportSearchSelector';
import { useSearchParams } from 'next/navigation';

interface searchBarProps{
  show?:Boolean
}

const SearchBar = ({show=true}:searchBarProps) => {
  const router = useRouter(); // Next.js router for navigation
const searchParams= useSearchParams()
  const [fromAirport, setFromAirport] = useState(searchParams.get('fromCode') || '');
  const [toAirport, setToAirport] = useState(searchParams.get('toCode') || '');
  const [departureDate, setDepartureDate] = useState<Date | null>(
    searchParams.get('departure') ? new Date(searchParams.get('departure') as string) : null
  );
  const [returnDate, setReturnDate] = useState<Date | null>(
    searchParams.get('return') ? new Date(searchParams.get('return') as string) : null
  );

  // Function to swap "from" and "to" values
  const swapAirports = () => {
    setFromAirport((prev: any) => {
      const temp = toAirport;
      setToAirport(prev);  // swap to value to "from"
      return temp;         // swap "from" value to "to"
    });
  };

  console.log(fromAirport)

  // Function to handle the search button click
  const handleSearch = () => {
    // Check if "fromAirport", "toAirport", and "departureDate" are filled
    if (!fromAirport || !toAirport || !departureDate) {
      alert("Please fill out the From, To, and Departure date fields.");
      return;
    }

    // Extracting airport name and code
    const fromAirportData = flightdata.airports.find(airport => airport.code === fromAirport);
    const toAirportData = flightdata.airports.find(airport => airport.code === toAirport);

    if (!fromAirportData || !toAirportData) {
      alert("Invalid airports selected.");
      return;
    }

    // Prepare query parameters
    const queryParams = new URLSearchParams({
      fromName: fromAirportData.name,  // Add airport name
      fromCode: fromAirportData.code,   // Add airport code
      toName: toAirportData.name,        // Add airport name
      toCode: toAirportData.code,        // Add airport code
      departure: departureDate.toISOString().split('T')[0], // Format date to YYYY-MM-DD
      return: returnDate ? returnDate.toISOString().split('T')[0] : '', // Optional return date
    }).toString();

    // Push the query params to the URL
    router.push(`/airports?${queryParams}`);
  };

  return (
    <div className='flex flex-col gap-y-8'>
      {show &&   <Button className='w-[10%] bg-[#F5F7FA] text-[#000C0B] font-medium text-[16px] hover:bg-[#F5F7FA]'>Flights</Button> }
    
      <div className='flex flex-row gap-[20px] items-center'>
        <div className='flex flex-row gap-[10px] items-center'>
        <AirportCombobox
  placeholderText="Where from"
  airports={flightdata.airports} // array of airports
  selectedAirport={fromAirport}
  setSelectedAirport={setFromAirport}
/>

          <Button
            className='flex rounded-full bg-[#F5F7FA] hover:bg-[#F5F7FA] p-[10px] w-[52px] h-[52px]'
            onClick={swapAirports}  // swap function called on click
          >
            <ArrowUpDown color='#000000' size={20} style={{ transform: 'rotate(90deg)' }} />
          </Button>

          {/* "Where To" dropdown */}
          <AirportCombobox
            placeholderText='Where To?'
            airports={flightdata.airports}
            selectedAirport={toAirport}
            setSelectedAirport={setToAirport}  // function to update "to"
          />
        </div>
        <div className='flex flex-row gap-[10px] items-center'>
          <DatePicker 
            text='Departure'
            selectedDate={departureDate}
            setSelectedDate={setDepartureDate}
            returnDate={returnDate}
          />

          {/* Return Date */}
          <DatePicker 
            text='Return'
            selectedDate={returnDate}
            setSelectedDate={setReturnDate}
            departureDate={departureDate}
          />
        </div>
      </div>

      <div className='flex justify-end pr-2 pt-2'>
        <Button 
          className='w-[270px] h-[48px] flex flex-row gap-x-2 bg-[#003E39] text-[#FFFFFF] font-medium text-[16px] hover:bg-[#003E39]' 
          onClick={handleSearch}  // Call handleSearch on click
        >
          <Search size={16}/> Search flights
        </Button>
      </div>
    </div>
  )
}

export default SearchBar
