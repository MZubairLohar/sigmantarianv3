import React from "react";

const PaymentMethod = () => {
  return (
    <>
    <div className="relative h-[554px] lg:h-[730px] xl:h-[640px] overflow-hidden bg-[#01204c] text-white">
      {/* <div className="absolute -left-20 -top-20 custom-radial-gradient-Whitepurple opacity-60  z-0"></div>
      <div className="absolute left-72 -bottom-20 custom-radial-gradient-Whitepurple opacity-60  z-0"></div>
      <div className="absolute right-10 top-0 custom-radial-gradient-Whitepurple opacity-60  z-0"></div> */}
      <h1 className=" font-bold font-sans absolute text-2xl top-[10%] left-[10%] md:text-3xl md:top-[17%] lg:left-[15%] lg:top-[12%] lg:text-4xl  xl:text-5xl">
        Payment Method
      </h1>

      <h1 className="font-bold font-sans absolute top-[18%] left-[15%] text-2xl  md:top-[30%] md:left-[19%] md:text-3xl lg:top-[26%] lg:left-[15%] lg:text-4xl text-white">
        Wallet
      </h1>

      <div className=" font-semibold absolute text-xl top-[27%] left-[20%] w-3/5 md:text-xl md:top-[39%] md:left-[16%] md:w-[30%]  lg:text-2xl">
        <ul className="flex justify-between">
          <li className="list-disc">MetaMask.</li>
          <li>
            <img src="./metamask2.png" alt="" srcSet="" className="w-10" />
          </li>
        </ul>
        <ul className="flex justify-between">
          <li className="list-disc">Trust Wallet.</li>
          <li>
            <img
              src="./Screenshot_2024-04-18_222419-removebg-preview.png"
              alt=""
              className="w-10"
            />
          </li>
        </ul>
      </div>
      <h1 className=" font-bold font-sans absolute text-3xl top-[60%] left-[15%] w-[70%] md:top-[60%] md:left-[38%] md:w-[70%]  lg:text-4xl lg:w-[50%] xl:left-[50%]">
        Crypto <span className="text-white">require</span> for package
      </h1>

      <ul className="text-xl font-semibold list-disc font-sans absolute top-[75%]  left-[20%] w-[450px] md:left-[52%] lg:text-2xl lg:top-[70%]">
        <li>USDT</li>
        <li>BNB (smartChain)</li>
      </ul>

      <img
        src="./ss-removebg-preview.png"
        className="absolute left-[70%] top-[70%] w-20 lg:w-[11%] lg:top-[70%] lg:left-[75%] xl:w-[9%]"
        alt=""
      />
    </div>
    <hr className="border-gray-500" />
    </>
  );
};

export default PaymentMethod;
