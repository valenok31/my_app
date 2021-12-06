import React from "react";
import {profileAPI} from "../../api/api";
import {connect} from "react-redux";
import {setUsersProfile} from "../../redux/thirdSpace_reducer";

class ThirdSpaceAPICont extends React.Component {
    componentDidMount() {
        let userId = 21048;

        profileAPI.getUser(userId).then(data => {
            return this.props.setUsersProfile(data);
        });
    }

    render() {
        debugger;
        let info_set = this.props.profile.fullName;
        return <div>{info_set}</div>
    }
}

let mapStateToProps = (state) => ({
    profile: state.thirdSpace_reducer.profile
})

export default connect(mapStateToProps, {setUsersProfile})(ThirdSpaceAPICont)