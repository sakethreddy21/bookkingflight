"use client";
import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useEffect, useRef, useState } from "react";

export function AripotSelector({
  placeholderText,
  airports,
  selectedAirport,
  setSelectedAirport,
}: any) {

    const inputRef = useRef<HTMLInputElement>(null); 
  const [searchTerm, setSearchTerm] = useState("");

  // Filter airports based on the search term
  const filteredAirports = airports.filter((airport: any) =>
    `${airport.city}, ${airport.country}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    if (inputRef.current) {
        inputRef.current.focus();
    }
}, []);

  return (
    <Select value={selectedAirport} onValueChange={(value) => setSelectedAirport(value)}>
      <SelectTrigger className="w-[260px] h-[60px] flex">
        <div className="flex flex-row gap-x-[10px]">
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

          <SelectValue placeholder={placeholderText} />
        </div>
      </SelectTrigger>

      <SelectContent>
        {/* Search input to filter airports */}
        <div className="p-2">
          <input
            type="text"
            placeholder="Search..."
            className="w-full border border-gray-300 rounded-md p-2"
            ref={inputRef} 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <SelectGroup>
          <SelectLabel>Airports</SelectLabel>
          {/* Render filtered airport options */}
          {filteredAirports.length > 0 ? (
            filteredAirports.map((airport: any) => (
              <SelectItem key={airport.code} value={airport.code}>
                {airport.city}, {airport.country}
              </SelectItem>
            ))
          ) : (
            <div>No airports found.</div>
          )}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
