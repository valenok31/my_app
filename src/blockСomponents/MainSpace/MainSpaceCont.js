import React from "react";
import {connect} from "react-redux";
import {minus, plus, overmous} from "../../redux/mainSpace_reducer";
import MainSpace from "./MainSpace";

const mapStateToProps = (props) => {
    return {
        users:  props.mainSpace_reducer.users,
        pageSize:  props.mainSpace_reducer.pageSize,
        totalUsersCount:  props.mainSpace_reducer.totalUsersCount,
        currentPage:  props.mainSpace_reducer.currentPage,
        isFetching:  props.mainSpace_reducer.isFetching,
        collorBox: props.mainSpace_reducer.collorBox,
    }
}

/*const mapDispatchToProps = (dispatch) => {
    return {
        plus: () => {
            dispatch(plus());
        },
        minus: () => {
            dispatch(minus());
        },

    }
}*/

export default connect(mapStateToProps, {plus, minus, overmous})(MainSpace);


