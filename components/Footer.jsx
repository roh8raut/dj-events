import Link from "next/link";
import styles from "../styles/Footer.module.css";
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>Footer component. Design and build with love</p>
      <Link href="/about">
        <a>About this project</a>
      </Link>
    </footer>
  );
}
