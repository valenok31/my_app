const TOGGLES_IS_FETCHING = 'TOGGLES_IS_FETCHING';

let initialState = {
    isFetching: false,
}


const togglesReducer = (state = initialState, action) => {
    switch (action.type) {

        case TOGGLES_IS_FETCHING:
            return {...state, isFetching: action.isFetching};

        default:
            return state;
    }
}

export const togglesIsFetching = (isFetching) => ({
    type: TOGGLES_IS_FETCHING, isFetching
});


export default togglesReducer;