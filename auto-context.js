import React, { useState ,useEffect} from "react";

const Autocontext = React.createContext({
  isLoggedIn: false,
  onLogout: () => { },
  onLogin:(email,password)=>{}
});

export const Autocontextprovider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const setlocalstorage = localStorage.getItem("key")
    if (setlocalstorage == "1") {
      setIsLoggedIn(true)
    }
  },[])

  const loginHandler = () => {
    localStorage.setItem("key","1")
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem('key')
    setIsLoggedIn(false);
  };
  return (
    <Autocontext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogout: logoutHandler,
        onLogin: loginHandler,
      }}
    >
      {props.children}
    </Autocontext.Provider>
  );
};

export default Autocontext;
