import { Fragment } from 'react';
import MainHeader from './MainHeader';
import Notification from '../UI/Notification';
import { useSelector } from 'react-redux';

const Layout = (props) => {

  const notfystate = useSelector(state => state.notfy.title)
  const notfymessage = useSelector(state => state.notfy.message)
  console.log(notfystate)
  
  return (
    <Fragment>
      <Notification title={notfystate} status={notfystate} message={notfymessage}></Notification>
      <MainHeader />
      <main>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
