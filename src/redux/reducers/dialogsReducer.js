const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
    messages: [
        {id: 1, message: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"},
        {id: 2, message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."},
        {id: 3, message: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"},
        {id: 4, message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."},
    ],
    dialogsData: [
        {
            id: 1,
            name: 'Johnson',
            img: 'man.png'
        },
        {
            id: 2,
            name: 'Maroon',
            img: 'man.png'
        },
        {
            id: 3,
            name: 'Jessica',
            img: 'man.png'
        },
        {
            id: 4,
            name: 'Mark',
            img: 'man.png'
        },
    ],
    newMessageText: '',
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            let newMessage = {
                id: 5,
                message: state.newMessageText,
            };
            let stateCopy = {...state};
            stateCopy.messages = [...state.messages];
            stateCopy.messages.push(newMessage);
            stateCopy.newMessageText = '';
            return stateCopy;
        }
        case UPDATE_NEW_MESSAGE_TEXT: {
            let stateCopy = {...state};
            stateCopy.newMessageText = action.newMessage;
            return stateCopy;
        }
        default:
            return state;
    }
};

// Action Creators
export const addMessage = () => ({type: ADD_MESSAGE});
export const updateNewMessageText = (messageText) => ({type: UPDATE_NEW_MESSAGE_TEXT, newMessage: messageText,});

export default dialogsReducer;