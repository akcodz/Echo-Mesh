import { Navigate } from "react-router";
import useAuthUser from "../hooks/useAuthUser.js";
import PageLoader from "../components/Loader";

// Route for authenticated & onboarded users only
export function PrivateRoute({ children }) {
  const { isLoading, authUser } = useAuthUser();
  const user = authUser?.user;

  if (isLoading) return <PageLoader />;
  if (!user) return <Navigate to="/login" />;

  const isOnboarded = user?.isOnboarded;
  if (!isOnboarded) return <Navigate to="/onboarding" />;

  return children;
}

// Route for unauthenticated users only (signup/login)
export function PublicRoute({ children }) {
  const { isLoading, authUser } = useAuthUser();
  const user = authUser?.user;

  if (isLoading) return <PageLoader />;
  if (user) return <Navigate to={user.isOnboarded ? "/" : "/onboarding"} />;

  return children;
}

// Route for authenticated but not onboarded users only
export function OnboardingRoute({ children }) {
  const { isLoading, authUser } = useAuthUser();
  const user = authUser?.user;

  if (isLoading) return <PageLoader />;
  if (!user) return <Navigate to="/login" />;
  if (user.isOnboarded) return <Navigate to="/" />;

  return children;
}
