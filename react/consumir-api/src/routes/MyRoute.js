import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

export default function MyRoute({ component: Component, isPrivate, ...rest }) {
  const isSigned = useSelector(state => state.auth.isLoggedIn);

  if(isPrivate && !isSigned) {
    return (
      <Redirect
        to= {{
          pathname: '/login',
          state: {
            prevPath: rest.location.pathname
          }
        }}
      />
    );
  }

  return <Route {...rest} component={Component} />;
}

MyRoute.defaultProps = {
  isPrivate: false
}

MyRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
  isPrivate: PropTypes.bool
}
