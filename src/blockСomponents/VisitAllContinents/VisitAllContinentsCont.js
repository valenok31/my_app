import React from "react";
import {connect} from "react-redux";
import {setUsersProfile} from "../../redux/visitAllContinents_reducer";
import {togglesIsFetching} from "../../redux/generalSetting_reducer";
import VisitAllContinents from "./VisitAllContinents";

class VisitAllContinentsCont extends React.Component {
    componentDidMount() {


    }

    render() {


        return <>
            <VisitAllContinents getCostCity={this.props.getCostCity} getCityParameter={this.props.getCityParameter} cityAddParam={this.props.cityAddParam}/>
        </>
    }
}

let mapStateToProps = (state) => ({
    profile: state.visitAllContinents_reducer.profile,
    cityAddParam: state.visitAllContinents_reducer.cityAddParam,
    getCostCity: state.visitAllContinents_reducer.getCostCity,
    getCityParameter: state.visitAllContinents_reducer.getCityParameter,
    isFetching: state.generalSetting_reducer.isFetching
})

export default connect(mapStateToProps, {setUsersProfile, togglesIsFetching})(VisitAllContinentsCont)