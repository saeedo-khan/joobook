import { people01, monkkk } from "@/assets";
import Image from "next/image";
import React from "react";
import Button from "./Button";
import { m } from "framer-motion";

const tooltipVariants = {
  hidden: { opacity: 1, y: -10 },
  visible: { opacity: 1, y: 0 },
};
const transition = { duration: 0.3, ease: "easeInOut" };

const Card = () => {
  return (
    <m.div
      // variants={tooltipVariants}
      // initial="hidden"
      // animate="visible"
      className="w-[394px] h-[543px] text-white flex flex-col flex-none rounded-2xl p-4  justify-center bg-gradient-glass"
    >
      <div className="relative w-full h-[250px] rounded-lg flex-none aspect-square">
        <Image src={monkkk} alt="fake" fill className="rounded-lg" />
      </div>
      <div className="grow flex flex-col justify-between">
        <div className="flex items-start gap-3 px-6 pt-5">
          <div className="rounded-full flex-none">
            <Image src={people01} alt="lsdsd" width={40} height={40} />
          </div>
          <div>
            <h3 className="font-normal tracking-wider font-['Oxanium']">
              Monkey Ape
            </h3>
            <p className="text-sm font-normal tracking-wider font-['Lato']">
              By <span className="font-light">@JSmith</span>
            </p>
          </div>
        </div>
        <div className="flex items-start justify-between px-6">
          <div>
            <p className="text-base font-normal font-['Oxanium']">On Sale 🔥</p>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.30826 12.025L8.64993 12.6249C9.50826 13.0083 10.4916 13.0083 11.3583 12.6249L12.6999 12.025C13.8999 11.4916 15.0083 12.9416 14.1749 13.9583L11.2916 17.4833C10.5833 18.3499 9.42493 18.3499 8.70826 17.4833L5.83326 13.9583C4.9916 12.9416 6.09993 11.4916 7.30826 12.025Z"
                    fill="white"
                  />
                  <path
                    d="M7.14156 9.7251C6.89156 9.90843 6.9249 10.2918 7.20823 10.4334L9.16657 11.4084C9.6249 11.6418 10.3666 11.6418 10.8166 11.4084L12.7749 10.4334C13.0499 10.2918 13.0832 9.91676 12.8416 9.7251L10.2499 7.7751C10.0999 7.66676 9.8999 7.66676 9.7499 7.7751L7.14156 9.7251Z"
                    fill="white"
                  />
                  <path
                    d="M14.8998 6.86651L11.4248 2.53318C11.3581 2.44985 11.2831 2.37485 11.2081 2.29985C10.9914 2.09151 10.6831 2.28318 10.6831 2.58318V6.16651C10.6831 6.29985 10.7414 6.42485 10.8498 6.49985L14.3081 9.09985L14.4581 9.20818C14.6081 9.31651 14.8164 9.31651 14.9414 9.18318C15.5248 8.54985 15.5164 7.63318 14.8998 6.86651Z"
                    fill="white"
                  />
                  <path
                    d="M5.09187 6.94154L8.55021 2.54154C8.61687 2.45821 8.68354 2.38321 8.75854 2.30821C8.97521 2.09987 9.28354 2.28321 9.28354 2.59154V6.2332C9.28354 6.36654 9.22521 6.4832 9.11687 6.56654L5.6752 9.2082L5.53354 9.31654C5.38354 9.42487 5.17521 9.42487 5.04187 9.28321C4.47521 8.64154 4.48354 7.72487 5.09187 6.94154Z"
                    fill="white"
                  />
                </svg>
              </span>
              <p className="text-xl font-normal tracking-wide space-x-2 font-['Oxanium']">
                <span>4.89</span>
                <span>ETH</span>
              </p>
            </div>
            <p className="text-sm ml-4 font-normal tracking-wide font-['Oxanium']">
              ($ 456,874.68)
            </p>
          </div>
        </div>
        <div className="px-6">
          <Button>Buy Now</Button>
        </div>
      </div>
    </m.div>
  );
};

export default Card;
