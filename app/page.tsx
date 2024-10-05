"use client"
import SearchBar from "@/components/common/SearchBar";
import { Skeleton } from "@/components/ui/skeleton";
import { useEffect, useState } from "react";

export default function Home() {
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    const currentHour = new Date().getHours();
    
    if (currentHour < 12) {
      setGreeting("Good morning");
    } else if (currentHour < 18) {
      setGreeting("Good afternoon");
    } else {
      setGreeting("Good evening");
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-items-center min-h-screen p-20 font-[family-name:var(--font-geist-sans)] ">
      <div className="text-[#000C0B] text-[36px] font-normal flex flex-row  justify-center items-center">{greeting!==''? `${greeting}, Brian`:(<Skeleton className="h-12 w-[350px]"/>)}</div>

      <div className="h-[265px] border-[#E6E8EB] border-[1px] w-[80%] mt-[30px] rounded-xl p-[24px] shadow-sm">
        <SearchBar />
      </div>
    </div>
  );
}
