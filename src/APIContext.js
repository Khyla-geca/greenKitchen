import axios from "axios"
import React, {createContext, useState} from "react"

export const APIContext = createContext()

const APIContextProvider = (props) => {

    const [data, setData] = useState({results: [], extendedIngredients: []})

    const APICall = (url) => {
        axios.get(url).then(res => setData(res.data))
    } 

    return (
        <APIContext.Provider value={{data, APICall}}>
            {props.children}
        </APIContext.Provider>
    )
}

export { APIContextProvider }