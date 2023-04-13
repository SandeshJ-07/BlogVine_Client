import axios from "axios";

export const server_url = "http://localhost:80";
// export const server_url = "https://blog-vines-server.vercel.app";
//  const client_url = "http://localhost:3000";/

// Mail Controller
export const sendOTP = async (email) => {
  try {
    let res = await axios.post(`${server_url}/api/mail/sendOTP`, {
      email: email,
    });
    return res;
  } catch (error) {
    console.log("Error Calling Send OTP : " + error.message);
  }
};

// User Controller
export const UserRegister = async (user) => {
  try {
    let res = await axios.post(`${server_url}/api/user/register`, user);
    return res;
  } catch (error) {
    console.log("Error Calling User Register : " + error.message);
  }
};

export const UserLogin = async (user) => {
  try {
    let res = await axios.post(`${server_url}/api/user/login`, user);
    return res;
  } catch (error) {
    console.log("Error Calling User Login : " + error.message);
  }
};

export const verifyUserDetails = async (user) => {
  try {
    let res = await axios.post(
      `${server_url}/api/user/verifyUserDetails`,
      user
    );
    return res;
  } catch (error) {
    console.log("Error Calling Verify User Details : " + error.message);
  }
};

export const getUserDetails = async (user) => {
  try {
    let res = await axios.post(`${server_url}/api/user/getUserDetails`, user);
    return res;
  } catch (error) {
    console.log("Error Calling Get User Details : " + error.message);
  }
};

// Get User From Session Id
export const getUserFromSessionId = async (sessionId) => {
  try {
    let res = await axios.post(
      `${server_url}/social/auth/getUserFromSessionId`,
      sessionId
    );
    return res;
  } catch (error) {
    console.log("Error Calling Get User From Session Id : " + error.message);
  }
};

// User Forgot Password
export const forgotPassword = async (user) => {
  try {
    let res = await axios.post(
      `${server_url}/api/user/password/forgot-password`,
      {
        email: user.email,
      }
    );
    return res;
  } catch (error) {
    console.log("Error Calling Forgot Password : " + error.message);
  }
};

// Update User Password
export const updateUserPassword = async (user) => {
  try {
    let res = await axios.post(
      `${server_url}/api/user/password/update-user-password`,
      {
        email: user.email,
        password: user.password,
      }
    );
    return res;
  } catch (error) {
    console.log("Error Calling Update User Password : " + error.message);
  }
}

// get User From Forgot Token
export const getUserFromForgotToken = async (token) => {
  try {
    let res = await axios.get(
      `${server_url}/api/user/password/getUserFromForgotToken/${token}`,
    );
    return res;
  } catch (error) {
    console.log("Error Calling Get User From Forgot Token : " + error.message);
  }
}