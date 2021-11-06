import axios from "axios";

const URL = "http://localhost:8000";

export const addUser = async (data) => {
  try {
    return await axios.post(`${URL}/add`, data);
  } catch (error) {
    console.log("error while calling addUser apo", error);
  }
};
export const getUser = async () => {
  try {
    let res = await axios.get(`${URL}/users`);

    return res.data;
  } catch (error) {
    console.log("error while calling addUser apo", error);
  }
};

export const setConversation = async (data) => {
  try {
    await axios.post(`${URL}/conversation/add`, data);
  } catch (error) {
    console.log("error while calling setConversation API");
  }
};

export const getConversation = async (data) => {
  try {
    let res = await axios.post(`${URL}/conversation/get`, data);
    return res.data;
  } catch (error) {
    console.log("error while calling get conversation", error);
  }
};

export const newMessages = async (data) => {
  try {
    await axios.post(`${URL}/message/add`, data);
  } catch (error) {
    console.log("error while calling newMessage API", error);
  }
};

export const getMessages = async (id) => {
  try {
    return await axios.get(`${URL}/message/get/${id}`);
  } catch (error) {
    console.log("error calling getMessage API", error);
  }
};
