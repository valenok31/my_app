import React from "react";
import {connect} from "react-redux";
import {setDataSys, setUsersProfile} from "../../redux/ninthSpace_reducer";
import {togglesIsFetching} from "../../redux/generalSetting_reducer";
import Loader from "../Loader/Loader";
import NinthSpace from "./NinthSpace";
import InfoWind from "./InfoWind";
import {userAPI} from "../../api/api";

class NinthSpaceAPICont extends React.Component {

    componentDidMount() {
        this.props.togglesIsFetching(true);
        let lat = '53.426102';
        let lon = '83.936766';
        userAPI.getUsers(lat, lon).then(resp => {
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
        let infoWind = this.props.wind;
        let infoWindDeg = infoWind.deg;
        let degString = InfoWind(infoWindDeg);
        let fetching = this.props.isFetching;
        let temp = <span>{Math.floor(info_set.temp)} &#176;C</span>;
        let feels_like = <span>{Math.floor(info_set.feels_like)} &#176;C</span>;
        let pressure = <span>{Math.floor(info_set.pressure * 0.750062)} мм рт.ст.</span>;
        let humidity = <span>{info_set.humidity} %</span>
        let windSpeed = <span>{degString} {infoWind.speed} м/с</span>
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