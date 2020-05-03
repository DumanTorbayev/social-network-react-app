/*let renderEntireTree = () => {
    console.log('qwe')
};

let state = {
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
                name: 'Alik',
                img: 'man.png'
            },
            {
                id: 2,
                name: 'Sveta',
                img: 'man.png'
            },
            {
                id: 3,
                name: 'Nargiz',
                img: 'man.png'
            },
            {
                id: 4,
                name: 'Aisulu',
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
                name: "Skillet",
                img: 'man.png'
            },
        ],
    },
};

export const addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0,
    };

    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    renderEntireTree();
};

export const updateNewPostText = newText => {
    state.profilePage.newPostText = newText;
    renderEntireTree();
};

export const addMessage = () => {
    let newMessage = {
        id: 5,
        message: state.dialogsPage.newMessageText,
    };

    state.dialogsPage.messages.push(newMessage);
    state.dialogsPage.newMessageText = '';
    renderEntireTree();
};

export const updateNewMessageText = newMessage => {
    state.dialogsPage.newMessageText = newMessage;
    renderEntireTree();
};

export const subscribe = observer => {
    renderEntireTree = observer
};

export default state*/


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
                    name: 'Alik',
                    img: 'man.png'
                },
                {
                    id: 2,
                    name: 'Sveta',
                    img: 'man.png'
                },
                {
                    id: 3,
                    name: 'Nargiz',
                    img: 'man.png'
                },
                {
                    id: 4,
                    name: 'Aisulu',
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
                    name: "Skillet",
                    img: 'man.png'
                },
            ],
        },
    },
    getState() {
        return this._state
    },
    _callSubscriber() {
        console.log('not observer');
    },
    addPost() {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0,
        };

        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    addMessage() {
        let newMessage = {
            id: 5,
            message: this._state.dialogsPage.newMessageText,
        };

        this._state.dialogsPage.messages.push(newMessage);
        this._state.dialogsPage.newMessageText = '';
        this._callSubscriber(this._state);
    },
    updateNewMessageText(newMessage) {
        this._state.dialogsPage.newMessageText = newMessage;
        this._callSubscriber(this._state);
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },


    /*setNewPostText(value) {
        this._state.profilePage.newPostText = value
    },
    getNewPostText() {
        return this._state.profilePage.newPostText
    },
    setNewMessageText(value) {
        this._state.dialogsPage.newMessageText = value
    },
    getNewMessageText() {
        return this._state.dialogsPage.newMessageText
    },
    */
};

export default store