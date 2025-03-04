const PassiveIncome = () => {
  return (
    <div className="relative  h-[640px]  overflow-hidden bg-[#01204c] ">
      {/* <div className="absolute -right-40 top-3 custom-radial-gradient-purpleWhite opacity-60  z-0"></div>
      <div className="absolute -left-20 -top-20 custom-radial-gradient-Whitepurple opacity-60  z-0"></div>
      <div className="absolute -bottom-10 -left-40 custom-radial-gradient-Whitepurple opacity-60  z-0"></div> */}

      {/* <div className="flex justify-center items-center gap-1 max-w-7xl mx-auto relative  "> */}

      <div className=" text-white text-start   w-[600px]  absolute top-[65px] left-[100px]">
        <div className="flex flex-col gap-20 font-mono">
          <p className="text-5xl text-[#2563EB] font-serif font-bold ml-5 mb-3 ">
            Passive Income Opportunity
          </p>

          <div>
            {/* <p className="font-semibold  text-4xl px-6  my-5 ">
              We have multiple ways to make you rich.{" "}
            </p> */}
            <ul className="list-disc mx-14 hhh text-xl ">
              <li>Buy and stake Sigma tokens for a 25% monthly staking reward.</li>
              <li>Affiliate rewards up to 15-level upline.</li>
              <li>You will get 3X of your investment.</li>
              <li>Minimum investment is $10.</li>
            </ul>
          </div>
          <div className="text-2xl font-bold">
          STAKING REWARDS WILL BE DISTRIBUTED ON A DAILY BASIS.
          </div>
        </div>
      </div>

     

      <img
        src="./leave.jpg"
        className=" h-[770px] w-[900px]  absolute top-[-60px] -right-44 rounded-full"
      />
    </div>
    //   </div>
  );
};
export default PassiveIncome;
