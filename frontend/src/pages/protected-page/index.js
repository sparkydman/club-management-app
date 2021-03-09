import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import getMe from '../../redux/actions/user/getme';

export default function ProctectedPage({ component: Component, ...rest }) {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.token);
  const { loading, token, error } = auth;
  useEffect(() => {
    if (!loading && !token) {
      dispatch(getMe());
    }
  }, [loading, token, error, dispatch]);

  useEffect(() => {
    if (!loading && error) {
      <Redirect to='/login' />;
    }
  }, [loading, error]);

  return <Route {...rest} render={(props) => <Component {...props} />} />;
}
