import styles from "../styles/page.module.css";
import Navbar from "@/component/Navbar";

export default function Home() {
  console.log("THis is Main page");
  return (
    <main className={`${styles.main} bg-light w-full min-h-screen`}>
      <Navbar />
      Home
    </main>
  );
}
