import React from 'react';

import { Container } from '../../styles/GlobalStyles';

import { Title } from './styled';

import axios from '../../services/axios';

export default function Login() {
  React.useEffect(() => {
    async function getData(){
      const response = await axios.get('/alunos');
      const { data } = response;
      console.log(data);
    }

    getData();
  }, []);

  return (
    <Container>
      <Title>
        Login
        <small>Page</small>
      </Title>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <button type="button">Entrar</button>
    </Container>
  );
}
