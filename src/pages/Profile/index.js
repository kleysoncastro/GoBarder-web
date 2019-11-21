import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';

import { updateProfileRequest } from '~/store/modules/user/actions';

import AvatarInput from './AvatarInput';

import { Container } from './styles';

export default function Profile() {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.user.profile);

  function handleSubmit(data) {
    dispatch(updateProfileRequest(data));
  }

  return (
    <Container>
      <Form initialData={profile} onSubmit={handleSubmit}>
        <AvatarInput />
        <Input name="name" placeholder="Seu nome completo" />
        <Input name="email" type="email" placeholder="Seu email" />

        <hr />

        <Input
          name="password"
          type="password"
          placeholder="Sua senha aterior"
        />
        <Input
          name="oldPassword"
          type="password"
          placeholder="Sua nova senha"
        />
        <Input
          name="confirmPassword"
          type="password"
          placeholder="Confirme senha"
        />
        <button type="submit">Atualizar Perfil</button>
      </Form>
      <button type="button">Sair do Gobarber</button>
    </Container>
  );
}
