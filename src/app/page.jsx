import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
// import { Image } from "next/image";
import img from "../../public/24525.jpg"

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
    <hr />
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias quis est dolorem consectetur eos? Aliquid expedita delectus, illum perferendis veritatis nobis consequuntur minus itaque molestias neque similique voluptates voluptatum magnam.</p>

    <Image
    src={"https://static.vecteezy.com/system/resources/thumbnails/033/662/051/small_2x/cartoon-lofi-young-manga-style-girl-while-listening-to-music-in-the-rain-ai-generative-photo.jpg"}
    style={{width:"100%", height:"100%", objectFit:"cover"}}
    width={1000}
    height={1000}
    />
    <Image
    src={"https://www.brides.com/thmb/UwvnIhuGPsGVVinR7_x5ZkMiZIA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/where-is-sri-lanka-583230783df78c6f6a660e96.jpg"}
    style={{width:"100%", height:"100%", objectFit:"cover"}}
    width={1000}
    height={1000}
    />

    </>
  );
}
