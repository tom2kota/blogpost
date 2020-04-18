export default (state = [], action) => {
    console.log('4) + postsReducer maintains an array of all fetched posts STATE : ', state);

    switch (action.type) {
        case 'FETCH_POSTS':
            return action.payload;
        default:
            return state
    }
}