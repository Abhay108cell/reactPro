import Dashboard from "./pages/Dashboard/Dashboard";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Support from "./pages/Support/Support";
import TransactionPage from "./pages/Transaction/Transaction";
import Signin from "./pages/Auth/signin/Signin";
import Signup from "./pages/Auth/signup/Signup";
import RegisterEmailVerify from "./pages/Auth/RegisterEmailVerify/RegisterEmailVerify";
import RegisterSuccess from "./pages/Auth/RegisterSuccess/RegisterSuccess";
import ForgotPassword from "./pages/Auth/ForgotPassword/ForgotPassword";
import ForgotPasswordSend from "./pages/Auth/ForgotPasswordSend/ForgotPasswordSend";
import ResetPasswordSuccess from "./pages/Auth/ResetPasswordSuccess/ForgotPasswordSend";
import ResetPassword from "./pages/Auth/ResetPassword/ResetPassword";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import ProtectiveRoute from "./components/Auth/ProtectiveRoute";
import AlreadySigninRoute from "./components/Auth/AlreadySigninRoute";

function App() {
  const queryClient = new QueryClient();
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectiveRoute>
          <Dashboard />
        </ProtectiveRoute>
      ),
    },
    {
      path: "/transactions",
      element: (
        <ProtectiveRoute>
          <TransactionPage />,
        </ProtectiveRoute>
      ),
    },
    {
      path: "/support",
      element: (
        <ProtectiveRoute>
          <Support />,
        </ProtectiveRoute>
      ),
    },
    {
      path: "/signup",
      element: (
        <AlreadySigninRoute>
          <Signup />,
        </AlreadySigninRoute>
      ),
    },
    {
      path: "/signin",
      element: (
        <AlreadySigninRoute>
          <Signin />,
        </AlreadySigninRoute>
      ),
    },
    {
      path: "/Register-Email-Verify/:email",
      element: (
        <AlreadySigninRoute>
          <RegisterEmailVerify />,
        </AlreadySigninRoute>
      ),
    },
    {
      path: "/email-verify/:token",
      element: (
        <AlreadySigninRoute>
          <RegisterSuccess />,
        </AlreadySigninRoute>
      ),
    },
    {
      path: "/Forgot-Password",
      element: (
        <AlreadySigninRoute>
          <ForgotPassword />,
        </AlreadySigninRoute>
      ),
    },
    {
      path: "/Forgot-Password-send/:email",
      element: <AlreadySigninRoute>
        <ForgotPasswordSend />,
      </AlreadySigninRoute>
    },
    {
      path: "/forgot-password-verify/:token",
      element: <ResetPassword />,
    },
    {
      path: "/Reset-Success",
      element: <ResetPasswordSuccess />,
    },
  ]);

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
