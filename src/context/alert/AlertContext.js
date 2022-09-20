import { createContext, useReducer } from "react";
import alertReducer from './AlertReducer'

const AlertContext = createContext()

export const AlertProvider = ({ children }) => {
    const initalState = null

    const [state, dispatch] = useReducer(alertReducer, initalState)

    // set alert
    const setAlert = (message, type) => {
        dispatch({
            type: 'SET_ALERT',
            payload: { message, type }
        })

        // hide alert
        setTimeout(() => dispatch({ type: 'CLEAR_ALERT' }), 3000)
    }


    return <AlertContext.Provider value={{ alert: state, setAlert }}>{children}</AlertContext.Provider>
}

export default AlertContext