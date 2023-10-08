import { useQuery } from "@tanstack/react-query";
import {
  getUserActivityData,
  getUserAverageSession,
  getUserData,
  getUserPerformance,
  getUsersData,
} from "../api/user";

export const useFetchUsersData = () => {
  const {
    data: usersData,
    isLoading: isUsersLoading,
    isError: usersError,
  } = useQuery({
    queryKey: ["usersData"],
    queryFn: async () => {
      const data = await getUsersData();
      return data;
    },
  });

  return { usersData, usersError, isUsersLoading };
};

//user data
export const useFetchUserData = (id) => {
  const {
    data: userData,
    isLoading: isUserLoading,
    isError: userError,
  } = useQuery({
    queryKey: ["userData", id],
    queryFn: async () => {
      const { data } = await getUserData(id);
      return data;
    },
  });

  return { userData, userError, isUserLoading };
};

//user activity data
export const useFetchUserActivityData = (id) => {
  const {
    data: userActivityData,
    isLoading: isUserActivityLoading,
    isError: userActivityError,
  } = useQuery({
    queryKey: ["userActivityData", id],
    // queryFn: async () => getUserActivityData(id),
    queryFn: async () => {
      const { data } = await getUserActivityData(id);
      return data;
    },
  });

  return { userActivityData, isUserActivityLoading, userActivityError };
};

export const useFetchUserAverageSession = (id) => {
  const {
    data: userAverageSession,
    isLoading: isUserAverageSessionLoading,
    isError: userAverageSessionError,
  } = useQuery({
    queryKey: ["userAverageSession", id],
    queryFn: async () => {
      const { data } = await getUserAverageSession(id);
      return data;
    },
  });

  return {
    userAverageSession,
    isUserAverageSessionLoading,
    userAverageSessionError,
  };
};

//user performance data
export const useFetchUserPerformance = (id) => {
  const {
    data: userPerformance,
    isLoading: isUserPerformance,
    isError: userPerformanceError,
  } = useQuery({
    queryKey: ["userPerformance", id],
    queryFn: async () => {
      const { data } = await getUserPerformance(id);
      const { data: donees, kind } = data;
      return data;
    },
  });

  return { userPerformance, isUserPerformance, userPerformanceError };
};
