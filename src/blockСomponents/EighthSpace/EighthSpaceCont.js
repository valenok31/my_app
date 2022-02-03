import React from "react";
import {connect} from "react-redux";
import {minus, plus, overmous} from "../../redux/mainSpace_reducer";
import MainSpace from "./EighthSpace";


class EighthSpaceCont extends React.Component {


    render() {
        return <MainSpace {...this.props}
                          overmous={this.props.overmous}
                          opacity = '0.5'/>
    }
}


const mapStateToProps = (props) => {
    return {
        textForAnimation: props.mainSpace_reducer.textForAnimation,
        setAnimationText: props.mainSpace_reducer.setAnimationText,
        symbol: props.mainSpace_reducer.symbol,
    }
}


export default connect(mapStateToProps, {overmous})(EighthSpaceCont);


