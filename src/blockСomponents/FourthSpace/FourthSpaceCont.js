import React from "react";
import {connect} from "react-redux";
import FourthSpace from "./FourthSpace";

class FourthSpaceAPICont extends React.Component {

    render() {

        return <FourthSpace />
    }
}

let mapStateToProps = (state) => ({

})

export default connect(mapStateToProps, {})(FourthSpaceAPICont)