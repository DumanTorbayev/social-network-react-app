import {ADD_MESSAGE} from "../reducers/dialogs";

type message = {
    id: number,
    message: string
}

type addMessage = {
    type: typeof ADD_MESSAGE,
    messageBody: message
}

export const addMessage = (messageBody: message): addMessage => ({type: ADD_MESSAGE, messageBody});