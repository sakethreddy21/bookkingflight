import { Button } from '@/components/ui/button';
import React, { useState } from 'react';
import { ArrowUpDown, Search } from 'lucide-react';
import { DatePicker } from './Datepicker';
import { useRouter } from 'next/navigation';
import AirportCombobox from './AirportSearchBar';
import { useSearchParams } from 'next/navigation';
import { useFlightData } from "@/hooks/dataFetching";


interface searchBarProps {
  show?:boolean,
  handleClose?:any
}

const SearchBar = ({ show = true, handleClose }: searchBarProps) => {
  const { airports, flights, isLoading, hasError } = useFlightData();
  
  const router = useRouter();
  const searchParams = useSearchParams();
  
  const [fromAirport, setFromAirport] = useState(searchParams.get('fromCode') || '');
  const [toAirport, setToAirport] = useState(searchParams.get('toCode') || '');
  const [departureDate, setDepartureDate] = useState<Date | null>(
    searchParams.get('departure') ? new Date(searchParams.get('departure') as string) : null
  );
  const [returnDate, setReturnDate] = useState<Date | null>(
    searchParams.get('return') ? new Date(searchParams.get('return') as string) : null
  );

  const swapAirports = () => {
    setFromAirport((prev) => {
      const temp = toAirport;
      setToAirport(prev);
      return temp;
    });
  };

  const handleSearch = () => {
    if (!fromAirport || !toAirport || !departureDate) {
      alert("Please fill out the From, To, and Departure date fields.");
      return;
    }

    const fromAirportData = airports.find((airport) => airport.code === fromAirport);
    const toAirportData = airports.find((airport) => airport.code === toAirport);

    if (!fromAirportData || !toAirportData) {
      alert("Invalid airports selected.");
      return;
    }

    const queryParams = new URLSearchParams({
      fromName: fromAirportData.name,
      fromCode: fromAirportData.code,
      toName: toAirportData.name,
      toCode: toAirportData.code,
      departure: departureDate.toISOString().split('T')[0],
      return: returnDate ? returnDate.toISOString().split('T')[0] : '',
    }).toString();

    if (handleClose) {
      handleClose();
    }
    
    router.push(`/airports?${queryParams}`);
  };

  return (
    <div className='flex flex-col gap-y-8'>
      {show && <Button className='w-[10%] bg-[#F5F7FA] text-[#000C0B] font-medium text-[16px] hover:bg-[#F5F7FA]'>Flights</Button>}
      
      <div className='flex flex-row gap-[20px] items-center'>
        <div className='flex flex-row gap-[10px] items-center'>
          <AirportCombobox
            placeholderText="Where from"
            airports={airports}
            selectedAirport={fromAirport}
            setSelectedAirport={setFromAirport}
          />

          <Button
            className='flex rounded-full bg-[#F5F7FA] hover:bg-[#F5F7FA] p-[10px] w-[52px] h-[52px]'
            onClick={swapAirports}
          >
            <ArrowUpDown color='#000000' size={20} style={{ transform: 'rotate(90deg)' }} />
          </Button>

          <AirportCombobox
            placeholderText='Where To?'
            airports={airports}
            selectedAirport={toAirport}
            setSelectedAirport={setToAirport} 
          />
        </div>
        
        <div className='flex flex-row gap-[10px] items-center'>
          <DatePicker 
            text='Departure'
            selectedDate={departureDate}
            setSelectedDate={setDepartureDate}
            returnDate={returnDate}
          />

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
          onClick={handleSearch}  
        >
          <Search size={16}/> Search flights
        </Button>
      </div>
    </div>
  );
};

export default SearchBar;
