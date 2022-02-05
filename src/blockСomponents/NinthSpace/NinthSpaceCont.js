import React from "react";
import {connect} from "react-redux";
import {setUsersProfile} from "../../redux/ninthSpace_reducer";
import axios from "axios";

class NinthSpaceAPICont extends React.Component {

    componentDidMount() {
        let kayAPI = '162fccc9d12d11b8815f8c9684922df6';

        /*        profileAPI.getUser(userId).then(data => {
                    return this.props.setUsersProfile(data);
                });*/

        const instance = axios.create({
            withCredentials: true,
            baseURL: ``,
        });

        axios.get(`http://api.openweathermap.org/data/2.5/weather?appid=162fccc9d12d11b8815f8c9684922df6&units=metric&lang=ru&lat=53.426102&lon=83.936766`)
            .then(resp => {

                this.props.setUsersProfile(resp.data.main);
                console.log(resp.data)
            })
            .catch(resp => {
                                this.props.setUsersProfile('ERROR!!');
            })
    }

    render() {

        let info_set = this.props.profile;
        return <>
            <div>Температура, C: {info_set.temp}</div>
            <div>Ощущается как, C: {info_set.feels_like}</div>
            <div>Давление, hPa: {info_set.pressure }</div>
            <div>Влажность, %: {info_set.humidity  }</div>
        </>
    }
}

let mapStateToProps = (state) => ({
    profile: state.thirdSpace_reducer.profile
})

export default connect(mapStateToProps, {setUsersProfile})(NinthSpaceAPICont)