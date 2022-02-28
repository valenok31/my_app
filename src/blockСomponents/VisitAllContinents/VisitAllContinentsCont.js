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
            <VisitAllContinents/>
        </>
    }
}

let mapStateToProps = (state) => ({
    profile: state.visitAllContinents_reducer.profile,
    isFetching: state.generalSetting_reducer.isFetching
})

export default connect(mapStateToProps, {setUsersProfile, togglesIsFetching})(VisitAllContinentsCont)