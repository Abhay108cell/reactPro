import Axios from "../Axios";

const USER_URL = "/user";

// Sign in User
export const signinUser = async ({ password, email }) => {
  try {
    const { data } = await Axios.post(`${USER_URL}/signin`, {
      password,
      email,
    });
    return data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Signin failed");
  }
};

// Send Verification Email
export const sendVerificationEmail = async ({ email }) => {
  try {
    const { data } = await Axios.post(`${USER_URL}/send-verification-email`, {
      email,
    });
    return data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Failed to send verification email");
  }
};

// Sign Up User
export const signupUser = async ({ password, email, firstName, lastName }) => {
  try {
    const { data } = await Axios.post(`${USER_URL}/signup`, {
      password,
      email,
      firstName,
      lastName,
    });
    return data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Signup failed");
  }
};

// Verify Email Address during Signup
export const verfiyEmailAddressSignup = async ({ token, password }) => {
  try {
    const { data } = await Axios.post(`${USER_URL}/verify-user-email`, {
      token,
      password,
    });
    return data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Email verification failed");
  }
};
