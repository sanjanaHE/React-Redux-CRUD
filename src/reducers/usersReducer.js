const initialState = { data: [], hasError: false };

export default function employeeReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_USERS_SUCCESS":
      console.log("GET USER SUCCESS", action.data.data);
      return { data: action.data.data, hasError: false };
    case "GET_USER_FROM_ID_SUCCESS":
      console.log("GET_USER_FROM_ID_SUCCESS ", action.data);
      return { udata: action.data, hasError: false };
    case "USER_DELETE_SUCCESS":
      return { ...state, deleted: true };
    case "ADD_USERS_SUCCESS":
    default:
      return state;
  }
}
