export const ADD_MESSAGE = 'ADD_MESSAGE';

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
};

const dialogs = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            return {
                ...state,
                messages: [
                    ...state.messages,
                    {
                        id: Date.now(),
                        message: action.messageBody
                    }
                ]
            };
        }
        default:
            return state;
    }
};


export default dialogs;