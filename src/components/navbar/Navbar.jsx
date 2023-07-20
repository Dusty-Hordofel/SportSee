import React from "react";
import NavMenu from "./NavMenu";
import Logo from "./Logo";
import styles from "./navbar.module.scss";
import Sidebar from "../sidebar/Sidebar";
import { Link } from "react-router-dom";

const Navbar = ({ children }) => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.headerElements}>
          <Logo />
          <NavMenu />
        </div>
      </header>
      <div className={styles.container}>
        <Sidebar />
        <main className={styles.children}>{children}</main>
      </div>
    </>
  );
};

export default Navbar;
