"use client";

import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react"
import Link from "next/link"
import styles from "./page.module.css"

export default function Navbar() {
   const [isOpen, setIsOpen] = useState(false)

   function handleIsOpen() {
    setIsOpen(!isOpen)
   }

  return (
    <nav className={styles.navbar}>
      {/* Logo */}
      <div className={styles.logo}>
        <Link href="/">FIZA</Link> 
      </div>

      {/* Hamburger and cross button */}
      <div className={styles.menuButton}>
        <button onClick={handleIsOpen}>
          {isOpen ? (
            <RxCross2 className={styles.menuIcon} /> 
          ) : (
            <RxHamburgerMenu className={styles.menuIcon} />
          )}
        </button>
      </div>
     
      {/* Desktop Navigation */}
      <div className={styles.desktopNav}>
        <div className={styles.navLinks}>
          <Link href="/home">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/projects">Projects</Link>
          <Link href={"/experience"}>Experience</Link>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className={styles.mobileNav}>
          <div className={styles.mobileNavLinks}>
            <Link href="/home">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/projects">Projects</Link>
            <Link href={"/experience"}>Experience</Link>
          </div>
        </div>
      )}
    </nav>
  )
}