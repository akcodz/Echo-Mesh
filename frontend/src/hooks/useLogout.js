import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logout } from "../lib/api";
import { useNavigate } from "react-router";

const useLogout = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const {
    mutate: logoutMutation,
    isPending,
    error,
  } = useMutation({
    mutationFn: logout,
    onSuccess: () => {
      queryClient.setQueryData(["authUser"], null); 
      queryClient.invalidateQueries({ queryKey: ["authUser"] });
      navigate("/login"); // Optional redirect
    }
    
  });

  return { logoutMutation, isPending, error };
};
export default useLogout;