import React, { useEffect, useState } from 'react';
import { get } from 'lodash';
import PropTypes from 'prop-types';
import { isEmail, isInt } from 'validator';
import { Form } from './styled';
import { Container } from '../../styles/GlobalStyles';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import Loading from '../../components/loading';
import axios from '../../services/axios';
import history from '../../services/history';

export default function Aluno({ match }) {
  const dispatch = useDispatch();
  const id = get(match, 'params.id', 0);
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [idade, setIdade] = useState('');
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if(!id) return;
    async function getDataAluno() {
      try {
        setIsLoading(true);
        const { data } = await axios.get(`/alunos/${id}`);
        const Foto = get(data, 'Image[0].url', '');

        setNome(data.nome);
        setSobrenome(data.sobrenome);
        setIdade(data.idade);
        setEmail(data.email);

        setIsLoading(false);
      } catch(err){
        setIsLoading(false);
        const status = get(err, 'response.status', 0);
        const errors = get(err, 'response.data.errors', []);
        if(status == 400) errors.map(error => toast.error(error));
        history.push('/');
      }
    }

    getDataAluno();
  }, [id]);

  const handleSubmit = e => {
    e.preventDefault();
    let formErros = false;

    if(nome.length < 3 || nome.length > 255){
      formErros = true
      toast.error('Nome deve conter entre 3 e 255 caracteres');
    }

    if(sobrenome.length < 3 || sobrenome.length > 255){
      formErros = true
      toast.error('Sobrenome deve conter entre 3 e 255 caracteres');
    }

    if(!isInt(String(idade))){
      formErros = true;
      toast.error('Idade invalida!')
    }

    if(!isEmail(email)){
      formErros = true;
      toast.error('Email inválido');
    }

    if(formErros) return;

    // dispatch();
  };

  return (
    <Container>
      <Loading isLoading={isLoading} />
      <h1>{id ? 'Editar Aluno' : 'Novo Aluno'}</h1>

      <Form onSubmit={handleSubmit}>
        <input
          type='text'
          value={nome}
          onChange={e => setNome(e.target.value)}
          placeholder='Nome'
        />
        <input
          type='text'
          value={sobrenome}
          onChange={e => setSobrenome(e.target.value)}
          placeholder='sobrenome'
        />
        <input
          type='number'
          value={idade}
          onChange={e => setIdade(e.target.value)}
          placeholder='idade'
        />
        <input
          type='email'
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder='E-mail'
        />

        <button type='submit'>{id ? 'Salvar' : 'Cadastrar'}</button>
      </Form>

    </Container>
  );
}

Aluno.propTypes = {
  match: PropTypes.shape({}).isRequired,
};
