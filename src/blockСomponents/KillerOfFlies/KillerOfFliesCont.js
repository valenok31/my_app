import React from "react";
import {connect} from "react-redux";
import KillerOfFlies from "./KillerOfFlies";
import killFlies_reducer from "../../redux/killFlies_reducer";

const KillerOfFliesCont = () => {


    return <div><KillerOfFlies/>
    </div>

}

const mapStateToProps = (props) => {
    return {
        tellFly: props.killFlies_reducer.tellFly,
    }

}


export default connect(mapStateToProps, {})(KillerOfFliesCont)