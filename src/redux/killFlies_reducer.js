const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_DATA_SYS = 'SET_DATA_SYS';

let initialState = {
    tellFly: [
        'Hi',
        'Hello!',
        'Who are you?',
        'what do you need?',
        'my name is Zhuzha',
        'oh no!',
    ]
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_USER_PROFILE:
            return {...state, profile: action.profile}

        case SET_DATA_SYS:
            return {...state, sys: action.sys}

        default:
            return state;
    }
}

export const setUsersProfile = (profile) => ({
    type: SET_USER_PROFILE, profile
});
export const setDataSys = (sys) => ({
    type: SET_DATA_SYS, sys
});

export default usersReducer;