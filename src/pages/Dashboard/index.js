import React from 'react';
import { MdChevronRight, MdChevronLeft } from 'react-icons/md';

import api from '../../services/api';

import { Container, Time } from './styles';

export default function Dashboad() {
  return (
    <Container>
      <header>
        <button type="button">
          <MdChevronLeft size={36} color="#fff" />
        </button>
        <strong>31 de dezembro</strong>
        <button type="button">
          <MdChevronRight size={36} color="#fff" />
        </button>
      </header>

      <ul>
        <Time past>
          <strong>08:00</strong>
          <span>Kleyson castro</span>
        </Time>
        <Time avalable>
          <strong>09:00</strong>
          <span>Em aberto</span>
        </Time>
        <Time>
          <strong>10:00</strong>
          <span>Kleyson castro</span>
        </Time>
        <Time>
          <strong>11:00</strong>
          <span>Kleyson castro</span>
        </Time>
      </ul>
    </Container>
  );
}
