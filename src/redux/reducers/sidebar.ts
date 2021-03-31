type friends = {
    id: number,
    name: string,
    img: string
}

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
    ] as Array<friends>,
};

type initialStateType = typeof initialState

const sidebar = (state = initialState, action: any): initialStateType => {
    return state
};

export default sidebar;