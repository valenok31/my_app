const PLUS = 'PLUS';
const MINUS = 'MINUS';
const OVER_MOUS = 'OVER_MOUS';

let initialState = {
    users: [],
    pageSize: 100,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    collorBox: '1',
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {

        case PLUS:
            return {
                ...state,
                currentPage: state.currentPage + 1,
                isFetching: (state.currentPage % 2 === 0 ? false : true),
            }
        case MINUS:
            return {
                ...state,
                currentPage: state.currentPage - 1,
                isFetching: (state.currentPage % 2 === 0 ? false : true),
            }
        case OVER_MOUS:
            return {
                ...state,
                collorBox: action.boxChek,
                isFetching: (state.currentPage % 2 === 0 ? false : true),
            }


        default:
            return state;
    }
}

export const plus = () => ({type: PLUS});
export const minus = () => ({type: MINUS});
export const overmous = (boxChek) => ({type: OVER_MOUS, boxChek: boxChek});

export default usersReducer;