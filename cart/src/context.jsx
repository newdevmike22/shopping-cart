import { useContext, useReducer, useEffect, createContext } from "react";
import reducer from "./reducer";
import cartItems from "./data";

import { 
    CLEAR_CART, 
    REMOVE, 
    INCREASE, 
    DECREASE, 
    LOADING, 
    DISPLAY_ITEMS 
} from "./actions";

const AppContext = createContext();

const initialState = {
    loading:false,
    cart: new Map(),
};

export const AppProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <AppContext.Provider value={{...state}}>
            {children}
        </AppContext.Provider>
    )
};

export const useGlobalContext = () => {
    return useContext(AppContext);
};