import {userAPI} from "../api/api";
import {togglesIsFetching} from "./generalSetting_reducer";

const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_DATA_SYS = 'SET_DATA_SYS';
const SET_GEO_LOCATION = 'SET_GEO_LOCATION';

let initialState = {
    profile: '',
    sys: '',
    wind: '',
    lat: '90',
    lon: '90',
    name: '',
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_PROFILE:
            return {...state, profile: action.profile, wind: action.wind, name: action.name}
        case SET_DATA_SYS:
            return {...state, sys: action.sys}
        case SET_GEO_LOCATION:
            return {...state, lat: action.latGeo, lon: action.lonGeo}
        default:
            return state;
    }
}

export const setUsersProfile = (profile, wind, name) => ({
    type: SET_USER_PROFILE, profile, wind, name
});
export const setDataSys = (sys) => ({
    type: SET_DATA_SYS, sys
});

export const setGeoLocation = (latGeo, lonGeo) => ({
    type: SET_GEO_LOCATION, latGeo, lonGeo
});

export const getWeatherThunk = (lat, lon) => {
    return (dispatch) => {
        dispatch(togglesIsFetching(true));
        userAPI.getUsers(lat, lon).then(resp => {
            dispatch(setUsersProfile(resp.data.main, resp.data.wind, resp.data.name));
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