import React from "react";
import { USER_MAIN_DATA } from "../../data/mockedData";
import { Link } from "react-router-dom";
import styles from "./users.module.scss";

const Users = ({ usersData }) => {
  let UsersData;

  if (import.meta.env.DEV) {
    // En mode de développement (local), utilisez les données locales (mockées)
    UsersData = USER_MAIN_DATA;
  } else {
    // En production, utilisez les données de l'API réelle
    UsersData = usersData;
  }

  return (
    <ul className={styles.links}>
      {UsersData.map((UserData) => (
        <Link
          to={`/user/${UserData.id}`}
          key={UserData.id}
          className={styles.link}
          aria-label={`Aller sur le profil de ${UserData.userInfos.firstName}`}
        >
          <li> Je veux être {UserData.userInfos.firstName}</li>
        </Link>
      ))}
    </ul>
  );
};

export default Users;

{
  /* {JSON.stringify(import.meta.env.VITE_REACT_API_BASE_URL)} */
}
