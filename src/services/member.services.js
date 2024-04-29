import axios from "axios";

const apiUrl = import.meta.env.VITE_URL_API;

export const getMembers = async (callback) => {
  axios
    .get(`${apiUrl}/members`)
    .then((res) => {
      callback(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getMemberById = async (id, callback) => {
  axios
    .get(`${apiUrl}/members/${id}`)
    .then((res) => {
      callback(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const createMember = async (data, callback) => {
  axios
    .post(`${apiUrl}/create`, data)
    .then((res) => {
      callback(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const updateMember = async (id, data, callback) => {
  axios
    .put(`${apiUrl}/update/${id}`, data)
    .then((res) => {
      callback(true, res.data);
    })
    .catch((err) => {
      callback(false, err);
    });
};

export const deleteMember = async (id, callback) => {
  axios
    .delete(`${apiUrl}/delete/${id}`)
    .then((res) => {
      callback(true, res.data);
    })
    .catch((err) => {
      callback(false, err);
    });
};
