import React from "react";
import { USER_MAIN_DATA } from "../../data/mockedData";
import { Link } from "react-router-dom";
import styles from "./users.module.scss";

const Users = () => {
  const UsersData = USER_MAIN_DATA;

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
