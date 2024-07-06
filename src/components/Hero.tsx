import { discount } from "@/assets";
import styles from "@/style";
import Image from "next/image";
import React from "react";
import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <Image src={discount} alt="discount" width={32} height={32} />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">20%</span> Discount For{" "}
            <span className="text-white">1 Month</span> Account
          </p>
        </div>
        <div className="flex flex-row justify-between items-center gap-4">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            The Next <br />
            <span className="text-gradient">Generation</span>{" "}
          </h1>
          <div>
            <GetStarted />
          </div>
        </div>
        <h1 className="font-poppins font-semibold text-[52px] text-white leading-[75px] w-full">
          Payment Method.
        </h1>
      </div>
      <div></div>
      <div></div>
    </section>
  );
};

export default Hero;
