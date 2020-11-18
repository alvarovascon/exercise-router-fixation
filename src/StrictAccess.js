import React from 'react';
import { Redirect } from 'react-router-dom';

const StrictAccess = ({ user }) => {
  if (!(user.username === 'joao' && user.password === '1234')) {
    alert('acesso negado')
    return <Redirect to="/" />
  }
  return (
    <p>Welcome joao!</p>
  );
};

export default StrictAccess;