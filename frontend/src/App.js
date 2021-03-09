import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Navbar from './features/navbar';
import Home from './pages/home';
import Login from './pages/login';
import ProctectedPage from './pages/protected-page';
import Register from './pages/register';
import getMe from './redux/actions/user/getme';

function App() {
  const dispatch = useDispatch();
  const me = useSelector((state) => state.me);
  const { loading, user, error } = me;
  console.log(error);
  useEffect(() => {
    if (!loading && !user) {
      dispatch(getMe());
    } else if (!loading & error) {
      <Redirect to='/login' />;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading, user, error]);

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
