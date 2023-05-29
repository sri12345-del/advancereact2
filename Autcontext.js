import React, { useState } from "react";

const Autcontext = React.createContext({
  token: "",
  isloogedin: false,
  login: (token) => {},
  logout: () => {},
});

export const Autcontextprovider = (props) => {
    const [token, settoken] = useState(null);

    const useIslogged=!!token
    
  const loginhandler = (tok) => {
    settoken(tok);
  };

  const logouthandler = () => {
    settoken(null);
  };

  const obj = {
    token: token,
    isloogedin: useIslogged,
    login: loginhandler,
    logout: logouthandler,
  };

  return (
    <Autcontext.Provider value={obj}>{props.children}</Autcontext.Provider>
  );
};

export default Autcontext;
