import Image from "next/image";
import Navbar from "@/components/Navbar";
import styles from "../style";

export default function Home() {
  return (
    <main className="bg-primary w-full overflow-hidden">
      {/* ///////// NavBar //////// */}
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
    </main>
  );
}
