import React from 'react'
import styles from './Header.module.css'

const Header = () => {
  return (
    <header className={styles['header']}>
      <h1 className={styles['header__title']}>WEATHERITE</h1>
      <nav className={styles['header__nav']}>
        <ul className={`${styles['nav__nav-list']} aleo-h5-16`}>
          <li><a href="#weather">Weather</a></li>
          <li><a href="#forecast">Forecast</a></li>
          <li><a href="#map">Map</a></li>
        </ul>
      </nav>
      <section className={styles['header__profile']}>
        <p className={`${styles['profile__name']} outfit-h5-16`}>Joshua White</p>
        <figure className={styles['header__figure']}>
          <div style={{ color: 'dodgerblue' }}></div>
          {/* <img /> */}
        </figure>
      </section>
    </header>
  )
}

export default Header