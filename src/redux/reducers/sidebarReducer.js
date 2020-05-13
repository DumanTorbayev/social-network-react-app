let initialState = {
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
};

const sidebarReducer = (state = initialState, action) => {
    return state
};

export default sidebarReducer;