import React from 'react';

import { FaHome, FaSignInAlt, FaUserAlt } from 'react-icons/fa';

import { Nav } from './styled';

export default function Header() {
  return (
    <Nav>
      <a href="/">
        <FaHome size={20} />
      </a>
      <a href="/">
        <FaUserAlt size={20} />
      </a>
      <a href="/">
        <FaSignInAlt size={20} />
      </a>
    </Nav>
  );
}
