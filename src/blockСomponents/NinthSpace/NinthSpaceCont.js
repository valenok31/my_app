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
                this.props.setUsersProfile(resp.data.main);
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
        console.log(info_sys);

        return <>
            <div>Температура, C: {info_set.temp}</div>
            <div>Ощущается как, C: {info_set.feels_like}</div>
            <div>Давление, hPa: {info_set.pressure}</div>
            <div>Влажность, %: {info_set.humidity}</div>
            <div>Страна: {info_sys.country}</div>
        </>
    }
}

let mapStateToProps = (state) => ({
    profile: state.ninthSpace_reducer.profile,
    sys: state.ninthSpace_reducer.sys
})

export default connect(mapStateToProps, {setUsersProfile, setDataSys})(NinthSpaceAPICont)