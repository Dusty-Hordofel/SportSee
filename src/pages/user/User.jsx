import React, { useEffect, useState } from "react";
import Title from "../../components/Title/Title";
import { useNavigate, useParams } from "react-router-dom";
import { USER_MAIN_DATA } from "../../data/mockedData";
import { getUserActivityData, getUserData } from "../../api/user";
import styles from "./user.module.scss";
import { useQuery } from "@tanstack/react-query";
import ActivityChart from "../../components/Charts/ActivityChart/ActivityChart";
// import { BASE_URL } from "../../config/Config";
// import { API_BASE_URL } from "../../config/Config";

const User = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const {
    data: userData,
    isLoading: userError,
    isError: isUserLoading,
  } = useQuery({
    queryKey: ["userData", id],
    queryFn: async () => getUserData(id),
  });
  const {
    data: userActivityData,
    isLoading: isUserActivityLoading,
    isError: userActivityError,
  } = useQuery({
    queryKey: ["userActivityData", id],
    queryFn: async () => getUserActivityData(id),
  });

  console.log(
    "🚀 ~ file: User.jsx:26 ~ User ~ userActivityData:",
    userActivityData
  );

  console.log("🚀 ~ file: User.jsx:27 ~ User ~ userData:", userData);

  if (isUserLoading) {
    return <div>Loading...</div>;
  }

  if (userError) {
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
        <span className={styles.title}>
          {userData.data.userInfos.firstName}
        </span>
      </h1>
      <p className={styles.message}>
        Félicitation ! Vous avez explosé vos objectifs hier 👏
      </p>
      <div>
        <ActivityChart userActivityData={userActivityData} />
      </div>
    </>
  );
};

export default User;
