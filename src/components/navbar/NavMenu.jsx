import React from "react";
import { Link } from "react-router-dom";
import styles from "./navbar.module.scss";

const NavMenu = () => {
  return (
    <nav className={styles.navigation}>
      <ul className={styles.navigationList}>
        <li
          className={styles.navigationItem}
          aria-label="Cliquez sur Accueil pour vous rendre sur la page d'accueil"
          tabIndex={0}
        >
          <Link to="/" className={styles.navigationLink}>
            Accueil
          </Link>
        </li>
        <li
          className={styles.navigationItem}
          aria-label="Cliquez sur Profil pour vous rendre sur la page Profil"
          tabIndex={0}
        >
          <Link to="/profil" className={styles.navigationLink}>
            Profil
          </Link>
        </li>
        <li
          className={styles.navigationItem}
          aria-label="Cliquez sur Réglage pour vous rendre sur la page Réglage"
          tabIndex={0}
        >
          <Link to="/reglage" className={styles.navigationLink}>
            Réglage
          </Link>
        </li>
        <li
          className={styles.navigationItem}
          aria-label="Cliquez sur Communauté pour vous rendre sur la page Communauté"
          tabIndex={0}
        >
          <Link to="/communaute" className={styles.navigationLink}>
            Communauté
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavMenu;
