import React, {useState, useEffect} from 'react';
import Styled from 'styled-components';
import axios from 'axios';

const Container = Styled.div`
  width: 100vw;
  height: 100vh;
  padding: 20% 30%;
  box-sizing: border-box;
  font-weight: 500;
`;

const Main = Styled.div`
  border-radius: 15px;
  padding: 15px 30px;
  background-color: deepskyblue;
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
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  useEffect(() => {
    console.log('form: ', form);
  }, [form])

  const handleChange = (e, property) => {
    const temporalForm = {...form};
    temporalForm[property] = e.target.value;
    setForm(temporalForm);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submit ', form);
    const apiUrl = `http://localhost:4000/v1/api/auth/sign-in`;
    console.log('apiUrl: ', apiUrl);
    axios({
      url: apiUrl,
      method: 'post',
      auth: {
        password: form.password,
        username: form.email
      },
    })
    .then(({ data }) => {
      document.cookie = `email=${data.user.email}`;
      document.cookie = `name=${data.user.name}`;
      document.cookie = `id=${data.user.id}`;
      document.cookie = `token=${data.token}`;
    })
    .then(() => {
      window.location.href = '/';
    })
    .catch((error) => console.log('Error catch handle login submit: ', error));
  }
  
  return (
    <Container>
      <Main>
        <form onSubmit={handleSubmit}>
          <div className='inputs'>
            <label for="email">Usuario </label>
            <input
              type="text"
              id="email"
              name="reservation-user"
              value={form.email}
              onChange={(e) => handleChange(e,'email')}
              placeholder='Escribe tu email . . .'
            />
            <label for="password">Password </label>
            <input
              type="password"
              id="password"
              name="reservation-password"
              value={form.password}
              onChange={(e) => handleChange(e,'password')}
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
