import {combineReducers} from "redux";
import auth from "./auth";
import profile from "./profile";
import dialogs from "./dialogs";
import sidebar from "./sidebar";
import users from "./users";
import app from "./app";
import {reducer as formReducer} from "redux-form";

const rootReducer = combineReducers({
    auth,
    profilePage: profile,
    dialogsPage: dialogs,
    sidebar,
    usersPage: users,
    form: formReducer,
    app,
})

export default rootReducer;