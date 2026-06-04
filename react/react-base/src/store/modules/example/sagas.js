import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import * as types from '../types';
import * as actions from './actions';

const requisicao = () => new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Requisição feita com sucesso!');
  }, 2000);
});

function* examploRequest(){
  try{
    yield call(requisicao);
    yield put(actions.login_request_success());
  } catch {
    toast.error('Erro na requisição');
    yield put(actions.login_request_failure());
  }
}

export default all([
  takeLatest(types.LOGIN_REQUEST, examploRequest),
]);
