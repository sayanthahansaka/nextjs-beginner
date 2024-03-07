import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
    <h1>Home Page</h1>
    <hr />
    <ul className="body">
      <li><Link href="/" className={styles.link}>Home</Link></li>
      <li><Link href="/About">About</Link></li>
      <li><Link href="/Login">Login</Link></li>
      <li><Link href="/Produts">Produts</Link></li>
      <li><Link href="/Services">Services</Link></li>
      <li><Link href="https://nextjs.org/" target="_blank" id={styles.siteLink}>Nextjs</Link></li>
    </ul>
    </>
    
  );
}
