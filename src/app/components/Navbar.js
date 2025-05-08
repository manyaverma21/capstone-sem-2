"use client"

import { useState } from "react"
import Link from "next/link"
import "../styles/Navbar.css"

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <nav className="navbar">
      <div className="container">
        <Link href="/" className="logo">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2A5IcjbmkJ31j11Qo9cI9f0OYtLg477rOnw&s" alt="Culinary Delights" width={150} height={50}/>
        </Link>

        <div className="hamburger" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className={`navLinks ${menuOpen ? styles.active : ""}`}>
          <Link href="/" className="active">
            Home
          </Link>
          <Link href="/">About</Link>
          <Link href="/">Recipes</Link>
          <Link href="/">Blog</Link>
          <Link href="/">Contact</Link>
        </div>

        <div className={`$authButtons ${menuOpen ? styles.active : ""}`}>
          <Link href="/" className="loginBtn">
            Login
          </Link>
          <Link href="/" className="signupBtn">
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  )
}