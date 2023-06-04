import Mainheader from "./Mainheader"

const Layout = (props) => {
    return (
        <div>
            <Mainheader></Mainheader>
            <main>{ props.children}</main>
        </div>
    )
}

export default Layout