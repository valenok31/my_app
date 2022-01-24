import React from "react";
import {connect} from "react-redux";
import FifthSpace from "./FifthSpace";
import {setTimeSee} from "../../redux/fifthSpace_reducer";

class FifthSpaceAPICont extends React.Component {

    componentDidMount() {
        this.props.setTimeSee();
    }

    render() {
        return <div><FifthSpace/></div>
    }
}

let mapStateToProps = (state) => ({
    timeSee: state.fifthSpace_reducer.timeSee,
    startTimeSee: state.fifthSpace_reducer.startTimeSee
})

export default connect(mapStateToProps, {setTimeSee})(FifthSpaceAPICont)