import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Layout from "../../components/layout/Layout";
import styles from "./home.module.scss";
import Balancer from "react-wrap-balancer";
import { USER_MAIN_DATA } from "../../data/mockedData";
import Users from "../../components/users/Users";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h1>
        Bienvenue sur{" "}
        <span
          arial-label="SportSee est le nom de la marque"
          tabIndex={0}
          className={styles.sportsee}
        >
          SportSee
        </span>
      </h1>
      <p>
        {/* <Balancer> */}
        Projet 12 de la formation de développeur front-end d'
        <span className={styles.openclassrooms}>
          <Link to={"https://openclassrooms.com/fr/"}>OpenClassRoom</Link>
        </span>
        , cette démo met en avant le tableau de bord d'un utilisateur de
        l'application SportSee, une startup dédiée au coaching sportif.
        L’entreprise va aujourd’hui lancer une nouvelle version de la page
        profil de l’utilisateur. Cette page va notamment permettre à
        l’utilisateur de suivre le nombre de sessions réalisées ainsi que le
        nombre de calories brûlées.
        {/* </Balancer> */}
      </p>
      <br />
      <p className={styles.choice}>
        Choisissez un utilisateur ci-dessous pour accéder au tableau de bord:
      </p>

      <div className={styles.users}>
        <Users />
      </div>
    </>
  );
};

export default Home;
