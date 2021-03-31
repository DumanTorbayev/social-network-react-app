export const SET_INITIALIZED = 'SET_INITIALIZED';

type initialStateType = {
    initialized: boolean
}

let initialState: initialStateType = {
    initialized: false,
};

const app = (state = initialState, action: any): initialStateType => {
    switch (action.type) {
        case SET_INITIALIZED:
            return {
                ...state,
                initialized: true
            };
        default:
            return state;
    }
};

export default app;