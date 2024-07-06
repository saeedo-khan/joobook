"use client";

import { logo } from "@/assets";
import { navLinks } from "@/constant";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <div>
        <Image src={logo} alt="logo" height={32} width={124} />
      </div>
      <ul className="list-none sm:flex hidden justify-end items-start flex-1">
        {navLinks.map((nav, index) => (
          <Link
            key={nav.id}
            href={`#${nav.id}`}
            className={`font-poppins text-base cursor-pointer text-white
                ${index == navLinks.length - 1 ? "mr-0" : "mr-10"}
            `}
          >
            <p>{nav.title}</p>
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
