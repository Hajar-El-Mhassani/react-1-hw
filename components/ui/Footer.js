"use client";

import { usePathname } from "next/navigation";
import styles from "./Footer.module.css";
import Link from "next/link";
import SocialMediaItem from "./SocialMediaItem";

const socialMediaLinks = [
  {
    url: "https://linkedin.com",
    title: "LinkedIn",
    icon: "/socialMedia/linkdin.png",
  },
  {
    url: "https://facebook.com",
    title: "Facebook",
    icon: "/socialMedia/facebook.png",
  },
  {
    url: "https://instagram.com",
    title: "Instagram",
    icon: "/socialMedia/instagram.png",
  },
  {
    url: "https://tiktok.com",
    title: "TikTok",
    icon: "/socialMedia/tiktok.png",
  },
  {
    url: "https://google.com",
    title: "Google",
    icon: "/socialMedia/google.png",
  },
];
export const Footer = () => {
  const path = usePathname().split("?")[0];
  return (
    <footer className={path !== "/" ? styles.footer : styles.hidden}>
      <div className={styles.footerDescription}>
        <h3>Galactica</h3>
        <p>
          Explore the universe and beyond. Your journey to the stars starts
          here.
        </p>
        <p>&copy; 2024 Galactica. All rights reserved.</p>
      </div>
      {/* TASK - React 1 week 2 */}

      {/* Create a new List for the Pages */}
      {/* We need to use the <Link /> component here */}
      <div className={styles.pages}>
        <h3>Pages</h3>
        <ul className={styles.pagesList}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about_us">About Us</Link>
          </li>
          <li>
            <Link href="/destination">Destination</Link>
          </li>
          <li>
            <Link href="/nasa_collaboration">Nasa Collaboration</Link>
          </li>
        </ul>
      </div>
      {/* Docs for the Link: https://nextjs.org/docs/pages/api-reference/components/link */}

      {/* TASK - React 1 week 2 */}
      {/* Create a new List for the Social Media */}
      <div className={styles.footerLinks}>
        <h3>Follow us</h3>
        <ul className={styles.footerList}>
          {socialMediaLinks.map((link, index) => (
            <SocialMediaItem
              key={index}
              url={link.url}
              title={link.title}
              icon={link.icon}
            />
          ))}
        </ul>
      </div>
    </footer>
  );
};
