const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_ID = 'SET_USER_ID';


let initialState = {
    profile: '',
    userId: '5',
}


const usersReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_USER_PROFILE:
            return {...state, profile: action.profile};

        case SET_USER_ID:
            return {...state, userId: action.userId};
        default:
            return state;
    }
}

export const setUsersProfile = (profile) => ({
    type: SET_USER_PROFILE, profile
});

export const setUserId = (userId) => ({
    type: SET_USER_ID, userId
});
export default usersReducer;