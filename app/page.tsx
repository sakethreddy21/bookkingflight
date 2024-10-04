import SearchBar from "./components/SearchBar";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-items-center min-h-screen p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="text-[#000C0B] text-[36px] font-normal">Good after noon Brain</div>

      <div className="h-[265px] border-[#E6E8EB] border-[1px] w-[80%] mt-[30px] rounded-xl p-[24px] shadow-sm">
        <SearchBar/>
      </div>
    </div>
  );
}
