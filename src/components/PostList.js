import React, {Component} from 'react';
import {connect} from "react-redux";
// import {fetchPosts} from "../actions";
import {fetchPostsAndUsers} from "../actions";
import UserHeader from "./UserHeader";

class PostList extends Component {
    componentDidMount() {
        console.log('1) componentDidMount() {this.props} : ', this.props);

        // this.props.fetchPosts();
        // console.log('2) ACTION CREATOR {this.props.fetchPost()} : ', this.props.fetchPosts());

        // console.log('2) ACTION CREATOR {this.props.fetchPostsAndUsers()} : ', this.props.fetchPostsAndUsers());
        this.props.fetchPostsAndUsers();
    }

    renderList() {
        return this.props.posts.map(post => (
                <div className="item" key={post.id}>
                    <i className="large middle aligned icon user"/>
                    <div className="content">
                        <div className="description">
                            <h2>{post.title}</h2>
                            <p>{post.body}</p>
                        </div>
                        <UserHeader userIdPosts={post.userId}/>
                    </div>
                </div>
            )
        )
    }

    render() {
        // console.log('5) render() {this.props.posts} ... PROPS from REDUCER STATE: ', this.props.posts);

        return (
            <div className="ui relaxed divided list">{this.renderList()}</div>
        )
    }
}


const mapStateToProps = state => ({posts: state.posts})

export default connect(mapStateToProps,
    {fetchPostsAndUsers}
)(PostList)

// export default connect(mapStateToProps,
//     {fetchPosts}
// )(PostList)