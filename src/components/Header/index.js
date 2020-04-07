import React from 'react';

// conectando o nosso componente ao redux com o estado global
// import { /*  connect */ useSelector } from 'react-redux';
// aplicando React Hooks

// import { MdShoppingBasket } from 'react-icons/md';

import { Container, Links } from './styles';

// import logo from '../../assets/images/logo.svg';

export default function Header() {
  // const cartSize = useSelector(state => state.cart.length);

  return (
    <Container>
      <Links to="/">
        <strong>Home</strong>
      </Links>

      <Links to="/projects">
        <strong>Projetos</strong>
      </Links>
    </Container>
  );
}
