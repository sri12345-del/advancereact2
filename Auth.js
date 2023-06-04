import React,{useState,useRef} from "react"

const Login = () => {
    const [islogin, setislogin] = useState(false)
    const [formvalid, setformvalid] = useState(false)
    const [conformpassword, setconformpassword]=useState("")
    const emailval = useRef()
    const passwordval = useRef()    
    const changestate = (e) => {
        e.preventDefault();
        setislogin(preval => !preval)
    }
    const conformhandler = (e) => {
        const value=e.target.value
        const email = emailval.current.value
        const password = passwordval.current.value
        setformvalid(email.includes("@") && password.length>7 && value===password)
        setconformpassword(value)
    }
    const fetchhandler = (e) => {
        e.preventDefault()
        const email = emailval.current.value
        const password = passwordval.current.value
        if (password != conformpassword) {
            alert("check password")
        } else {
            let url
            if (islogin) {
                url="https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCenENgt4LrLH79u1_uh-2mToo1R_OEeRM"
         
            } else {
                url = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCenENgt4LrLH79u1_uh-2mToo1R_OEeRM"
            }
            fetch(url, {
                method: "POST",
                body: JSON.stringify({
                    email: email,
                    password: password,
                    returnSecureToken:true,
                }),
                headers: {
                    "Content-Type": "application/json"
                }
            }).then(res => {
                if (!res.ok) {
                    throw new Error("something is wrong")
                } else {
                    return res.json()
                }
            }).then(data => {
                console.log(data)
            }).catch(err => console.log(err.message))
        }
    }
    return (
        <form onSubmit={fetchhandler}>
            {!islogin && <h2>Sign up</h2>}
            {islogin && <h2>Login</h2>}
            <label>Email</label>
            <input type="text" id="email" ref={emailval}></input>
            <label>Password</label>
            <input type="number" id="password" ref={passwordval}></input>
            <label>Conform Password</label>
            <input type="number" id="name" onChange={conformhandler} value={conformpassword}></input>
            <button style={{backgroundColor:formvalid?"green":"lightblue"}}>{islogin?"login":"signup" }</button>
            <button onClick={changestate}>Have an account?login</button>
        </form>
    )
}

export default Login