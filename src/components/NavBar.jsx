import { NavLink } from 'react-router-dom'
import React, { useState } from 'react';
//CSS
import styles from './Navbar.module.css'
import Sidebar from './Sidebar';

const NavBar = () => {
  const [hoveredLink, setHoveredLink] = useState(null);

  const handleMouseEnter = (link) => {
    setHoveredLink(link);
  };

  const handleMouseLeave = () => {
    setHoveredLink(null);
  };

  const [isOpen, setIsOpen] = useState(false)

  const openSidebar = () => {
    setIsOpen(true)
  }
  const closeSidebar = () => {
    setIsOpen(false)
  }
  return (
    <nav className={styles.navbar}>
      <NavLink to='/' className={styles.brand}>
        Logo <span >Lawyers</span>
      </NavLink>
      <ul className={styles.links_list} >
        <li>
          <NavLink
            to='/'
            className={({ isActive }) => `${isActive ? (hoveredLink ? styles.hover : styles.active) : ''} `}
            onMouseEnter={() => handleMouseEnter('/')}
            onMouseLeave={handleMouseLeave}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/about'
            className={({ isActive }) => `${isActive ? (hoveredLink ? styles.hover : styles.active) : ''}`}
            onMouseEnter={() => handleMouseEnter('/about')}
            onMouseLeave={handleMouseLeave}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/contact'
            className={({ isActive }) => `${isActive ? (hoveredLink ? styles.hover : styles.active) : ''} `}
            onMouseEnter={() => handleMouseEnter('/contact')}
            onMouseLeave={handleMouseLeave}
          >
            Contact
          </NavLink>
        </li>
      </ul >
      <div className={styles.menu} onClick={() => isOpen ? closeSidebar() : openSidebar()}>
        <span className="material-symbols-outlined">menu</span>
      </div>
      <Sidebar isOpen={isOpen} closeSidebar={closeSidebar} />
    </nav >
  )
}

export default NavBar