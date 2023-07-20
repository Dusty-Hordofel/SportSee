import React from "react";
import { Link } from "react-router-dom";
import styles from "./navbar.module.scss";

const NavMenu = () => {
  return (
    <nav className={styles.navigation}>
      <ul className={styles.navigationList}>
        <li className={styles.navigationItem}>
          <a href="/" className={styles.navigationLink}>
            Accueil
          </a>
        </li>
        <li className={styles.navigationItem}>
          <Link href="/profil" className={styles.navigationLink}>
            Profil
          </Link>
        </li>
        <li className={styles.navigationItem}>
          <Link href="/reglage" className={styles.navigationLink}>
            Réglage
          </Link>
        </li>
        <li className={styles.navigationItem}>
          <Link href="/communaute" className={styles.navigationLink}>
            Communauté
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavMenu;
