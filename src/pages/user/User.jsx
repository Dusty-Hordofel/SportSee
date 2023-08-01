import React, { useEffect, useState } from "react";
import Title from "../../components/Title/Title";
import { useNavigate, useParams } from "react-router-dom";
import { USER_MAIN_DATA } from "../../data/mockedData";
import {
  getUserActivityData,
  getUserData,
  getuserAverageSession,
  getuserPerformance,
} from "../../api/user";
import styles from "./user.module.scss";
import { useQuery } from "@tanstack/react-query";
import ActivityChart from "../../components/Charts/activity/ActivityChart";
import Performance from "../../components/Charts/performance/Performance";
import AverageSession from "../../components/Charts/session/AverageSession";
import NutritionCard from "../../components/Charts/nutritionCard/NutritionCard";
import {
  useFetchUserActivityData,
  useFetchUserAverageSession,
  useFetchUserData,
  useFetchUserPerformance,
} from "../../hooks/reactQueryCustomHooks";
import { Icons } from "../../components/Icons";

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
    "🚀 ~ file: User.jsx:32 ~ User ~ userActivityData:",
    userActivityData
  );

  const {
    data: userAverageSession,
    isLoading: isUserAverageSessionLoading,
    isError: userAverageSessionError,
  } = useQuery({
    queryKey: ["userAverageSession", id],
    queryFn: async () => getuserAverageSession(id),
  });

  console.log(
    "🚀 ~ file: User.jsx:42 ~ User ~ userAverageSession:",
    userAverageSession
  );

  // console.log(
  //   "🚀 ~ file: User.jsx:41 ~ User ~ userAverageSession:",
  //   userAverageSession
  // );

  const {
    data: userPerformance,
    isLoading: isUserPerformance,
    isError: userPerformanceError,
  } = useQuery({
    queryKey: ["userPerformance", id],
    queryFn: async () => getuserPerformance(id),
  });
  // console.log(
  //   "🚀 ~ file: User.jsx:49 ~ User ~ userPerformance:",
  //   userPerformance
  // );

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
        <div>
          <ActivityChart userActivityData={userActivityData} />
          <AverageSession userAverageSession={userAverageSession} />
          <Performance userPerformance={userPerformance} />
          <div className={styles.NutritionCards}>
            <NutritionCard
              id={userData.id}
              Icon={Icons.calories}
              keyDataSwitch={[userData.keyData.calorieCount, "kCal"]}
              keyDataType="Calories"
            />
            <NutritionCard
              id={userData.id}
              Icon={Icons.protein}
              keyDataSwitch={[userData.keyData.proteinCount, "g"]}
              keyDataType="Proteines"
            />
            <NutritionCard
              id={userData.id}
              Icon={Icons.carbs}
              keyDataSwitch={[userData.keyData.carbohydrateCount, "g"]}
              keyDataType="Glucides"
            />
            <NutritionCard
              id={userData.id}
              Icon={Icons.fat}
              keyDataSwitch={[userData.keyData.lipidCount, "g"]}
              keyDataType="Lipides"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default User;
