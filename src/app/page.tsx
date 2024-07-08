"use client";

import Button from "@/components/Button";
import Card from "@/components/Card";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import styles from "@/style";

export default function Home() {
  return (
    <main className="bg-primary w-full overflow-hidden h-screen">
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
        <Card />
      </div>
    </main>
  );
}
