import SecondarySpace from "./SecondarySpace";
import {connect} from "react-redux";
import {updateNewPostText,clickResult,clickNumbersButtonId} from "../../redux/secondarySpace_reducer";

const mapStateToProps = (props) => {
    return {
        text: props.secondarySpace_reducer.text,
        value_a: props.secondarySpace_reducer.value_a,
        matchControl: props.secondarySpace_reducer.matchControl,
    }
}

export default connect(mapStateToProps, {updateNewPostText,clickResult,clickNumbersButtonId})(SecondarySpace);