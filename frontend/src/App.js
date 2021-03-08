import React from 'react';
// import { useDispatch } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './features/navbar';
import Home from './pages/home';
import Login from './pages/login';
import ProctectedPage from './pages/protected-page';
import Register from './pages/register';
// import getMe from './redux/actions/user/getme';

function App() {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getMe);
  // });

  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <ProctectedPage path='/' exact component={Home} />
        <Route path='/login' exact component={Login} />
        <Route path='/register' exact component={Register} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
