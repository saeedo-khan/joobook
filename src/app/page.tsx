"use client";

import Button from "@/components/Button";
import Card from "@/components/Card";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import styles from "@/style";

export default function Home() {
  return (
    <main className="bg-primary w-full overflow-hidden">
      {/* ///////// NavBar //////// */}
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
      {/* ///////// Hero //////// */}
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`bg-primary ${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>
      <div className="my-auto grid max-w-7xl grid-cols-1 gap-5 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </main>
  );
}
