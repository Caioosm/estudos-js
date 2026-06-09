import React, { useState } from 'react';

import axios from '../../services/axios';
import history from '../../services/history';
import { toast } from 'react-toastify';
import { isEmail } from 'validator';
import { get } from 'lodash';
import { Container } from '../../styles/GlobalStyles';
import { Form } from './styled';

export default function Register() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [passwordv, setPasswordv] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();

    let formErrors = false;

    if(nome.length < 3 || nome.length > 255) {
      formErrors = true;
      toast.error('Nome deve conter entre 3 e 255 caracteres');
    }

    if(passwordv.length < 6 || passwordv.length > 50) {
      formErrors = true;
      toast.error('Senha deve conter entre 6 e 50 caracteres');
    }

    if(!isEmail(email)) {
      formErrors = true;
      toast.error('Email inválido');
    }

    if(formErrors) return;

    try {
      await axios.post('/users', {
        nome,
        passwordv,
        email
      });
      toast.success('Registro criado com sucesso!');
      history.push('/login');
    } catch (err) {
      const errors = get(err, 'response.data.errors', []);
      errors.map(error => toast.error(error));
    }
  }

  return (
    <Container>
      <h1>Crie sua conta</h1>

      <Form onSubmit={handleSubmit}>
        <label htmlFor="nome">
          Nome:
          <input
            type='text'
            value={nome}
            onChange={e => setNome(e.target.value)}
            placeholder='Digite seu nome'
          />
        </label>

        <label htmlFor="password">
          Senha:
          <input
            type='password'
            value={passwordv}
            onChange={e => setPasswordv(e.target.value)}
            placeholder='Digite sua senha'
          />
        </label>

        <label htmlFor="email">
          Email:
          <input
            type='email'
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder='Digite seu email'
          />
        </label>

        <button type='submit'>Registrar</button>
      </Form>
    </Container>
  );
}
