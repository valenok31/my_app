import {userAPI} from "../api/api";
import {togglesIsFetching} from "./generalSetting_reducer";

const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_DATA_SYS = 'SET_DATA_SYS';

let initialState = {
    profile: '',
    sys: '',
    wind: '',
    lat: '53.426102',
    lon: '83.936766',
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

export const getWeatherThunk = (lat, lon) => {
    return (dispatch) => {
        togglesIsFetching(true);
        userAPI.getUsers(lat, lon).then(resp => {
            dispatch(setUsersProfile(resp.data.main, resp.data.wind));
            dispatch(setDataSys(resp.data.sys));
            dispatch(togglesIsFetching(false));
        })
            .catch(resp => {
                dispatch(setUsersProfile('ERROR!!'));
                dispatch(setDataSys('ERROR!!'));
                dispatch(togglesIsFetching(false));
            })

    }
}

export default usersReducer;