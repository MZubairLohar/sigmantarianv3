const Affiliate = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#01204c] pt-10 px-4">
      {/* Heading */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl text-center text-blue-600 font-semibold font-serif leading-tight">
        Sigma’s total supply is 1B with 20% burning of total supply
      </h1>

      {/* Responsive Container */}
      <div className="flex flex-wrap justify-center text-center text-white gap-8 md:gap-16 mt-16">
        {/* Levels 1-3 */}
        <div className="space-y-6 text-2xl md:text-4xl font-bold font-serif">
          {["Level 1", "Level 2", "Level 3"].map((level, i) => (
            <div key={i} className="bg-blue-400 rounded-full w-36 md:w-52 h-16 md:h-24 flex border-[3px] border-white items-center justify-center">
              {level}
            </div>
          ))}
        </div>

        {/* Percentages 1-3 */}
        <div className="space-y-6 text-xl md:text-3xl font-mono">
          {["18%", "15%", "12%"].map((percent, i) => (
            <div key={i} className="bg-blue-400 rounded-full w-20 md:w-28 h-16 md:h-24 flex items-center justify-center border-[3px] border-white">
              {percent}
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="w-[2px] bg-white hidden md:block"></div>

        {/* Levels 4-9 */}
        <div className="space-y-4 md:space-y-6 text-lg md:text-xl font-bold font-serif">
          {["Level 4", "Level 5", "Level 6", "Level 7", "Level 8", "Level 9"].map((level, i) => (
            <div key={i} className="bg-blue-400 rounded-2xl w-28 md:w-36 h-8 md:h-10 flex items-center justify-center border-[2px] border-white">
              {level}
            </div>
          ))}
        </div>

        {/* Percentages 4-9 */}
        <div className="space-y-4 md:space-y-6 text-lg md:text-xl font-mono font-bold">
          {["10%", "6%", "4%", "2%", "2%", "1.5%"].map((percent, i) => (
            <div key={i} className="bg-blue-400 rounded-lg h-8 md:h-10 w-16 md:w-20 flex items-center justify-center border-[2px] border-white">
              {percent}
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="w-[2px] bg-white hidden md:block"></div>

        {/* Levels 10-15 */}
        <div className="space-y-4 md:space-y-6 text-lg md:text-xl font-bold font-serif">
          {["Level 10", "Level 11", "Level 12", "Level 13", "Level 14", "Level 15"].map((level, i) => (
            <div key={i} className="bg-blue-400 rounded-2xl w-28 md:w-36 h-8 md:h-10 flex items-center justify-center border-[2px] border-white">
              {level}
            </div>
          ))}
        </div>

        {/* Percentages 10-15 */}
        <div className="space-y-4 md:space-y-6 text-lg md:text-xl font-mono font-bold">
          {["1.5%", "1.5%", "1.5%", "1.5%", "1.5%", "2%"].map((percent, i) => (
            <div key={i} className="bg-blue-400 rounded-lg h-8 md:h-10 w-16 md:w-20 flex items-center justify-center border-[2px] border-white">
              {percent}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Affiliate;
