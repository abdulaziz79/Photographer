import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
// import logo from '../../assets/Images/Monla.webp';
import { AiOutlineMenu, AiOutlineClose, AiOutlineShoppingCart } from 'react-icons/ai';
// import Avatar from '@mui/material/Avatar';

const Header = () => {
  const [nav, setNav] = useState(false);

  // Handle menu toggle
  const toggleMenu = () => {
    setNav(!nav);
  };

  // Close the mobile menu on location change
  useEffect(() => {
    setNav(false);
  }, []);

  return (
    <header className={styles.headerContainer}>
      <div className={styles.navbar}>
        {/* Logo */}
        <div>
          {/* <img className={styles.imagee} src={logo} alt="Logo" /> */}
        </div>

        {/* Navigation Links */}
        <div className={styles.whatever}>
          <nav style={{ display: "flex", gap: "2rem" }}>
            <ul className={nav ? [styles.menu, styles.active].join(' ') : styles.menu}>
              {nav && <span className={styles.closeMenu} onClick={toggleMenu}><AiOutlineClose size={25} /></span>}
              <li>
                <a href="#" className={styles.menuItem}>ABOUT ME</a>
              </li>
              <li>
                <a href="#" className={styles.menuItem}>WORKS</a>
              </li>
              <li>
                <a href="#" className={styles.menuItem}>SERVICES</a>
              </li>
              {/* <li>
                <a href="#" className={styles.menuItem}>About</a>
              </li> */}
              <li>
                <a href="#" className={styles.menuItem}>CONTACT</a>
              </li>
            </ul>
          </nav>

          {/* Mobile Menu Toggle */}
          <div onClick={toggleMenu} className={styles.mobile_btn}>
            {nav ? <AiOutlineMenu size={25} style={{ visibility: "hidden" }} /> : <AiOutlineMenu size={25} />}
          </div>

          {/* Cart Icon */}
          {/* <div className={styles.cartIcon}>
            <AiOutlineShoppingCart size={25} className={styles.shopIcon} />
          </div> */}

          {/* Avatar Icon */}
          {/* <Avatar sx={{ cursor: "pointer", backgroundColor: "lightGrey", color: "#163357", height: "2.2rem", width: "2.2rem" }} /> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
