import React from 'react';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { Form, Input } from '@rocketseat/unform';

import logo from '~/assets/logo.svg';

export default function SignIn() {
  const shcema = Yup.object().shape({
    email: Yup.string()
      .email('Seu de cadastro')
      .required('Email é obrigatorio'),
    password: Yup.string().required('Senha é obrigatoria'),
  });

  function handleSubmit(data) {
    console.tron.log(data);
  }

  return (
    <>
      <img src={logo} alt="GoBarber" />
      <Form schema={shcema} onSubmit={handleSubmit}>
        <Input name="email" type="email" placeholder="Seu email vaforito" />
        <Input name="password" type="password" placeholder="Senha secreta" />

        <button type="submit">Enviar</button>
        <Link to="/register">Criar conta grátis</Link>
      </Form>
    </>
  );
}
