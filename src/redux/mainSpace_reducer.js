const PLUS = 'PLUS';
const MINUS = 'MINUS';
const OVER_MOUS = 'OVER_MOUS';

let initialState = {
    textForAnimation: "Первый более широко используется и знаком многим, а второй менее распространен. Для этого могут быть веские причины — объединять" +
        " анимации с помощью запятых относительно проще, чем разбираться в различных доступных нам функциях синхронизации и том, что они делают.",
    setAnimationText: false,
    symbol: [],
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
                setAnimationText: !state.setAnimationText,
                symbol: [...state.symbol, action.symbol],
            }


        default:
            return state;
    }
}

export const plus = () => ({type: PLUS});
export const minus = () => ({type: MINUS});
export const overmous = (symbol) => ({type: OVER_MOUS, symbol});

export default usersReducer;