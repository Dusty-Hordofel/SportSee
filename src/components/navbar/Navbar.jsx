import React from "react";
import NavMenu from "./NavMenu";
import Logo from "./Logo";
import styles from "./navbar.module.scss";
import Sidebar from "../sidebar/Sidebar";

const Navbar = () => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.headerElements}>
          <Logo />
          <NavMenu />
        </div>
      </header>
      <Sidebar />
    </>
  );
};

export default Navbar;
