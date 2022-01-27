import React from "react";
import {connect} from "react-redux";
import {minus, plus, overmous} from "../../redux/mainSpace_reducer";
import MainSpace from "./MainSpace";


class MainSpaceCont extends React.Component {


    render() {
        return <MainSpace {...this.props}
                          overmous={this.props.overmous}/>
    }
}


const mapStateToProps = (props) => {
    return {
        textForAnimation: props.mainSpace_reducer.textForAnimation,
        setAnimationText: props.mainSpace_reducer.setAnimationText,
        symbol: props.mainSpace_reducer.symbol,
    }
}


export default connect(mapStateToProps, {overmous})(MainSpaceCont);


