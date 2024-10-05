"use client";

import * as React from "react";
import { Check, ChevronsUpDown , ChevronDown} from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";

export default function AirportCombobox({
  placeholderText,
  airports,
  selectedAirport,
  setSelectedAirport,
}: any) {
  const [open, setOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [value, setValue] = useState(selectedAirport || "");
  const inputRef = useRef<HTMLInputElement>(null);
  const [filteredAirports, setFilteredAirports] = useState([]);

  console.log(selectedAirport)

  // Focus input when component mounts
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  // Update filtered airports based on the search term
  useEffect(() => {
    const searchTermLower = searchTerm.toLowerCase();
    const filtered = airports.filter((airport: any) => {
      // Check if the search term is included in the city or country
      return (
        airport.city.toLowerCase().includes(searchTermLower) ||
        airport.country.toLowerCase().includes(searchTermLower)
      );
    });
    setFilteredAirports(filtered);
  }, [searchTerm, airports]);

  // Sync the value with selectedAirport prop
  useEffect(() => {
    setValue(selectedAirport || "");
  }, [selectedAirport]);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[260px] h-[60px] justify-between"
        >
          <div className="flex flex-row gap-x-[10px]">
            {!value && (
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10.0002 0.833313C10.4604 0.833313 10.8335 1.20641 10.8335 1.66665V2.54575C14.3098 2.93004 17.0701 5.6903 17.4544 9.16665H18.3335C18.7937 9.16665 19.1668 9.53974 19.1668 9.99998C19.1668 10.4602 18.7937 10.8333 18.3335 10.8333H17.4544C17.0701 14.3097 14.3098 17.0699 10.8335 17.4542V18.3333C10.8335 18.7935 10.4604 19.1666 10.0002 19.1666C9.53992 19.1666 9.16683 18.7935 9.16683 18.3333V17.4542C5.69048 17.0699 2.93023 14.3097 2.54594 10.8333H1.66683C1.20659 10.8333 0.833496 10.4602 0.833496 9.99998C0.833496 9.53974 1.20659 9.16665 1.66683 9.16665H2.54594C2.93023 5.6903 5.69048 2.93004 9.16683 2.54575V1.66665C9.16683 1.20641 9.53992 0.833313 10.0002 0.833313ZM10.0002 4.16665C6.7785 4.16665 4.16683 6.77832 4.16683 9.99998C4.16683 13.2216 6.7785 15.8333 10.0002 15.8333C13.2218 15.8333 15.8335 13.2216 15.8335 9.99998C15.8335 6.77832 13.2218 4.16665 10.0002 4.16665ZM10.0002 8.33331C9.07969 8.33331 8.3335 9.0795 8.3335 9.99998C8.3335 10.9205 9.07969 11.6666 10.0002 11.6666C10.9206 11.6666 11.6668 10.9205 11.6668 9.99998C11.6668 9.0795 10.9206 8.33331 10.0002 8.33331ZM6.66683 9.99998C6.66683 8.15903 8.15921 6.66665 10.0002 6.66665C11.8411 6.66665 13.3335 8.15903 13.3335 9.99998C13.3335 11.8409 11.8411 13.3333 10.0002 13.3333C8.15921 13.3333 6.66683 11.8409 6.66683 9.99998Z"
                  fill="#C9CACC"
                />
              </svg>
            )}
            {value ? (
              <div className="flex flex-col justify-start">
                <div className="flex justify-start text-[#787B80] text-[12px] font-normal">
                  {placeholderText}
                </div>
                <div className="text-[#001F1D] font-medium text-[16px]">
                  {`${airports.find((airport: any) => airport.code === value)?.city}, ${airports.find(
                    (airport: any) => airport.code === value
                  )?.country}`}
                </div>
              </div>
            ) : (
              placeholderText
            )}
          </div>
          <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[260px] p-0">
        <Command>
          <CommandInput
            ref={inputRef}
            placeholder="Search airport..."
            value={searchTerm}
            onValueChange={setSearchTerm}
          />
          <CommandList>
            <CommandEmpty>No airport found.</CommandEmpty>
            <CommandGroup>
              {filteredAirports.length > 0 ? (
                filteredAirports.map((airport: any) => (
                  <CommandItem
                    key={airport.code}
                    value={airport.code}
                    onSelect={(currentValue) => {
                      console.log(`Selected Airport: ${airport.city}, ${airport.country}`); // Log selected airport
                      setValue(currentValue === value ? "" : currentValue);
                      setSelectedAirport(currentValue === value ? "" : currentValue);
                      setOpen(false);
                      setSearchTerm(""); // Clear the search term after selection
                    }}
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        value === airport.code ? "opacity-100" : "opacity-0"
                      )}
                    />
                    <div className="flex flex-row w-full justify-between">
                      <div className="flex flex-col"> 
                        <div className="text-[#2B2B2B] text-[14px] " >
{`${airport.city},` }
                        </div>
                        <div className="text-[#787B80] text-[12px]">
                       {` ${airport.country}`}
                        </div>
                      </div >
                      <div className="text-[#2B2B2B] text-[14px]" >{` ${airport.code}`}</div>
                      
                    </div>
                    
                  </CommandItem>
                ))
              ) : (
                <div>No airports found.</div>
              )}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
