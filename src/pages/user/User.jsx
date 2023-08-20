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
// import ActivityChart from "../../components/Charts/activity/ActivityChart";
// import Performance from "../../components/Charts/performance/Performance";
// import AverageSession from "../../components/Charts/session/AverageSession";
// import NutritionCard from "../../components/Charts/nutritionCard/NutritionCard";
// import {
//   useFetchUserActivityData,
//   useFetchUserAverageSession,
//   useFetchUserData,
//   useFetchUserPerformance,
// } from "../../hooks/reactQueryCustomHooks";

// import ActivityChart from "../../components/Charts/ActivityChart/ActivityChart";
// import Performance from "../../components/Charts/performance/Performance";
// import AverageSession from "../../components/Charts/AverageSession/AverageSession.jsx";
// // import NutritionCard from "../../components/Charts/nutritionCard/NutritionCard";
// // import {
// //   useFetchUserActivityData,
// //   useFetchUserAverageSession,
// //   useFetchUserData,
// //   useFetchUserPerformance,
// // } from "../../hooks/reactQueryCustomHooks";
// import { Icons } from "../../components/Icons";

const User = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const { userData, userError, isUserLoading } = useFetchUserData(id);
  // console.log("🚀 ~ file: User.jsx:23 ~ User ~ userData:", userData);
  const { userActivityData, isUserActivityLoading, userActivityError } =
    useFetchUserActivityData(id);

  // const {
  //   data: userData,
  //   isLoading: userError,
  //   isError: isUserLoading,
  // } = useQuery({
  //   queryKey: ["userData", id],
  //   queryFn: async () => getUserData(id),
  // });
  // const {
  //   data: userActivityData,
  //   isLoading: isUserActivityLoading,
  //   isError: userActivityError,
  // } = useQuery({
  //   queryKey: ["userActivityData", id],
  //   queryFn: async () => getUserActivityData(id),
  // });
  // console.log(
  //   "🚀 ~ file: User.jsx:32 ~ User ~ userActivityData:",
  //   userActivityData
  // );

  const {
    userAverageSession,
    isUserAverageSessionLoading,
    userAverageSessionError,
  } = useFetchUserAverageSession(id);

  const { userPerformance, isUserPerformance, userPerformanceError } =
    useFetchUserPerformance(id);
  // console.log(
  //   "🚀 ~ file: User.jsx:39 ~ User ~ userPerformance:",
  //   userPerformance
  // );

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

  // console.log(
  //   "🚀 ~ file: User.jsx:42 ~ User ~ userAverageSession:",
  //   userAverageSession
  // );

  // console.log(
  //   "🚀 ~ file: User.jsx:41 ~ User ~ userAverageSession:",
  //   userAverageSession
  // );

  // const {
  //   data: userPerformance,
  //   isLoading: isUserPerformance,
  //   isError: userPerformanceError,
  // } = useQuery({
  //   queryKey: ["userPerformance", id],
  //   queryFn: async () => getuserPerformance(id),
  // });
  // console.log(
  //   "🚀 ~ file: User.jsx:49 ~ User ~ userPerformance:",
  //   userPerformance
  // );

  // if (isUserLoading) {
  //   return <div>Loading...</div>;
  // }

  // if (userError) {
  //   return <div>'Erreur lors du chargement des données utilisateur'.</div>;
  // }
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
      {/* <div>
        <div>
          <ActivityChart userActivityData={userActivityData} /> */}
      {/* <AverageSession userAverageSession={userAverageSession} /> */}
      {/* <Performance userPerformance={userPerformance} /> */}
      {/* <div className={styles.NutritionCards}>
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
          </div> */}
      {/* </div>
      </div> */}
    </>
  );
};

export default User;
