export default (state = [], action) => {
    console.log('4) - usersReducer : ', state);

    switch (action.type) {
        case 'FETCH_USER':
            return [...state, action.payload];
        default:
            return state
    }
}