import React from 'react';

import { useField } from '@rocketseat/unform';

import { Container } from './sytles';

export default function avatarInput() {
  function handleChange(e) {}
  return (
    <Container>
      <label htmlFor="avatar">
        <img src="" alt="" />
        <input
          type="file"
          id="avatar"
          accept="image/*"
          onChange={handleChange}
        />
      </label>
    </Container>
  );
}
