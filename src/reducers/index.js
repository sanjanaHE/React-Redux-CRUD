import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import userReducer from "./usersReducer";

const rootReducer = combineReducers({
  form: formReducer, // mounted under "form"
  users: userReducer
});

export default rootReducer;
