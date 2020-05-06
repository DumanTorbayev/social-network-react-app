const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

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
    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0,
            };

            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);

        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);

        } else if (action.type === ADD_MESSAGE) {
            let newMessage = {
                id: 5,
                message: this._state.dialogsPage.newMessageText,
            };

            this._state.dialogsPage.messages.push(newMessage);
            this._state.dialogsPage.newMessageText = '';
            this._callSubscriber(this._state);

        } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
            this._state.dialogsPage.newMessageText = action.newMessage;
            this._callSubscriber(this._state);

        }
    },
};
// Action Creators
export const addPost = () => ({ type: ADD_POST });
export const updateNewPostText = (text) =>  ({ type: UPDATE_NEW_POST_TEXT, newText: text, }) ;
export const addMessage = () => ({ type: ADD_MESSAGE });
export const updateNewMessageText = (messageText) => ({ type: UPDATE_NEW_MESSAGE_TEXT, newMessage: messageText, });

export default store