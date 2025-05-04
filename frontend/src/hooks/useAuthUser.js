import { useQuery } from "@tanstack/react-query";
import { getAuthUser } from "../lib/api";


const useAuthUser = () => {
  const {
    data: authUser,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["authUser"],
    queryFn: getAuthUser,
    staleTime: 10 * 60 * 1000, 
    refetchOnWindowFocus: false,
    retry: false,
  });

  return {
    authUser,
    isLoading,
    isError,
  };
};

export default useAuthUser;
