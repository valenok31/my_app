import React from "react";
import {connect} from "react-redux";
import {getWeatherThunk, setDataSys, setUsersProfile} from "../../redux/ninthSpace_reducer";
import {togglesIsFetching} from "../../redux/generalSetting_reducer";
import Loader from "../Loader/Loader";
import NinthSpace from "./NinthSpace";
import InfoWind from "./InfoWind";
import GeoLocation from "./GeoLocation";

class NinthSpaceAPICont extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: new Date().toLocaleString()
        };
    }

    componentDidMount() {
        this.props.getWeatherThunk(this.props.lat, this.props.lon);
    }

    componentDidUpdate(prevProps) {
        if (this.props.lat !== prevProps.lat || this.props.lon !== prevProps.lon) {
            this.props.getWeatherThunk(this.props.lat, this.props.lon);
        }
    }

    render() {
        let info_set = this.props.profile;
        let info_sys = this.props.sys;
        let infoWind = this.props.wind;
        let degString = InfoWind(infoWind.deg);
        const id = setInterval(() => (new Date().toLocaleString()), 1000);
        clearInterval(id);
        const tempeset = {
            temp: <span>{Math.floor(info_set.temp)} </span>,
            feels_like: <span>{Math.floor(info_set.feels_like)}&#176;</span>,
            pressure: <span>{Math.floor(info_set.pressure * 0.750062)} мм рт.ст.</span>,
            humidity: <span>{info_set.humidity} %</span>,
            windSpeed: <span>{degString} {infoWind.speed} м/с</span>,
            sunrise: new Date(info_sys.sunrise * 1000).toLocaleString() + "",
            sunset: new Date(info_sys.sunset * 1000).toLocaleString() + "",
            name: <span>{this.props.name}</span>,
        }

        return <>
            <GeoLocation/>
            {this.props.isFetching ? <Loader/> : null}
            <NinthSpace fetching={this.props.isFetching} tempe={tempeset} dateNow={this.state.time} {...this.props}/>
        </>
    }
}

let mapStateToProps = (state) => ({
    profile: state.ninthSpace_reducer.profile,
    wind: state.ninthSpace_reducer.wind,
    sys: state.ninthSpace_reducer.sys,
    isFetching: state.generalSetting_reducer.isFetching,
    lat: state.ninthSpace_reducer.lat,
    lon: state.ninthSpace_reducer.lon,
    name: state.ninthSpace_reducer.name,
})

export default connect(mapStateToProps,
    {
        getWeatherThunk, setUsersProfile, setDataSys, togglesIsFetching
    })(NinthSpaceAPICont)