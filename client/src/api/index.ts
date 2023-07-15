import axios from "axios";
const server = "http://localhost:3001/api/v1/user";

export const login = async (
  email: string,
  password: string
): Promise<string> => {
  try {
    const response = await axios.post(
      `${server}/login`,
      { email, password },
      { headers: { "Content-Type": "application/json" } }
    );
    if (response.data.status !== 200) {
      console.log("Error: ", response.data.message);
      return null;
    }
    if (response.data && response.data.body && response.data.body.token) {
      const token = response.data.body.token;
      return token;
    } else {
      throw new Error("Invalid server response");
    }
  } catch (error) {
    console.log("Login error:", error);
    throw new Error("Login failed. Please try again.");
  }
};

export const updateUser = async (
  firstName: string,
  lastName: string
): Promise<string> => {
  const token =
    localStorage.getItem("token") || sessionStorage.getItem("token");
  try {
    const response = await axios.put(
      `${server}/profile`,
      { firstName, lastName },
      {
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`, // Add a space after 'Bearer'
        },
      }
    );
    if (response.data.status !== 200) {
      console.log("Error: ", response.data.message);
      return null;
    }
    if (response.data.body) {
      const data = response.data.body;
      return data;
    }
    return null; // Add a return statement in case response.data.body is falsy
  } catch (error) {
    console.log("Login error:", error);
    throw new Error("Login failed. Please try again.");
  }
};

export const getUser = async () => {
  const token =
    localStorage.getItem("token") || sessionStorage.getItem("token");
  try {
    const response = await axios.post(
      `${server}/profile`,
      {},
      {
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`, // Add a space after 'Bearer'
        },
      }
    );
    if (response.data.status !== 200) {
      console.log("Error: ", response.data.message);
      return null;
    }
    if (response.data.body) {
      const data = response.data.body;
      return data;
    }
    return null; // Add a return statement in case response.data.body is falsy
  } catch (error) {
    console.log("Login error:", error);
    throw new Error("Login failed. Please try again.");
  }
};
