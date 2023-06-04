import React, { useState ,useRef,useContext} from "react";
import Autcontext from "../store/autcontext";

const Home = () => {
    const [isshow, setisshow] = useState(false);

    const autctx=useContext(Autcontext)
    
    const updatename = useRef()
    const updateurl=useRef()

  const profileupdatehandler = () => {
    setisshow(true);
    };
    const updatehandler = (e) => {
        e.preventDefault();
        const name = updatename.current.value
        const url = updateurl.current.value
        fetch("https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyCenENgt4LrLH79u1_uh-2mToo1R_OEeRM", {
            method: "POST",
            body: JSON.stringify({
                idToken: autctx.token,
                displayName: updatename.current.value,
                photoUrl: updateurl.current.value,
                deleteAttribute: null,
                returnSecureToken:true
            })
        }).then(res => {
            if (!res.ok) {
                throw new Error("somthing is wrong")
            } else {
                return res.json()
            }
        }).then(data => {
            console.log(data)
        }).catch(err => {
            console.log(err.message)
        })
        updatename.current.value = ("")
        updateurl.current.value=("")
    }
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <h1>Welcome to the Expense tracker</h1>
      {!isshow && (
        <div>
          <span>your profile is incomplete.</span>
          <button onClick={profileupdatehandler}>Complete now</button>
        </div>
      )}
      {isshow && (
        <div>
          <div>
            <span><h1>Contect Details</h1></span>
            <span><button>Close</button></span>
          </div>
          <form>
            <label>FullName</label>
            <input type="text" ref={updatename}></input>
            <label>Profile photo URL</label>
            <input type="text" ref={updateurl}></input>
            <button onClick={updatehandler}>Update</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Home;
