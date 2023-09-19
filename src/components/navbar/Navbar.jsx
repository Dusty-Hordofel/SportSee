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
        <Sidebar />
      </header>
      <div className={styles.container}>
        <main className={styles.children}>{children}</main>
      </div>
    </>
  );
};

export default Navbar;
