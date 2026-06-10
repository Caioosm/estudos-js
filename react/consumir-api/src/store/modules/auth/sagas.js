import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import * as types from '../types';
import * as actions from './actions';

function* loginRequest({ payload }) {

}

export default all([
  takeLatest(types.LOGIN_REQUEST, loginRequest),
]);
