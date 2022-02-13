const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_DATA_SYS = 'SET_DATA_SYS';

let initialState = {
    profile: '',
    sys: '',
    wind: '',
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_USER_PROFILE:
            return {...state, profile: action.profile, wind: action.wind}

        case SET_DATA_SYS:
            return {...state, sys: action.sys}

        default:
            return state;
    }
}

export const setUsersProfile = (profile, wind) => ({
    type: SET_USER_PROFILE, profile, wind
});
export const setDataSys = (sys) => ({
    type: SET_DATA_SYS, sys
});



export default usersReducer;