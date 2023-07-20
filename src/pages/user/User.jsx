import React, { useEffect, useState } from "react";
import Title from "../../components/Title/Title";
import { useNavigate, useParams } from "react-router-dom";
import { USER_MAIN_DATA } from "../../data/mockedData";
import { getUserData } from "../../api/user";
import styles from "./user.module.scss";
import { useQuery } from "@tanstack/react-query";
// import { BASE_URL } from "../../config/Config";
// import { API_BASE_URL } from "../../config/Config";

const User = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["userData", id],
    queryFn: () => getUserData(id),
  });
  console.log("🚀 ~ file: User.jsx:27 ~ User ~ data:", data);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>'Erreur lors du chargement des données utilisateur'.</div>;
  }
  //Old way to fetch data
  //   const [userData, setUserData] = useState();
  //   const [isLoading, setIsLoading] = useState(true);
  //   useEffect(() => {
  //     setIsLoading(true);
  //     getUserData(id).then((responseData) => {
  //       setUserData(responseData.data);
  //       setIsLoading(false);
  //     });
  //   }, []);
  //   return <>{isLoading ? <div>Loading...</div> : <h2>{userData.id}</h2>}</>;

  return (
    <>
      <h1>
        Bonjour{" "}
        <span className={styles.title}>{data.data.userInfos.firstName}</span>
      </h1>
      <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
    </>
  );
};

export default User;
