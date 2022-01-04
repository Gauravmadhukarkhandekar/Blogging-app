import { createContext } from "react";

export const defaultState = {
    user:{
        id: "",
        name: "",
        username: "",
        email: "",
        address: {
            suite: "",
          street: "",
          city: "",
          zipcode: "",
          geo: {
            lat: "",
            lng: ""
          }
        },
        phone: "",
        website: "",
        company: {
          name: "",
          catchPhrase: "",
          bs: ""
        }
    },
    theme : "light",
    post:{
        userId: "",
        id: "",
        title: "",
        body: ""
    },
    users: [],
    posts:[]
}

const APP_CONTEXT = createContext(defaultState);

export default APP_CONTEXT