/*
import profileReducer from "./reducers/profileReducer";
import dialogsReducer from "./reducers/dialogsReducer";
import sidebarReducer from "./reducers/sidebarReducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {
                    id: 1,
                    message: "Lorem Ipsum is simply dummy text of the",
                    likesCount: 12,
                },
                {
                    id: 2,
                    message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                    likesCount: 5,
                },
                {
                    id: 3,
                    message: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
                    likesCount: 45,
                },
                {
                    id: 6,
                    message: "И вот я здесь",
                    likesCount: 125,
                },
            ],
            newPostText: 'Hello React'
        },
        dialogsPage: {
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
        },
        sidebar: {
            friends: [
                {
                    id: 1,
                    name: "Johnson",
                    img: 'man.png'
                },
                {
                    id: 2,
                    name: "Jessica",
                    img: 'man.png'
                },
                {
                    id: 3,
                    name: "Maroon",
                    img: 'man.png'
                },
                {
                    id: 4,
                    name: "Mark",
                    img: 'man.png'
                },
            ],
        },
    },
    _callSubscriber() {
        console.log('not observer');
    },
    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },
    dispatch: function (action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    },
};

export default store
*/
