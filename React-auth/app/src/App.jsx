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

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard />,
    },
    {
      path: "/transactions",
      element: <TransactionPage />,
    },
    {
      path: "/support",
      element: <Support />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
    {
      path: "/signin",
      element: <Signin />,
    },
    {
      path: "/Register-Email-Verify",
      element: <RegisterEmailVerify />,
    },
    {
      path: "/Register-Success",
      element: <RegisterSuccess />,
    },
    {
      path: "/Forgot-Password",
      element: <ForgotPassword />,
    },
    {
      path: "/Forgot-Password-send",
      element: <ForgotPasswordSend />,
    },
    {
      path: "/Reset-password",
      element: <ResetPassword />,
    },
    {
      path: "/Reset-Success",
      element: <ResetPasswordSuccess />,
    },
  ]);

  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
}

export default App;
