import React from "react";
import {connect} from "react-redux";
import {setUsersProfile} from "../../redux/thirdSpace_reducer";
import axios from "axios";

class ThirdSpaceAPICont extends React.Component {

    componentDidMount() {
        let userId = 21047;

        /*        profileAPI.getUser(userId).then(data => {
                    return this.props.setUsersProfile(data);
                });*/

        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(resp => {
                this.props.setUsersProfile(resp.data.fullName);
            })
            .catch(resp => {
                this.props.setUsersProfile('ERROR!!');
            })
    }

    render() {

        let info_set = this.props.profile;
        return <div>{info_set}</div>
    }
}

let mapStateToProps = (state) => ({
    profile: state.thirdSpace_reducer.profile
})

export default connect(mapStateToProps, {setUsersProfile})(ThirdSpaceAPICont)