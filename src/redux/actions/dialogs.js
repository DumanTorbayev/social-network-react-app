import {ADD_MESSAGE} from "../reducers/dialogs";

export const addMessage = messageBody => ({type: ADD_MESSAGE, messageBody});