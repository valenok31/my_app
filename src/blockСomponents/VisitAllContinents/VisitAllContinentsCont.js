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
                getPreviousNumberСity={this.props.getPreviousNumberСity}
                _cityAddParam={this.props._cityAddParam}/>
        </>
    }
}

let mapStateToProps = (state) => ({
/*    getCityAddParam: state.visitAllContinents_reducer.getCityAddParam,*/
    _cityAddParam: state.visitAllContinents_reducer._cityAddParam,
    getCostCity: state.visitAllContinents_reducer.getCostCity,
    getCityParameter: state.visitAllContinents_reducer.getCityParameter,
    getPreviousNumberСity: state.visitAllContinents_reducer.getPreviousNumberСity,
    isFetching: state.generalSetting_reducer.isFetching
})

export default connect(mapStateToProps, {togglesIsFetching})(VisitAllContinentsCont)