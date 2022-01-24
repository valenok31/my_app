const SET_TIME_SEE = 'SET_TIME_SEE';


const timeSee = () => {
    let cdateObj = new Date();
    return cdateObj.getTime();
}

let initialState = {
    startTimeSee: timeSee(),
    timeSee: timeSee(),
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_TIME_SEE:
            return {...state, timeSee: timeSee()};

        default:
            return state;
    }
}

export const setTimeSee = (profile) => ({
    type: SET_TIME_SEE,
});

export default usersReducer;