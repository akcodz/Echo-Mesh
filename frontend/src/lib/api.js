import { axiosInstance } from "./axios";

export const signup = async (signupData) => {
  try {
    const response = await axiosInstance.post("/auth/signup", signupData);
    return response.data;
  } catch (error) {
    console.error("Signup Error: ", error.response?.data || error.message);
    throw new Error(error.response?.data?.message || "An error occurred during signup");
  }
};

export const login = async (loginData) => {
  try {
    const response = await axiosInstance.post("/auth/login", loginData);
    console.log(response);
    return response.data;
  } catch (error) {
    console.error("Login Error: ", error.response?.data || error.message);
    throw new Error(error.response?.data?.message || "An error occurred during login");
  }
};

export const logout = async () => {
  try {
    const response = await axiosInstance.post("/auth/logout");
    return response.data;
  } catch (error) {
    console.error("Logout Error: ", error.response?.data || error.message);
    throw new Error(error.response?.data?.message || "An error occurred during logout");
  }
};

export const getAuthUser = async () => {
  try {
    const res = await axiosInstance.get("/auth/me");
    return res.data;
  } catch (error) {
    console.error("Get Auth User Error: ", error.response?.data || error.message);
    throw new Error(error.response?.data?.message || "An error occurred while fetching user data");
  }
};

export const completeOnboarding = async (userData) => {
  try {
    const response = await axiosInstance.post("/auth/onboarding", userData);
    return response.data;
  } catch (error) {
    console.error("Complete Onboarding Error: ", error.response?.data || error.message);
    throw new Error(error.response?.data?.message || "An error occurred during onboarding");
  }
};

export async function getUserFriends() {
  try {
    const response = await axiosInstance.get("/users/friends");
    return response.data;
  } catch (error) {
    console.error("Get User Friends Error: ", error.response?.data || error.message);
    throw new Error(error.response?.data?.message || "An error occurred while fetching friends");
  }
}

export async function getRecommendedUsers() {
  try {
    const response = await axiosInstance.get("/users");
    console.log(response)
    return response.data;
  } catch (error) {
    console.error("Get Recommended Users Error: ", error.response?.data || error.message);
    throw new Error(error.response?.data?.message || "An error occurred while fetching recommended users");
  }
}

export async function getOutgoingFriendReqs() {
  try {
    const response = await axiosInstance.get("/users/outgoing-friend-requests");
    return response.data;
  } catch (error) {
    console.error("Get Outgoing Friend Requests Error: ", error.response?.data || error.message);
    throw new Error(error.response?.data?.message || "An error occurred while fetching outgoing friend requests");
  }
}

export async function sendFriendRequest(userId) {
  try {
    const response = await axiosInstance.post(`/users/friend-request/${userId}`);
    return response.data;
  } catch (error) {
    console.error("Send Friend Request Error: ", error.response?.data || error.message);
    throw new Error(error.response?.data?.message || "An error occurred while sending the friend request");
  }
}

export async function getFriendRequests() {
  try {
    const response = await axiosInstance.get("/users/friend-requests");
    return response.data;
  } catch (error) {
    console.error("Get Friend Requests Error: ", error.response?.data || error.message);
    throw new Error(error.response?.data?.message || "An error occurred while fetching friend requests");
  }
}

export async function acceptFriendRequest(requestId) {
  try {
    const response = await axiosInstance.put(`/users/friend-request/${requestId}/accept`);
    return response.data;
  } catch (error) {
    console.error("Accept Friend Request Error: ", error.response?.data || error.message);
    throw new Error(error.response?.data?.message || "An error occurred while accepting the friend request");
  }
}

export async function getStreamToken() {
  try {
    const response = await axiosInstance.get("/chat/token");
    return response.data;
  } catch (error) {
    console.error("Get Stream Token Error: ", error.response?.data || error.message);
    throw new Error(error.response?.data?.message || "An error occurred while fetching the stream token");
  }
}
