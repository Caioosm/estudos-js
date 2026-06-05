import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function MyRoute({ component: Component, isPrivate, ...rest }) {
  const isSigned = false;

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
