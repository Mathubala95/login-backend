import axios from "axios";
import { config } from "../connection/config";

// User Registration
export async function register(cred) {
  return await axios.post(`${config.api}/api/users/register`, cred);
}

// All user login
export async function login(cred) {
  return await axios.post(`${config.api}/api/users/login`, cred);
}

// Forgot password Link send
export async function forgotPassword(cred) {
  return await axios.post(`${config.api}/api/users/forgotpassword`, cred);
}

// Reset Password
export async function resetPassword(cred) {
  return await axios.post(`${config.api}/api/users/resetpassword`, cred);
}