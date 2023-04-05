import React from "react";
import { useState,useReducer,useContext } from "react";
import { DISPLAY_ALERT } from "./actions";
import reducer from "./reducer";

const initialState = {
    isLoading:false,
    showAlert:false,
    alertText: '',
    alertType: '',
}

const AppContext = React.createContext()

// look for children bcs we will render  our entire application
const AppProvider = ({children}) =>{
    // const [state , setState] = useState(initialState)
    const [state , dispatch] = useReducer(reducer, initialState)

    const displayAlert = () =>{
        dispatch({type:DISPLAY_ALERT})
    }

    return <AppContext.Provider value={{...state , displayAlert}}>
        {children}
    </AppContext.Provider>
}

const useAppContext = () =>{
    return useContext(AppContext);
}

export {AppProvider , initialState , useAppContext}