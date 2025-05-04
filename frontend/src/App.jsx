import { Navigate, Route, Routes } from "react-router";

import HomePage from "./pages/HomePage.jsx";
import SignUpPage from "./pages/SignUpPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import NotificationsPage from "./pages/NotificationsPage.jsx";
import CallPage from "./pages/CallPage.jsx";
import ChatPage from "./pages/ChatPage.jsx";
import OnboardingPage from "./pages/OnBoardingPage.jsx";

import { Toaster } from "react-hot-toast";
import { PublicRoute,PrivateRoute,OnboardingRoute } from "./routes/RouteGuard";
import Layout from "./components/Layout.jsx";
import { useThemeStore } from "./store/useThemeStore.jsx";

const App = () => {
  const { theme } = useThemeStore();

  return (
    <div className="h-screen" data-theme={theme}>
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Layout showSidebar={true}>
                <HomePage/>
              </Layout>
            </PrivateRoute>
          }
        />
        <Route
          path="/signup"
          element={
            <PublicRoute>
              <SignUpPage/>
            </PublicRoute>
          }
        />
        <Route
          path="/login"
          element={
            <PublicRoute>
              <LoginPage />
            </PublicRoute>
          }
        />
        <Route
          path="/notifications"
          element={
            <PrivateRoute>
              <Layout showSidebar={true}>
                <NotificationsPage />
              </Layout>
            </PrivateRoute>
          }
        />
        <Route
          path="/call/:id"
          element={
            <PrivateRoute>
              <CallPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/chat/:id"
          element={
            <PrivateRoute>
              <Layout showSidebar={false}>
                <ChatPage />
              </Layout>
            </PrivateRoute>
          }
        />
        <Route
          path="/onboarding"
          element={
            <OnboardingRoute>
              <OnboardingPage />
            </OnboardingRoute>
          }
        />
      </Routes>

      <Toaster />
    </div>
  );
};

export default App;
