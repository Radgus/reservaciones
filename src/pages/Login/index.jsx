import React from 'react';
import Styled from 'styled-components';

const Container = Styled.div`
  width: 100vw;
  height: 100vh;
  padding: 20% 30%;
  box-sizing: border-box;
  background-color: pink;
`;

const Main = Styled.div`
  border: 2px solid white;
  border-radius: 15px;
  padding: 15px 30px;
  .inputs {
    display: flex;
    flex-direction: column;
    margin: 15px 0 0 0;
  }
  input {
    border-radius: 8px;
    border: none;
    width: 100%;
    padding-left: 15px;
    box-sizing: border-box;
    margin: 10px 0 25px 0;
    height: 30px;
    outline: none;
  }
  .submit {
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 10px 0 0 0;
  }
  button {
    background-color: white;
    border-radius: 8px;
    border: 2px solid white;
    width: 50%;
    height: 35px;
  }
  button:hover {
    border: 2px solid black;
    background-color: lightcyan;
  }
  .registro {
    display: flex;
    margin-top: 15px;
  }
  p {
    font-size: 0.75rem;
  }
`;


const Login = () => {

  const handleSubmit = (e) => {
    console.log('enviar form');
    e.preventDefault();
  }
  
  return (
    <Container>
      <Main>
        <form onSubmit={handleSubmit}>
          <div className='inputs'>
            <label for="user">Usuario </label>
            <input
              type="text"
              id="user"
              name="reservation-user"
              // value={valueDate}
              // onChange={handleDate}
              />
            <label for="password">Password </label>
            <input
              type="password"
              id="password"
              name="reservation-password"
              // value={valueDate}
              // onChange={handleDate}
              />
          </div>
          <div className='submit'>
            <button type='submit'>Enviar</button>
          </div>
        </form>
        <div className='registro'>
          <p>Regístrate en el siguiente link: &nbsp;
            <a href="#">Registro</a>
          </p> 
        </div>
      </Main>
    </Container>
  )
}

export default Login;
