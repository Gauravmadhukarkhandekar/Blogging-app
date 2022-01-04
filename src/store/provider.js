import APP_CONTEXT, { defaultState } from "./context";

import { useReducer } from "react";


const storeReducer = (state, action) =>{
    console.log(state,action);
    switch(action.type){
        case "ADD": return{
            users : [...action.data.users],
            theme : state.theme,
            user : state.user,
            posts : [...action.data.posts]
        }
    }
}

const APP_PROVIDER = ({children}) =>{
    const [store, dispatchStoreAction] = useReducer(storeReducer , defaultState);

    const storeData = (data) =>{
        //console.log("provider: " , data)
        dispatchStoreAction({type:"ADD" , data: data});
    }

    const storeContext = {
        user : store.user,
        theme : store.theme,
        post : store.post,
        users : store.users,
        posts: store.posts,
        storeData: storeData
    }

    return(
        <APP_CONTEXT.Provider value = {storeContext}>{children}</APP_CONTEXT.Provider>
    )
}

export default APP_PROVIDER;