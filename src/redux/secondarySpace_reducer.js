const UP_DATE_NEW_POST_TEXT = 'UP_DATE_NEW_POST_TEXT';
const CLICK_RESULT = 'CLICK_RESULT';
const CLICK_NAMBERS = 'CLICK_NAMBERS';


let initialState = {
    value_a: 0,
    value_b: '',
    matchControl: '',
    text: '',
};


const secondarySpace_reducer = (state = initialState, action) => {
    switch (action.type) {
        case UP_DATE_NEW_POST_TEXT:
            if (state.matchControl === '=') {
                return {
                    ...state,
                    text: '',
                    value_a: 0,
                    matchControl: '',
                }
            }
            return {
                ...state,
                text: action.text,
            }
        case CLICK_NAMBERS:
            if (state.matchControl === '=') {
                return {
                    ...state,
                    text: '',
                    value_a: 0,
                    matchControl: '',
                }
            }
            return {
                ...state,
                text: state.text + action.buttonValueN,

            }
        case CLICK_RESULT:
            if (action.buttonValue === 'C') {
                return {...initialState,}
            }
            if (action.buttonValue === 'CE') {
                return {...state, text: '',}
            }
            if (action.buttonValue === 'Backspace') {
                return {...state, text: state.text.slice(0, -1),}
            }
            if (action.buttonValue === '+/-') {
                return {...state, text: -Number(state.text),}
            }
            switch (state.matchControl) {
                case '+' :
                    return {
                        ...state,
                        matchControl: action.buttonValue,
                        text: '',
                        value_a: Number(state.value_a + Number(state.text)),
                    }
                case '-' :
                    return {
                        ...state,
                        matchControl: action.buttonValue,
                        text: '',
                        value_a: Number(state.value_a - Number(state.text)),
                    }
                case '*' :
                    return {
                        ...state,
                        matchControl: action.buttonValue,
                        text: '',
                        value_a: Number(state.value_a) * Number((state.text !== '' ? state.text : 1)),
                    }
                case  '/':
                    return {
                        ...state,
                        matchControl: action.buttonValue,
                        text: '',
                        value_a: Number(state.value_a) / Number((state.text !== '' ? state.text : 1)),
                    }
                case  'C':
                    return {...initialState,}
                case  '=' :
                    /*                    if (action.buttonValue === '+') {
                                            return {
                                                ...state,
                                                text: '',
                                                value_a: state.value_a + Number(state.text),
                                                matchControl: action.buttonValue,
                                            }
                                        }
                                        if (action.buttonValue === '-') {
                                            return {
                                                ...state,
                                                text: '',
                                                value_a: state.value_a - Number(state.text),
                                                matchControl: action.buttonValue,
                                            }
                                        }
                                        if (action.buttonValue === '/') {
                                            return {
                                                ...state,
                                                text: '',
                                                value_a: Number(state.value_a),
                                                matchControl: action.buttonValue,
                                            }
                                        }
                                        if (action.buttonValue === '*') {
                                            return {
                                                ...state,
                                                text: '',
                                                value_a: Number(state.value_a),
                                                matchControl: action.buttonValue,
                                            }
                                        }*/
                    return {
                        ...state,
                        matchControl: action.buttonValue,
                    }
                default:
                    return {
                        ...state,
                        matchControl: action.buttonValue,
                        text: '',
                        value_a: Number(state.text),
                    };
            }

        default:
            return state;
    }
}

export const updateNewPostText = (text) => ({type: UP_DATE_NEW_POST_TEXT, text});
export const clickResult = (buttonValue) => ({type: CLICK_RESULT, buttonValue});
export const clickNumbersButtonId = (buttonValueN) => ({type: CLICK_NAMBERS, buttonValueN,});

export default secondarySpace_reducer;