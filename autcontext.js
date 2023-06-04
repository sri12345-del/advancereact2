import React, { useState, useEffect } from "react";

const Autcontext = React.createContext({
  token: "",
  userdata: [],
  usertokenid: (token) => {},
  addtoken: (token) => {},
});

export const Autcontextprovider = (props) => {
  const [token, settoken] = useState("");
  const [usertokenid, setusertokenid] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("key")) {
      fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyCenENgt4LrLH79u1_uh-2mToo1R_OEeRM",
        {
          method: "POST",
          body: JSON.stringify({
            idToken: localStorage.getItem("key"),
          }),
        }
      )
        .then((res) => {
          if (!res.ok) {
            throw new Error("somthing is wrong");
          } else {
            return res.json();
          }
        })
        .then((data) => {
          console.log((data.users));
          setusertokenid(data.users);
        })
        .catch((err) => console.log(err.message));
    }
  }, []);

  const addtokenhandler = (token) => {
    settoken(token);
    localStorage.setItem("key", token);
  };
  const usertokenidhandler = (token) => {
    setusertokenid(token);
    localStorage.setItem("idToken", token);
  };

  const obj = {
    token: token,
    userdata: usertokenid,
    usertokenid: usertokenidhandler,
    addtoken: addtokenhandler,
  };

  return (
    <div>
      <Autcontext.Provider value={obj}>{props.children}</Autcontext.Provider>
    </div>
  );
};

export default Autcontext;
