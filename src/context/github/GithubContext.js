import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducer";

const GITHUB_ENDPOINT = process.env.REACT_APP_GITHUB_API_URL
const GITHUB_AUTH_TOKEN = process.env.REACT_APP_GITHUB_API_TOKEN

// create github context
const GithubContext = createContext()

// provider for components to access context
export const GithubProvider = ({ children }) => {
    // reducer state
    const initalState = {
        users: [],
        user: {},
        repos: [],
        loading: false,
    }

    const [state, dispatch] = useReducer(githubReducer, initalState)

    // fetch search results
    const searchUsers = async (searchTerm) => {
        // update fetch load status
        setLoading()

        // construct query params
        const params = new URLSearchParams({
            q: searchTerm
        })

        const res = await fetch(`${GITHUB_ENDPOINT}/search/users?${params}`, {
            headers: {
                Authorization: `token ${GITHUB_AUTH_TOKEN}`
            },
        })

        const { items } = await res.json()

        // update users state
        dispatch({
            type: 'GET_USERS',
            payload: items,
        })
    }

    // fetch single user
    const getUser = async (username) => {
        // update fetch load status
        setLoading()

        const res = await fetch(`${GITHUB_ENDPOINT}/users/${username}`, {
            headers: {
                Authorization: `token ${GITHUB_AUTH_TOKEN}`
            },
        })

        // check the response/valid username
        if (res.status === "404") window.location = "/notfound"

        const data = await res.json()

        // update single user state/object
        dispatch({
            type: 'GET_SINGLE_USER',
            payload: data,
        })
    }

    const getUserRepos = async (username) => {
        // update fetch load status
        setLoading()

        // constructing query params
        const params = new URLSearchParams({
            sort: 'created',
            per_page: 10
        })

        // fetch repos
        const res = await fetch(`${GITHUB_ENDPOINT}/users/${username}/repos?${params}`, {
            headers: {
                Authorization: `token ${GITHUB_AUTH_TOKEN}`
            },
        })

        const data = await res.json()

        // update user repo state
        dispatch({
            type: 'GET_USER_REPOS',
            payload: data,
        })
    }

    // update status when fetching data
    const setLoading = () => dispatch({ type: 'SET_LOADING' })

    // clear users from state 
    const resetSearch = () => dispatch({ type: 'RESET_SEARCH' })

    return <GithubContext.Provider
        value={{
            users: state.users,
            user: state.user,
            repos: state.repos,
            loading: state.loading,
            searchUsers,
            getUser,
            getUserRepos,
            resetSearch,
        }}>{children}</GithubContext.Provider>
}

export default GithubContext