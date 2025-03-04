const Freedom = () => {
  return (
    <div className="relative min-h-screen bg-[#01204c] flex flex-col justify-center items-center px-6 md:px-12 lg:px-20 py-12">
      <div className="absolute -left-20 -top-20 custom-radial-gradient3 opacity-60"></div>
      <div className="absolute right-0 -bottom-10 custom-radial-gradient-purpleWhiteSmall opacity-60 z-30"></div>

      <img
        src="./0006-removebg-preview.png"
        className="w-32 md:w-60 lg:w-96 opacity-30 animate-spin-slow2 absolute top-14 right-4"
      />

      <div className="max-w-4xl text-white text-center md:text-left space-y-8">
        <h1 className="text-4xl md:text-5xl font-serif font-semibold leading-snug">
          <span className="text-red-500">HOW </span> YOU
          <span className="text-red-500"> GET </span> <br />
          FINANCIAL <br />
          <span className="text-red-500">FREEDOM</span>
        </h1>

        <p className="text-lg md:text-xl lg:text-2xl font-extralight font-mono leading-relaxed">
          Unlock Your Earning Potential! By purchasing a Sigmanta package, you gain
          access to a highly rewarding affiliate program backed by crypto. Earn passive
          income up to 25% monthly in tokens and swap them where you want through our
          automated smart contract system. Receive recurring rewards and build wealth
          effortlessly. No middlemen, no delays—just direct crypto earnings to your wallet!
        </p>
      </div>
    </div>
  );
};

export default Freedom;
