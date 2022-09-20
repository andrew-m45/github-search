const githubReducer = (state, action) => {
    // evalute action object
    switch (action.type) {
        case 'GET_USERS':
            return {
                ...state,
                users: action.payload,
                loading: false
            }
        case 'GET_SINGLE_USER':
            return {
                ...state,
                user: action.payload,
                loading: false
            }
        case 'GET_USER_REPOS':
            return {
                ...state,
                repos: action.payload,
                loading: false
            }
        case 'SET_LOADING':
            return {
                ...state,
                loading: true
            }
        case 'RESET_SEARCH':
            return {
                ...state,
                users: []
            }
        default:
            return state
    }
}

export default githubReducer