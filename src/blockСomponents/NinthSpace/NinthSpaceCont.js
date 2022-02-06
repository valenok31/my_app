import React from "react";
import {connect} from "react-redux";
import {setDataSys, setUsersProfile} from "../../redux/ninthSpace_reducer";
import axios from "axios";
import {togglesIsFetching} from "../../redux/generalSetting_reducer";
import Loader from "../Loader/Loader";

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
        let fetching = this.props.isFetching;
        let temp = <span>{Math.floor(info_set.temp)} &#176;C</span>;
        let feels_like = <span>{Math.floor(info_set.feels_like)} &#176;C</span>;
        let pressure = <span>{Math.floor(info_set.pressure*0.750062)} мм рт.ст.</span>;
        let humidity = <span>{info_set.humidity} %</span>
        let windSpeed = <span>{degString} {info_wind.speed} м/с</span>
        let sunriseUNIX = info_sys.sunrise;
        let tum = 1970+(sunriseUNIX/86400/365.25);  /* tum - time Unix middle */
        let tum2 = (tum - Math.floor(tum))*365.25;  /* tum - time Unix middle */
        let sunriseUTC = 60*((60*24*(tum2 - Math.floor(tum2))-60)-59)
 /*       tum2 = 32*/
        let arrMonth = [31,28,31,30,31,30,31,31,30,31,30,31];
      const  reducer = (a,b,i) => {
          if(a<=b){arrMonth.length = i; b=0}
          return  a - b;
      }



        let day =  Math.floor(arrMonth.reduce(reducer,tum2));
        let month =  arrMonth.length+1;
        let years = Math.floor(tum);

        let hour = Math.floor((arrMonth.reduce(reducer,tum2) - day)*24)
        let minute = ((arrMonth.reduce(reducer,tum2) - day)*24-hour)*60;
        let second = (minute - Math.floor(minute))*60

        let sunrise = <span>{day} {month} {years} {hour}:{Math.floor(minute)}:{Math.floor(second)}</span>
        let sunset = <span>{info_sys.sunset}</span>


        return <>
            {this.props.isFetching ? <Loader/> : null}
            <div>Температура: {fetching ? `...загрузка` : temp}</div>
            <div>Ощущается как: {fetching ? `...загрузка` : feels_like}</div>
            <div>Давление: {fetching ? `...загрузка` : pressure}</div>
            <div>Влажность: {fetching ? `...загрузка` : humidity}</div>
            <div>Ветер {fetching ? `...загрузка` : windSpeed}</div>
            <div>Восход {fetching ? `...загрузка` : sunrise}</div>
            <div>Заход {fetching ? `...загрузка` : sunset}</div>
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