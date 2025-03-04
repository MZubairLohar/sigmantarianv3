const Ranks = () => {
  return (
    <div className="relative min-h-screen bg-[#01204c] text-white flex flex-col items-center px-4 py-10">
      <h1 className="text-3xl md:text-4xl lg:text-5xl text-blue-600 font-bold text-center font-serif">
        Ranks and Rewards
      </h1>

      <div className="w-full flex justify-center mt-10 overflow-x-auto">
        <table className="w-[90%] md:w-10/12 table-auto border-collapse border border-white font-mono">
          <thead>
            <tr>
              {["Ranks", "Badges", "Target", "Reward", "Line"].map((heading, index) => (
                <th
                  key={index}
                  className="border-[2px] border-blue-500 bg-white text-[#01204C] px-4 md:px-8 lg:px-12 py-4 font-bold text-sm md:text-lg lg:text-2xl"
                >
                  {heading}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="text-center">
            {[
              { rank: "Bronze", badge: "🥉", target: "$10,000", reward: "$1,000", line: "3 Distinct Line" },
              { rank: "Silver", badge: "🥈", target: "$25,000", reward: "$2,500", line: "3 Distinct Line" },
              { rank: "Gold", badge: "🥇", target: "$40,000", reward: "$4,000", line: "3 Distinct Line" },
              { rank: "Platinum", badge: "💎", target: "$60,000", reward: "$6,000", line: "3 Distinct Line" },
              { rank: "Diamond", badge: "🔷", target: "$100,000", reward: "$10,000", line: "3 Distinct Line" },
            ].map((item, index) => (
              <tr key={index} className="border-[3px] border-white border-t-blue-500">
                <td className="px-4 md:px-8 py-4 text-sm md:text-lg lg:text-xl">{item.rank}</td>
                <td className="px-4 md:px-8 py-4 text-sm md:text-lg lg:text-xl">{item.badge}</td>
                <td className="px-4 md:px-8 py-4 text-sm md:text-lg lg:text-xl">{item.target}</td>
                <td className="px-4 md:px-8 py-4 text-sm md:text-lg lg:text-xl">{item.reward}</td>
                <td className="px-4 md:px-8 py-4 text-sm md:text-lg lg:text-xl">{item.line}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Ranks;
