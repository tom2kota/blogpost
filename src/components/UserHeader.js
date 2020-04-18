import React, {Component} from "react";
import {connect} from "react-redux";

class UserHeader extends Component {

    renderUser() {
        const user = this.props.users.find(user => user.id === this.props.userIdPosts);
        if (user)
            return user.name;
        return 'Fetching users ...';
    }

    render() {
        return <div className="header">
            {/*UserHeader with userIdPosts (from: /posts): {this.props.userIdPosts} & (from: /users/id):*/}
            {this.renderUser()}
        </div>
    }
}

const mapToStateProps = state => ({users: state.users})
//
// export default connect(mapToStateProps, {fetchUser})(UserHeader)


export default connect(mapToStateProps)(UserHeader)

