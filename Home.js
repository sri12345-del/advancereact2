import React, { useState ,useRef,useContext, useEffect} from "react";
import Autcontext from "../store/autcontext";

const Home = () => {
    const autctx = useContext(Autcontext)
    
    const [isshow, setisshow] = useState(false);
    const [name, setname] = useState("")
    const [photourl, setphotourl] = useState("")
    
      const namehandler = (e) => {
        setname(e.target.value)
    }

    const urlhandler = (e) => {
        setphotourl(e.target.value)
    }

  const profileupdatehandler = () => {
    setisshow(true);
    };
    const updatehandler = (e) => {
        e.preventDefault();
        const token = localStorage.getItem("key")
        console.log(token)
        fetch("https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyCenENgt4LrLH79u1_uh-2mToo1R_OEeRM", {
            method: "POST",
            body: JSON.stringify({
                idToken: token,
                displayName:name,
                photoUrl: photourl,
                deleteAttribute: null,
                returnSecureToken:true
            }),
        }).then(res => {
            if (!res.ok) {
                throw new Error("somthing is wrong")
            } else {
                return res.json()
            }
        }).then(data => {
            console.log(data)
            autctx.usertokenid(data.localId)
        }).catch(err => {
            console.log(err.message)
        })
        name = ""
        photourl=""
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
            <input type="text" onChange={namehandler} value={autctx.userdata[0].displayName}></input>
            <label>Profile photo URL</label>
            <input type="text" onChange={urlhandler} value={autctx.userdata[0].photoUrl}></input>
            <button onClick={updatehandler}>Update</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Home;
