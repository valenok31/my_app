import React from "react";
import {connect} from "react-redux";
import {togglesIsFetching} from "../../redux/generalSetting_reducer";
import VisitAllContinents from "./VisitAllContinents";

class VisitAllContinentsCont extends React.Component {
    componentDidMount() {

    }

    render() {
        return <>
            <VisitAllContinents
                getCostCity={this.props.getCostCity}
                getCityParameter={this.props.getCityParameter}
                cityAddParam={this.props.cityAddParam}/>
        </>
    }
}

let mapStateToProps = (state) => ({
    cityAddParam: state.visitAllContinents_reducer._cityAddParam,
    getCostCity: state.visitAllContinents_reducer.getCostCity,
    getCityParameter: state.visitAllContinents_reducer.getCityParameter,
    isFetching: state.generalSetting_reducer.isFetching
})

export default connect(mapStateToProps, {togglesIsFetching})(VisitAllContinentsCont)