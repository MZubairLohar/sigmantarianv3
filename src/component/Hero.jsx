const Hero = () => {
  return (
    <div className="relative min-h-screen bg-[#01204c] flex flex-col items-center justify-center text-center px-4 md:px-10 lg:px-20 pt-20">
      {/* <div className="absolute -left-20 -top-20 custom-radial-gradient3 opacity-60"></div> */}
      <div className="absolute right-0 -bottom-10 custom-radial-gradient-purpleWhiteSmall opacity-60 z-30"></div>

      <div className="z-10 flex flex-col items-center space-y-4 md:space-y-6">
        <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold font-sans text-white">
          SIGMANTARIAN
        </h1>

        <h2 className="text-lg md:text-2xl lg:text-3xl xl:text-4xl font-bold font-serif text-red-600">
          <span className="text-purple-700">WHERE YOUR FINANCIAL FREEDOM</span> BEGINS
        </h2>

        <p className="max-w-[90%] md:max-w-[60%] lg:max-w-[50%] xl:max-w-[60%] font-serif text-sm md:text-lg lg:text-xl xl:text-2xl text-white font-thin">
          A REVOLUTIONARY CRYPTO MAXIMUM REWARDS & SUSTAINABILITY
        </p>
      </div>

      <img
        src="./0002-removebg-preview.png"
        className="absolute top-32 w-20 md:w-40 lg:w-52 opacity-30 animate-spin-slow"
      />
      <img
        src="./0003-removebg-preview.png"
        className="absolute bottom-10 right-5 w-20 md:w-48 lg:w-60 animate-spin-slow"
      />
    </div>
  );
};

export default Hero;
