import React from "react";
import {connect} from "react-redux";
import {setUsersProfile} from "../../redux/visitAllContinents_reducer";
import axios from "axios";
import {togglesIsFetching} from "../../redux/generalSetting_reducer";

class VisitAllContinentsCont extends React.Component {

    componentDidMount() {
        let kayAPI = '2fe8120d448ff920cb6670a93e275812';
        this.props.togglesIsFetching(true);
        const instance = axios.create({
            /*baseURL: `https://api.travelpayouts.com/aviasales/v3/prices_for_dates?origin=MOW&destination=DXB&currency=usd&departure_at=2022-03-01&return_at=2022-03-10&sorting=price&direct=true&limit=10&token=${kayAPI}`,*/
        });

        axios.get(`https://api.travelpayouts.com/aviasales/v3/prices_for_dates?origin=MOW&destination=DXB&currency=usd&departure_at=2022-03-01&return_at=2022-03-10&sorting=price&direct=true&limit=10&token=2fe8120d448ff920cb6670a93e275812`)
            .then(resp => {
                debugger;
                console.log(resp)
                this.props.setUsersProfile(resp.data);

                this.props.togglesIsFetching(false);
            })
            .catch(resp => {

                console.log(resp)
                this.props.setUsersProfile('ERROR!!');
                /* this.props.setDataSys('ERROR!!');*/
                this.props.togglesIsFetching(false);
            })

    }

    render() {
/*        let fetching = this.props.isFetching;
        let info_set = this.props.profile;
        let rubRatesEUR;
        let rubRatesUSD;
        if (info_set) {
            rubRatesEUR = <span>{(info_set.RUB).toFixed(4)} руб.</span>;
            rubRatesUSD = <span>{(info_set.RUB / info_set.USD).toFixed(4)} руб.</span>;
        }*/

        return <>
            Hi
{/*            <div>1 EUR = {fetching ? `...загрузка` : rubRatesEUR}</div>
            <div>1 USD = {fetching ? `...загрузка` : rubRatesUSD}</div>*/}
        </>
    }
}

let mapStateToProps = (state) => ({
    profile: state.visitAllContinents_reducer.profile,
    /* wind: state.tenthSpace_reducer.wind,
     sys: state.tenthSpace_reducer.sys,*/
    isFetching: state.generalSetting_reducer.isFetching
})

export default connect(mapStateToProps, {setUsersProfile, togglesIsFetching})(VisitAllContinentsCont)