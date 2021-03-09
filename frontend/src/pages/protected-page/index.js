import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

export default function ProctectedPage({ component: Component, ...rest }) {
  const me = useSelector((state) => state.me);
  const { loading, user } = me;

  return (
    <Route
      {...rest}
      render={(props) =>
        !loading && !user ? <Redirect to='/login' /> : <Component {...props} />
      }
    />
  );
}
