import { Fragment } from 'react';
import Counter from './components/Counter';

import Header from './components/Header';
import Auth from './components/Auth';
import UserProfile from './components/UserProfile';
import { useSelector } from 'react-redux';

function App() {

  const isauth=useSelector(state=>state.isauth)
  return (
    <Fragment>
      <Header></Header>
      {!isauth && <Auth></Auth>}
      {isauth && <UserProfile></UserProfile>}
      <Counter />
    </Fragment>
  );
}

export default App;
