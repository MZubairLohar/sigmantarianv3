import Navbar from "../../component/Navbar";

const MissionPage = () => {
  return (
    <div className="bg-[#01204c] overflow-hidden">
      <Navbar />

      {/* Container */}
      <div className="relative min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 md:px-12 lg:px-20 py-12 max-w-full">
        {/* Background Gradients */}
        {/* <div className="absolute left-0 -top-20 w-full custom-radial-gradient3 opacity-60"></div> */}
        <div className="absolute right-0 -bottom-10 w-full custom-radial-gradient-purpleWhiteSmall opacity-60 z-30"></div>

        {/* Spinning Image */}
        <img
          src="./0006-removebg-preview.png"
          className="w-24 sm:w-32 md:w-60 lg:w-80 xl:w-[400px] absolute top-4 right-2 sm:right-4 opacity-30 animate-spin-slow2"
        />

        {/* Content Wrapper */}
        <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-6xl gap-8">
          {/* Mission Section */}
          <div className="text-white flex-1 text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold font-serif mb-6">
              Mission
            </h1>
            <p className="text-sm sm:text-md md:text-lg lg:text-2xl font-extralight font-mono leading-relaxed">
              At Sigmanta, our mission is to empower individuals worldwide by
              leveraging blockchain technology to create a transparent, secure,
              and rewarding affiliate marketing ecosystem. We aim to provide
              equal financial opportunities through crypto-backed income
              generation, ensuring long-term stability and scalability with our
              Sigma Token. By integrating decentralized finance (DeFi) principles,
              we seek to redefine digital entrepreneurship, making financial
              independence accessible to everyone.
            </p>
          </div>

          {/* Vertical Divider (only visible on md screens and above) */}
          <div className="hidden md:block w-[2px] bg-white h-80"></div>

          {/* Overview Section */}
          <div className="text-white flex-1 text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold font-serif mb-6">
              Overview
            </h1>
            <p className="text-sm sm:text-md md:text-lg lg:text-2xl font-extralight font-mono leading-relaxed">
              This affiliate marketing project integrates crypto rewards into a
              structured Affiliate marketing model. Users purchase membership
              packages, and a percentage of the revenue is distributed among
              uplines, special rewards, and liquidity pools as coin backup. Users
              will get a 25% stacking reward monthly as a profit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionPage;
