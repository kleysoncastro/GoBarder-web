import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { Form, Input } from '@rocketseat/unform';

import { signInRequest } from '~/store/modules/auth/actions';

import logo from '~/assets/logo.svg';

const shcema = Yup.object().shape({
  email: Yup.string()
    .email('Seu de cadastro')
    .required('Email é obrigatorio'),
  password: Yup.string().required('Senha é obrigatoria'),
});

export default function SignIn() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
  }

  return (
    <>
      <img src={logo} alt="GoBarber" />
      <Form schema={shcema} onSubmit={handleSubmit}>
        <Input name="email" type="email" placeholder="Seu email vaforito" />
        <Input name="password" type="password" placeholder="Senha secreta" />

        <button type="submit">{loading ? 'Garregando...' : 'Acessar'}</button>
        <Link to="/register">Criar conta grátis</Link>
      </Form>
    </>
  );
}
