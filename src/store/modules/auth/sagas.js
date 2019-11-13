import { all, takeLatest, call, put } from 'redux-saga/effects';
import api from '~/services/api';
import history from '~/services/history';

import { sigInSuccess } from './actions';

export function* signIn({ payload }) {
  const { email, password } = payload;

  const response = yield call(api.post, '/sessions', {
    email,
    password,
  });

  const { token, user } = response.data;

  if (!user.provider) {
    console.tron.error('usuariario nao é prestador');
    return;
  }

  yield put(sigInSuccess(token, user));

  history.push('/dashboard');
}

export default all([takeLatest('@auth/SIGN_IN_REQUEST', signIn)]);
