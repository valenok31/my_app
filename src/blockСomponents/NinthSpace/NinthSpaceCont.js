import React from "react";
import {connect} from "react-redux";
import {setDataSys, setUsersProfile} from "../../redux/ninthSpace_reducer";
import axios from "axios";

class NinthSpaceAPICont extends React.Component {

    componentDidMount() {
        let kayAPI = '162fccc9d12d11b8815f8c9684922df6';

        /*        profileAPI.getUser(userId).then(data => {
                    return this.props.setUsersProfile(data);
                });*/

        const instance = axios.create({
            baseURL: `http://api.openweathermap.org/data/2.5/weather?appid=162fccc9d12d11b8815f8c9684922df6&units=metric&lang=ru&`,
        });

        instance.get(`&lat=53.426102&lon=83.936766`)
            .then(resp => {
                this.props.setUsersProfile(resp.data.main, resp.data.wind);
                this.props.setDataSys(resp.data.sys);
            })
            .catch(resp => {
                this.props.setUsersProfile('ERROR!!');
                this.props.setDataSys('ERROR!!');
            })
    }

    render() {

        let info_set = this.props.profile;
        let info_sys = this.props.sys;
        let info_wind = this.props.wind;
        let degString = null;
        console.log(info_wind);
        if(info_wind.deg>337.5 && info_wind.deg<22.5){degString = 'северный'}
        if(info_wind.deg>22.5 && info_wind.deg<67.5){degString = 'северо-восточный'}
        if(info_wind.deg>67.5 && info_wind.deg<112.5){degString = 'восточный'}
        if(info_wind.deg>112.5 && info_wind.deg<157.5){degString = 'юго-восточный'}
        if(info_wind.deg>157.5 && info_wind.deg<202.5){degString = 'южный'}
        if(info_wind.deg>202.5 && info_wind.deg<247.5){degString = 'юго-западный'}
        if(info_wind.deg>247.5 && info_wind.deg<292.5){degString = 'западный'}
        if(info_wind.deg>292.5 && info_wind.deg<337.5){degString = 'северо-западный'}

        return <>
            <div>Температура: {Math.floor(info_set.temp)} &#176;C</div>
            <div>Ощущается как: {Math.floor(info_set.feels_like)} &#176;C</div>
            <div>Давление: {Math.floor(info_set.pressure*0.750062)} мм рт.ст.</div>
            <div>Влажность: {info_set.humidity} %</div>
            <div>Страна: {info_sys.country}</div>
            <div>Ветер {degString} {info_wind.speed} м/с</div>
        </>
    }
}

let mapStateToProps = (state) => ({
    profile: state.ninthSpace_reducer.profile,
    wind: state.ninthSpace_reducer.wind,
    sys: state.ninthSpace_reducer.sys
})

export default connect(mapStateToProps, {setUsersProfile, setDataSys})(NinthSpaceAPICont)