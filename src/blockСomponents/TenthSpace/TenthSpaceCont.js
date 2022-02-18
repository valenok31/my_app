import React from "react";
import {connect} from "react-redux";
import {setUsersProfile} from "../../redux/tenthSpace_reducer";
import axios from "axios";
import {togglesIsFetching} from "../../redux/generalSetting_reducer";

class TenthSpaceAPICont extends React.Component {

    componentDidMount() {
        let kayAPI = '162fccc9d12d11b8815f8c9684922df6';

        this.props.togglesIsFetching(true);
        const instance = axios.create({
            baseURL: `http://api.exchangeratesapi.io/v1`,
        });

        instance.get(`/latest?access_key=71dcde6a31b5fa3a263589f2e6a8eb12`)
            .then(resp => {
                this.props.setUsersProfile(resp.data.rates);
                console.log(resp.data.rates.RUB)
                this.props.togglesIsFetching(false);
            })
            .catch(resp => {
                this.props.setUsersProfile('ERROR!!');
                /* this.props.setDataSys('ERROR!!');*/
                this.props.togglesIsFetching(false);
            })
    }

    render() {
        let fetching = this.props.isFetching;
        let info_set = this.props.profile;
        let rubRatesEUR;
        let rubRatesUSD;
        if(info_set){
            rubRatesEUR = <span>{(info_set.RUB).toFixed(4)} руб.</span>;
            rubRatesUSD = <span>{(info_set.RUB/info_set.USD).toFixed(4)} руб.</span>;
        }

        return <>
            <div>1 EUR = {fetching ? `...загрузка` : rubRatesEUR}</div>
            <div>1 USD = {fetching ? `...загрузка` : rubRatesUSD}</div>
        </>
    }
}

let mapStateToProps = (state) => ({
    profile: state.tenthSpace_reducer.profile,
    /* wind: state.tenthSpace_reducer.wind,
     sys: state.tenthSpace_reducer.sys,*/
    isFetching: state.generalSetting_reducer.isFetching
})

export default connect(mapStateToProps, {setUsersProfile, togglesIsFetching})(TenthSpaceAPICont)