import React from 'react'
import { Link } from 'react-router-dom';

//CSS
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_l}>
        <h3>This is a footer</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam facilis delectus porro! Incidunt dolores dolore iure voluptatibus nulla quis deserunt, totam velit dignissimos ipsa, inventore ipsum blanditiis vitae pariatur sequi!</p>
      </div>
      <div className={styles.footer_r}>
        <h3>This is a footer</h3>

        <p>
          <Link to="https://www.google.com/maps?q=456+Baker+Street+London">  456 Baker Street London, NW1 6XE, United Kingdom</Link></p>
        <p>Lawyers Website &copy; 2024</p>
      </div>
    </footer >
  )
}

export default Footer