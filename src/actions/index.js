import _ from "lodash";
import jsonPlaceholder from "../api/jsonPlaceholder";

export const fetchPosts = () => async dispatch => {
    const response = await jsonPlaceholder.get('/posts');
    // console.log('3) ACTION fetch response.data & dispatch to STORE :', response.data);

    dispatch({type: 'FETCH_POSTS', payload: response.data})
}

// issue: makes a lot of fetch users requests
export const fetchUser = id => async dispatch => {
    const response = await jsonPlaceholder.get(`/users/${id}`);
    console.log('... About to fetchUser ... ');
    dispatch({type: 'FETCH_USER', payload: response.data})
    console.log('... dispatch fetchUser ... ');
}


// solution #1 to solve issue (use Lodash memorize), but need to refetch users when API change them
// export const fetchUser = id => dispatch => _fetchUser(id, dispatch);
// const _fetchUser = _.memoize(
//     async (id, dispatch) => {
//         const response = await jsonPlaceholder.get(`/users/${id}`);
//
//         dispatch({type: 'FETCH_USER', payload: response.data})
//     }
// )

// solution #2 to solve issue - find all unique urerIds from list of posts (fetchPosts())
// & iterate over userIds, call fetchUser() with each userID
// export const fetchPostsAndUsers = () => async (dispatch, getState) => {
//     console.log('... About to fetch posts ...')
//     await dispatch(fetchPosts())
//     console.log('... Fetched posts ...')
//
//     const userIds = _.uniq(_.map(getState().posts, 'userId'));
//     console.log('... userIds ...', userIds)
//
//     userIds.forEach(id => dispatch(fetchUser(id)))
// }

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
    await dispatch(fetchPosts());

    _.chain(getState().posts)
        .map('userId')
        .uniq()
        .forEach(id => dispatch(fetchUser(id)))
        .value()
}