import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import { get } from 'lodash';
import { FaUserCircle, FaEdit, FaWindowClose, FaExclamation } from 'react-icons/fa'

import { Container } from '../../styles/GlobalStyles';
import axios from '../../services/axios';
import { AlunoContainer, ProfilePicture } from './styled';
import Loading from '../../components/loading';
import { toast } from 'react-toastify';

export default function Alunos() {
  const [alunos, setAlunos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getAlunos(){
      setIsLoading(true);
      const response = await axios.get('/alunos/');
      setAlunos(response.data);
      setIsLoading(false);
    }
    getAlunos();
  }, []);

  const handleDeleteAsk = e => {
    e.preventDefault();
    const exclamation = e.currentTarget.nextSibling;
    exclamation.setAttribute('display', 'block');
    e.currentTarget.remove();
  }

  const handleConfirmDelete = async(e, id, index) => {
    e.persist();
    try {
      setIsLoading(true);
      await axios.delete(`/alunos/${id}`)
      const novosAlunos = [...alunos];
      novosAlunos.splice(index, 1);
      setAlunos(novosAlunos);
      setIsLoading(false);

    } catch(err) {
      const status = get(err, 'response.status', 0);
      if(status == 401) {
        toast.error("Voce precisa fazer login!");
      }else {
        toast.error("Ocorreu um erro ao tentar excluir o aluno!");
      }

      setIsLoading(false);
    }
  }

  return (
    <Container>
      <Loading isLoading={isLoading} />

      <h1>Alunos</h1>

      <AlunoContainer>
        {alunos.map((aluno, index) => (
          <div key={String(aluno.id)}>

            <ProfilePicture>
              {get(aluno, 'Images[0].url', '') ? (
                <img src={aluno.Images[0].url} />
              ) : (
                <FaUserCircle size={36}/>
              )}
            </ProfilePicture>

            <span>{aluno.nome}</span>
            <span>{aluno.email}</span>

            <Link to={`/aluno/${aluno.id}/edit`}>
              <FaEdit size={16}/>
            </Link>

            <Link onClick={handleDeleteAsk} to={`/aluno/${aluno.id}/delete`} >
              <FaWindowClose />
            </Link>

            <FaExclamation
              onClick={e => handleConfirmDelete(e, aluno.id, index)}
              size={16}
              display="none"
              cursor="pointer"
            />
          </div>
        ))}
      </AlunoContainer>

    </Container>
  );
}
