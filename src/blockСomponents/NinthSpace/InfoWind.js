import React from "react";
import {connect} from "react-redux";
import {setDataSys, setUsersProfile} from "../../redux/ninthSpace_reducer";
import axios from "axios";
import {togglesIsFetching} from "../../redux/generalSetting_reducer";
import Loader from "../Loader/Loader";
import NinthSpace from "./NinthSpace";

class NinthSpaceAPICont extends React.Component {

    componentDidMount() {
        let kayAPI = '162fccc9d12d11b8815f8c9684922df6';
        this.props.togglesIsFetching(true);
        const instance = axios.create({
            baseURL: `http://api.openweathermap.org/data/2.5/weather?appid=${kayAPI}&units=metric&lang=ru&`,
        });

        instance.get(`&lat=53.426102&lon=83.936766`)
            .then(resp => {
                this.props.setUsersProfile(resp.data.main, resp.data.wind);
                this.props.setDataSys(resp.data.sys);
                this.props.togglesIsFetching(false);
            })
            .catch(resp => {
                this.props.setUsersProfile('ERROR!!');
                this.props.setDataSys('ERROR!!');
                this.props.togglesIsFetching(false);
            })
    }

    render() {
        let info_set = this.props.profile;
        let info_sys = this.props.sys;
        let info_wind = this.props.wind;
        let degString = 'северный';
        if (info_wind.deg > 22.5 && info_wind.deg < 67.5) {
            degString = 'северо-восточный'
        }
        if (info_wind.deg > 67.5 && info_wind.deg < 112.5) {
            degString = 'восточный'
        }
        if (info_wind.deg > 112.5 && info_wind.deg < 157.5) {
            degString = 'юго-восточный'
        }
        if (info_wind.deg > 157.5 && info_wind.deg < 202.5) {
            degString = 'южный'
        }
        if (info_wind.deg > 202.5 && info_wind.deg < 247.5) {
            degString = 'юго-западный'
        }
        if (info_wind.deg > 247.5 && info_wind.deg < 292.5) {
            degString = 'западный'
        }
        if (info_wind.deg > 292.5 && info_wind.deg < 337.5) {
            degString = 'северо-западный'
        }
        let fetching = this.props.isFetching;
        let temp = <span>{Math.floor(info_set.temp)} &#176;C</span>;
        let feels_like = <span>{Math.floor(info_set.feels_like)} &#176;C</span>;
        let pressure = <span>{Math.floor(info_set.pressure * 0.750062)} мм рт.ст.</span>;
        let humidity = <span>{info_set.humidity} %</span>
        let windSpeed = <span>{degString} {info_wind.speed} м/с</span>
        let sunriseUNIX = info_sys.sunrise * 1000;
        let sunsetUNIX = info_sys.sunset * 1000;
        let sunrise = new Date(sunriseUNIX).toLocaleString() + "";
        let sunset = new Date(sunsetUNIX).toLocaleString() + "";
        let tempeset = {
            temp,
            feels_like,
            pressure,
            humidity,
            windSpeed,
            sunrise,
            sunset,
        }

        return <>
            {this.props.isFetching ? <Loader/> : null}
            <NinthSpace fetching={fetching} tempe={tempeset}/>
        </>
    }
}

let mapStateToProps = (state) => ({
    profile: state.ninthSpace_reducer.profile,
    wind: state.ninthSpace_reducer.wind,
    sys: state.ninthSpace_reducer.sys,
    isFetching: state.generalSetting_reducer.isFetching
})

export default connect(mapStateToProps, {setUsersProfile, setDataSys, togglesIsFetching})(NinthSpaceAPICont)