import React from 'react';
import api from '../../services/api';

export default function Dashboad() {
  api.get('/appointment');
  return <h1>Dashboad</h1>;
}
