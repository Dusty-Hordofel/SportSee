import React, { useEffect, useState } from "react";
import Title from "../../components/Title/Title";
import { useNavigate, useParams } from "react-router-dom";
import { USER_MAIN_DATA } from "../../data/mockedData";
import {
  getUserActivityData,
  getUserData,
  getUserAverageSession,
  getUserPerformance,
} from "../../api/user";
import styles from "./user.module.scss";
import { useQuery } from "@tanstack/react-query";
import ActivityChart from "../../components/Charts/ActivityChart/ActivityChart";
import {
  useFetchUserActivityData,
  useFetchUserAverageSession,
  useFetchUserData,
  useFetchUserPerformance,
} from "../../hooks/reactQueryCustomHooks";
import AverageSession from "../../components/Charts/AverageSession/AverageSession";
import Performance from "../../components/Charts/performance/Performance";
import NutritionCard from "../../components/Charts/nutritionCard/NutritionCard";
import { Icons } from "../../components/Icons";
import ScoreChart from "../../components/Charts/score/ScoreChart";

const User = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const { userData, userError, isUserLoading } = useFetchUserData(id);
  const { userActivityData, isUserActivityLoading, userActivityError } =
    useFetchUserActivityData(id);

  const {
    userAverageSession,
    isUserAverageSessionLoading,
    userAverageSessionError,
  } = useFetchUserAverageSession(id);

  const { userPerformance, isUserPerformance, userPerformanceError } =
    useFetchUserPerformance(id);

  if (
    isUserLoading ||
    isUserActivityLoading ||
    isUserAverageSessionLoading ||
    isUserPerformance
  ) {
    return <div>Loading...</div>;
  }

  if (
    userError ||
    userActivityError ||
    userAverageSessionError ||
    userPerformanceError
  ) {
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
        <span className={styles.title}>{userData.userInfos.firstName}</span>
      </h1>
      <p className={styles.message}>
        Félicitation ! Vous avez explosé vos objectifs hier 👏
      </p>
      <div className={styles.charts}>
        <div className={styles.leftCharts}>
          <ActivityChart userActivityData={userActivityData} />
          <div className={styles.bottomChart}>
            <AverageSession userAverageSession={userAverageSession} />
            <Performance userPerformance={userPerformance} />
            <ScoreChart userData={userData} />
          </div>
        </div>
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
    </>
  );
};

export default User;
