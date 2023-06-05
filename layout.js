import Mainheader from "./Mainheader"
import {useHistory} from "react-router-dom"

const Layout = (props) => {

    const history=useHistory()

    const logouthandler = () => {
        history.replace("/auth")
        localStorage.removeItem("key")
    }
    return (
        <div>
            <Mainheader></Mainheader>
            {localStorage.getItem("key") && <div><button onClick={logouthandler}>Logout</button></div>}
            <main>{ props.children}</main>
        </div>
    )
}

export default Layout