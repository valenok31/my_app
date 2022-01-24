import React from "react";
import {connect} from "react-redux";
import {setUserId, setUsersProfile} from "../../redux/fourthSpace_reducer";
import axios from "axios";
import FourthSpace from "./FourthSpace";
import {togglesIsFetching} from "../../redux/generalSetting_reducer";

class FourthSpaceAPICont extends React.Component {

    componentDidMount() {
debugger

        axios.get(`https://jsonplaceholder.typicode.com/photos/` + this.props.userId)
            .then(resp => {
                debugger
                this.props.setUsersProfile(resp.data.thumbnailUrl);
            })
            .catch(resp => {
                debugger
                this.props.setUsersProfile(resp);
            })


/*        axios.get(`https://jsonplaceholder.typicode.com/photos/` + this.props.userId)
            .then(resp => {
                debugger
                this.props.setUsersProfile(resp.data.title);
            })
            .catch(resp => {
                this.props.setUsersProfile('ERROR!!');
            })*/
    }

    render() {

        return <FourthSpace
            isFetching={this.props.isFetching}
            togglesIsFetching={this.props.togglesIsFetching}
            setUsersProfile={this.props.setUsersProfile}
            profile={this.props.profile}
            setUserId={this.props.setUserId}
            userId={this.props.userId}/>
    }
}

let mapStateToProps = (state) => ({
    profile: state.fourthSpace_reducer.profile,
    userId: state.fourthSpace_reducer.userId,
    isFetching: state.generalSetting_reducer.isFetching
})

export default connect(mapStateToProps, {setUsersProfile, setUserId, togglesIsFetching})(FourthSpaceAPICont)