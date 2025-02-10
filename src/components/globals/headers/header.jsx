import Link from "next/link";
import "./header.css";

export default function Header() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link href="/" className="flex items-center">
          <img src="/images/logo.jpeg" alt="Always Here Logo" className="logo" />
        
        </Link>
      </div>
      <ul className="navbar-links">
        <li><Link href="#" className="navbar-link">How It Works</Link></li>
        <li><Link href="#" className="navbar-link">Our Templates</Link></li>
        <li><Link href="#" className="navbar-link">Need Help</Link></li>
        <li>
          <Link href="./login" className="navbar-link">
          <i className="fa fa-user"></i>
            Login
          </Link>
        </li>
      </ul>
      <div className="navbar-cta-container">
        <Link href="#" className="navbar-cta">Get Started</Link>
      </div>
      <button className="navbar-toggler" aria-label="Toggle navigation">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5M3.75 12h16.5m-16.5 6.75h16.5" />
        </svg>
      </button>
    </nav>
  );
}
