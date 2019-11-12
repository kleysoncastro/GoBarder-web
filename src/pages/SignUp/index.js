import React from 'react';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';

import logo from '~/assets/logo.svg';

export default function SignUp() {
  const shcema = Yup.object().shape({
    name: Yup.string().required('Nome completo'),
    email: Yup.string()
      .email('Seu de cadastro')
      .required('Email é obrigatorio'),
    password: Yup.string()
      .min(6, 'No minimo 6 caracteres')
      .required('Senha é obrigatoria'),
  });
  function handleSubmit(data) {
    console.tron.log(data);
  }
  return (
    <>
      <img src={logo} alt="GoBarber" />
      <Form schema={shcema} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Nome completo" />
        <Input name="email" type="email" placeholder="Seu e-mail" />
        <Input
          name="password"
          type="password"
          placeholder="Sua senha secreta"
        />

        <button type="submit">Criar conta</button>
        <Link to="/">Já tenha Login</Link>
      </Form>
    </>
  );
}
