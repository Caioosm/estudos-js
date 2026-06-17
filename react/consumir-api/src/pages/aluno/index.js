import React, { useEffect, useState } from 'react';
import { get } from 'lodash';
import PropTypes from 'prop-types';
import { isEmail, isInt } from 'validator';
import { Form, ProfilePicture, Title } from './styled';
import { Container } from '../../styles/GlobalStyles';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { FaEdit, FaUserCircle } from 'react-icons/fa'
import * as actions from '../../store/modules/auth/actions'
import Loading from '../../components/loading';
import axios from '../../services/axios';
import history from '../../services/history';
import { Link } from 'react-router-dom';

export default function Aluno({ match }) {
  const dispatch = useDispatch();
  const id = get(match, 'params.id', '');
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [idade, setIdade] = useState('');
  const [email, setEmail] = useState('');
  const [image, setImage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if(!id) return;
    async function getDataAluno() {
      try {
        setIsLoading(true);
        const { data } = await axios.get(`/alunos/${id}`);
        const Foto = get(data, 'Image[0].url', '');

        setImage(Foto);
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

  const handleSubmit = async e => {
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

    try {
      setIsLoading(true);
      if(id) {
        //editando
        await axios.put(`/alunos/${id}`, {
          nome,
          sobrenome,
          idade,
          email
        });
        toast.success('Aluno editado com sucesso!');
      } else {
        //criando
        const {data} = await axios.post(`/alunos/`, {
          nome,
          sobrenome,
          idade,
          email
        });
        toast.success('Aluno registrado com sucesso!');
        history.push(`/aluno/${data.id}/edit`);
      }
      setIsLoading(false);
    } catch(err) {
      const status = get(err, 'response.status', 0);
      const data = get(err, 'response.data', []);
      const errors = get(data, 'errors', []);

      if(errors.length > 0) {
        errors.map(error => toast.error(error))
      } else {
        toast.error("Ocorreu um erro inesperado!")
      }

      if(status === 401) dispatch(actions.loginFailure());
    }
  };

  return (
    <Container>
      <Loading isLoading={isLoading} />
      <Title>{id ? 'Editar Aluno' : 'Novo Aluno'}</Title>

      {id && (
        <ProfilePicture>
          {image ? (
            <img src={image} alt={nome} />
          ) : (
            <FaUserCircle size={180} />
          )}
          <Link to={`/fotos/${id}`}>
            <FaEdit size={24} />
          </Link>
        </ProfilePicture>
      )}

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
