import React, { useState } from 'react';

import axios from '../../services/axios';

import { toast } from 'react-toastify';
import { isEmail } from 'validator';
import { Container } from '../../styles/GlobalStyles';
import { Form } from './styled';


export default function Login() {
  const [email, setEmail] = useState('');
  const [passwordv, setPasswordv] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();


    let formErrors = false;

    if(!isEmail(email)) {
      formErrors = true;
      toast.error('Campo email inválido');
    }

    if(passwordv.length < 6 || passwordv.length > 50) {
      formErrors = true;
      toast.error('Senha deve conter entre 6 e 50 caracteres');
    }

    if(formErrors) return;
  };

  return (
    <Container>
      <h1>Faça seu login</h1>
      <Form onSubmit={handleSubmit}>
        <input
          type="text"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder='Email'
        />

        <input
          type="password"
          value={passwordv}
          onChange={e => setPasswordv(e.target.value)}
          placeholder='Password'
        />

        <button type='submit'>Entrar</button>
      </Form>
    </Container>
  );
}
