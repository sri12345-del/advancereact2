import React,{useState} from "react"

const Autcontext = React.createContext({
    token: "",
    addtoken:(token)=>{},
})

export const Autcontextprovider = (props) => {
    const [token, settoken] = useState("")
    

    const addtokenhandler = (token) => {
        settoken(token)
        localStorage.setItem("key",token)
    }

    const obj = {
        token: token,
        addtoken:addtokenhandler
    
}

    return <div>
        <Autcontext.Provider value={obj}>{ props.children}</Autcontext.Provider>
    </div>
}

export default Autcontext;