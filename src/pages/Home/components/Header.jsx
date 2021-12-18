import React from 'react';
import Styled from 'styled-components';

const Container = Styled.div`
  width: 100%;
  height: 7.0rem;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid black;
  padding: 0 1rem;

`;

const Identity = Styled.div`
  display: flex;
  flex-direction: column;
  .logout {
    margin-bottom: 0.7rem;
  }
  .logout:hover {
    color: blue;
    cursor: pointer;
  }
  h3 {
    text-align: right;
  }
`;

const logout = () => {
  document.cookie = "name=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  document.cookie = "email=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  window.location.href = '/reservation/login';
}

const Header = () => {
  const name = document.cookie.split(';')[0].split('=')[1]

  return(
    <Container>
      <div>Logo</div>
      <Identity>
        <h3 className='logout' onClick={logout}>Logout</h3>
        <h3>{name}</h3>
      </Identity>
    </Container>
  )
}

export default Header;
