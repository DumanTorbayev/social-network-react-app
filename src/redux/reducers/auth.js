export const SET_USER_DATA = 'SET_USER_DATA';
export const SET_CAPTCHA = 'SET_CAPTCHA';

let initialState = {
    userId: null,
    login: null,
    email: null,
    captcha: null,
    isAuth: false,
};

const auth = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
            };
        case SET_CAPTCHA:
            return {
                ...state,
                captcha: action.captcha
            };
        default:
            return state;
    }
};

export default auth;