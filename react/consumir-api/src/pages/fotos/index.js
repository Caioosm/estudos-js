import React, { useState, useEffect } from 'react';
import { get } from 'lodash';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { Container } from '../../styles/GlobalStyles';
import Loading from '../../components/loading';
import {Title, Form} from './styled';
import axios from '../../services/axios';
import history from '../../services/history';
import { toast } from 'react-toastify';
import * as actions from '../../store/modules/auth/actions';

export default function Fotos({ match }) {
  const id = get(match, 'params.id', '');
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [image, setImage] = useState('');

  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        const {data} = await axios.get(`/alunos/${id}`);
        setImage(get(data, 'Images[0].url', ''))
        setIsLoading(false);
      } catch {
        toast.error('Erro ao obter imagem');
        setIsLoading(false);
        history.push('/');
      }
    }

    getData();
  }, [])

  const handleChange = async e => {
    const foto = e.target.files[0];
    const fotoUrl = URL.createObjectURL(foto);

    setImage(fotoUrl);

    const formData = new FormData();
    formData.append('aluno_id', id)
    formData.append('image', foto)

    try {
      setIsLoading(true);

      await axios.post('/images/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        }
      });

      toast.success("Foto enviada com sucesso!")

      setIsLoading(false);
    } catch(err){
      setIsLoading(false);
      const {status} = get(err, 'response', '');
      toast.error('Erro ao enviar foto!');

      if(status === 401){
        dispatch(actions.loginFailure())
      }
    }
  }

  return (
    <Container>
      <Loading isLoading={isLoading} />
      <Title>Fotos</Title>

      <Form>
        <label htmlFor='foto'>
          {image ? <img src={image} alt='foto' /> : 'Selecionar'}
          <input type='file' id='foto' onChange={handleChange} />
        </label>
      </Form>
    </Container>
  );
}

Fotos.propTypes = {
  match: PropTypes.shape({}).isRequired,
}
