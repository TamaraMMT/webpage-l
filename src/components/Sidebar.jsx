import React from 'react'
import { NavLink } from 'react-router-dom'

import styles from './Sidebar.module.css'

const Sidebar = ({ isOpen, closeSidebar }) => {
  return (
    <div className={`${styles.sidebar} ${isOpen && styles.open}`}>

      <div className={styles.close_icon}>
        <span className="material-symbols-outlined" onClick={closeSidebar}>
          close
        </span>
      </div>
      <ul className={styles.links_list} onClick={closeSidebar}>
        <li>
          <NavLink to='/' className={({ isActive }) => (isActive) ? styles.activeLink : ''}  >Home</NavLink>
        </li>
        <li>
          <NavLink to='/about' className={({ isActive }) => (isActive) ? styles.activeLink : ''}  >About</NavLink>
        </li>
        <li>
          <NavLink to='/contact' className={({ isActive }) => (isActive) ? styles.activeLink : ''}  >Contact</NavLink>
        </li>
      </ul >
    </div>
  )
}

export default Sidebar


