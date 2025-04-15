import { lazy, Suspense } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import { PrivateRoute } from "./auth/components/PrivateRoute";
import AuthLayout from "./auth/layout/AuthLayout";
import { LoginPage } from "./auth/pages/LoginPage";
import { RegisterPage } from "./auth/pages/RegisterPage";

const ChatLayout = lazy(() => import("./chat/layout/ChatLayout"));
const ChatPage = lazy(() => import("./chat/pages/ChatPage"));
const NoChatSelectedPage = lazy(
  () => import("./chat/pages/NoChatSelectedPage")
);

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<AuthLayout />}>
          <Route index element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
        </Route>

        <Route
          path="/chat"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <PrivateRoute isAuthenticated={true}>
                <ChatLayout />
              </PrivateRoute>
            </Suspense>
          }
        >
          <Route index element={<NoChatSelectedPage />} />
          <Route path="/chat/:clientId" element={<ChatPage />} />
        </Route>

        <Route path="/" element={<Navigate to="/auth" />} />
      </Routes>
    </BrowserRouter>
  );
};
