import {renderEntireTree} from "../render";

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

export let addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0,
    };

    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    renderEntireTree(state);
};

export let updateNewPostText = newText => {
    state.profilePage.newPostText = newText;
    renderEntireTree(state);
};

export default state