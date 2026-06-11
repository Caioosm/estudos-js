import React, { useState, useEffect } from 'react';

import { toast } from 'react-toastify';
import { isEmail } from 'validator';
import { Container } from '../../styles/GlobalStyles';
import { Form } from './styled';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../store/modules/auth/actions'
import Loading from '../../components/loading';


export default function Register() {
  const dispatch = useDispatch();

  const id = useSelector(state => state.auth.user.id);
  const nameStored = useSelector(state => state.auth.user.nome);
  const emailStored = useSelector(state => state.auth.user.email);
  const isLoading = useSelector(state => state.auth.isLoading);

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [passwordv, setPasswordv] = useState('');

  useEffect(() => {
    if(!id) return;

    setNome(nameStored);
    setEmail(emailStored);
  }, [emailStored, id, nameStored])

  async function handleSubmit(e) {
    e.preventDefault();

    let formErrors = false;

    if(nome.length < 3 || nome.length > 255) {
      formErrors = true;
      toast.error('Nome deve conter entre 3 e 255 caracteres');
    }

    if(!id && (passwordv.length < 6 || passwordv.length > 50)) {
      formErrors = true;
      toast.error('Senha deve conter entre 6 e 50 caracteres');
    }

    if(!isEmail(email)) {
      formErrors = true;
      toast.error('Email inválido');
    }

    if(formErrors) return;

    dispatch(actions.registerRequest({ nome, email, passwordv, id }));
  }

  return (
    <Container>
      <Loading isLoading={isLoading} />
      <h1>{id ? 'Editar dados' : 'Crie sua conta'}</h1>

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

        <label htmlFor="email">
          Email:
          <input
            type='email'
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder='Digite seu email'
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

        <button type='submit'>{id ? 'Salvar' : 'Registrar'}</button>
      </Form>
    </Container>
  );
}
