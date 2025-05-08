import Link from "next/link"
import Image from "next/image"
import "../styles/Footer.css"

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footerContent">
          <div className="footerLogo">
            <Link href="/">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2A5IcjbmkJ31j11Qo9cI9f0OYtLg477rOnw&s" alt="Culinary Delights" width={150} height={50} />
            </Link>
            <p>Discover the art of cooking with our expert recipes and culinary tips.</p>
          </div>

          <div className="footerLinks">
            <div className="linkColumn">
              <h4>Quick Links</h4>
              <ul>
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/about">About Us</Link>
                </li>
                <li>
                  <Link href="/recipes">Recipes</Link>
                </li>
                <li>
                  <Link href="/blog">Blog</Link>
                </li>
                <li>
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>
            </div>

            <div className="linkColumn">
              <h4>Categories</h4>
              <ul>
                <li>
                  <Link href="/category/breakfast">Breakfast</Link>
                </li>
                <li>
                  <Link href="/category/lunch">Lunch</Link>
                </li>
                <li>
                  <Link href="/category/dinner">Dinner</Link>
                </li>
                <li>
                  <Link href="/category/desserts">Desserts</Link>
                </li>
                <li>
                  <Link href="/category/vegetarian">Vegetarian</Link>
                </li>
              </ul>
            </div>

            <div className="linkColumn">
              <h4>Legal</h4>
              <ul>
                <li>
                  <Link href="/privacy-policy">Privacy Policy</Link>
                </li>
                <li>
                  <Link href="/terms-of-service">Terms of Service</Link>
                </li>
                <li>
                  <Link href="/cookie-policy">Cookie Policy</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="footerContact">
            <h4>Contact Us</h4>
            <p>Email: info@culinarydelights.com</p>
            <p>Phone: +1 (555) 123-4567</p>
            <div className="socialLinks">
              <Link href="https://facebook.com" aria-label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </Link>
              <Link href="https://twitter.com" aria-label="Twitter">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </Link>
              <Link href="https://instagram.com" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </Link>
              <Link href="https://pinterest.com" aria-label="Pinterest">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0a12 12 0 0 0-4.83 23c-.03-.84-.03-1.87.17-2.65l1.23-5.12s-.3-.6-.3-1.5c0-1.4.81-2.45 1.82-2.45.86 0 1.28.64 1.28 1.41 0 .86-.55 2.14-.83 3.33-.24.98.5 1.77 1.47 1.77 1.76 0 3.12-1.85 3.12-4.54 0-2.37-1.7-4.02-4.13-4.02-2.8 0-4.44 2.1-4.44 4.28 0 .85.33 1.76.74 2.26.08.1.09.19.07.29l-.28 1.1c-.04.18-.15.22-.33.13-1.25-.58-2.03-2.4-2.03-3.87 0-3.13 2.27-6 6.57-6 3.44 0 6.12 2.45 6.12 5.72 0 3.41-2.15 6.17-5.13 6.17-1 0-1.94-.52-2.27-1.13l-.61 2.34c-.22.84-.82 1.9-1.22 2.54A12 12 0 1 0 12 0"></path>
                </svg>
              </Link>
              <Link href="https://youtube.com" aria-label="YouTube">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                </svg>
              </Link>
            </div>
          </div>
        </div>

        <div className="footerBottom">
          <p>&copy; {new Date().getFullYear()} Culinary Delights. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}