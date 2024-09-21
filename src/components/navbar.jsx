import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../assets/styles/navbar.css';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const applyLoan = ()=>{
    navigate('/loan_page');
  }
  return (
    <nav className="navbar">
      <div className="logo">Finloans</div>
      <div className="hamburger" onClick={handleMenuToggle}>
        &#9776;
      </div>
      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/loan_page">Loan</Link></li>
        <li><Link to="/about_us">About</Link></li>

        <li className="dropdown" onMouseEnter={handleDropdownToggle} onMouseLeave={handleDropdownToggle}>
          <Link to="#blog" className="dropdown-link">Blog</Link>
          {dropdownOpen && (
            <ul className="dropdown-menu">
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/single_blog">Single Blog</Link></li>
            </ul>
          )}
        </li>

        <li><Link to="/faq">FAQ</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <button className="apply-button" onClick={applyLoan}>Apply for a Loan</button>
      </ul>
    </nav>
  );
};

export default Navbar;
