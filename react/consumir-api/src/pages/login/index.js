import React from 'react';
import { useDispatch } from 'react-redux';

import { Container } from '../../styles/GlobalStyles';
import * as ExampleActions from '../../store/modules/example/actions';
import { Title } from './styled';

import axios from '../../services/axios';

export default function Login() {
  const dispatch = useDispatch();
  function handleClick(e) {
    e.preventDefault();

    dispatch(ExampleActions.login_request());
  }

  return (
    <Container>
      <Title>
        Login
        <small>Page</small>
      </Title>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <button type="button" onClick={handleClick} >Entrar</button>
    </Container>
  );
}
