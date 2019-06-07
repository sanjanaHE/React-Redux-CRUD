import axios from "axios";
export function getUsers() {
  console.log("In USER ACTION");
  return dispatch => {
    axios({
      method: "get",
      url: "https://reqres.in/api/users"
    }).then(response => {
      console.log("getting users ", response.data.data);
      dispatch({
        type: "GET_USERS_SUCCESS",
        data: response.data
      });
    });
  };
}

export function addUser(data) {
  // console.log("In USER ADD ACTION");
  return dispatch => {
    axios({
      method: "post",
      url: "https://reqres.in/api/users",
      data
    }).then(response => {
      // console.log("getting users ", response.data.data);
      dispatch({
        type: "ADD_USERS_SUCCESS",
        data: response.data
      });
    });
  };
}

export function getUserFromId(id) {
  // console.log("GET USER FROM USER ID", id);
  return dispatch => {
    axios({
      method: "get",
      url: `https://reqres.in/api/users/${id}`
    }).then(response => {
      // console.log("getting user ", response.data.data);
      dispatch({
        type: "GET_USER_FROM_ID_SUCCESS",
        data: response.data.data
      });
    });
  };
}
export function updateUser(id, data) {
  console.log(id, data);
  return dispatch => {
    axios({
      method: "put",
      url: `https://reqres.in/api/users/${id}`,
      data
    }).then(response => {
      // console.log("getting user ", response.data.data);
      dispatch({
        type: "USER_UPDATE_SUCCESS",
        data: response.data.data
      });
    });
  };
}
export function userDelete(id) {
  return dispatch => {
    axios({
      method: "delete",
      url: `https://reqres.in/api/users/${id}`
    }).then(response => {
      // console.log("getting user ", response.data.data);
      dispatch({
        type: "USER_DELETE_SUCCESS",
        data: response
      });
    });
  };
}
