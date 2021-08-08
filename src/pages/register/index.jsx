import React, {useState,useEffect} from 'react';
import Styled from 'styled-components';
import UserMaker from '../../resources/users';
// import axios from 'axios';

const Container = Styled.div`
  width: 100vw;
  height: 100vh;
  padding: 10%;
  box-sizing: border-box;
  font-weight: 500;
  display: flex;
  align-items: center;
`;

const Main = Styled.div`
  border-radius: 1.5rem;
  padding: 1.5rem 3rem;
  background-color: deepskyblue;
  .inputs {
    display: flex;
    flex-direction: column;
    margin: 1.5rem 0 0 0;
    label {
      font-size: 1.2rem
    }
  }
  input {
    border-radius: 0.8rem;
    border: none;
    width: 100%;
    padding-left: 1.5rem;
    box-sizing: border-box;
    margin: 1rem 0 2.5rem 0;
    height: 3rem;
    outline: none;
    font-size: 1.2rem
  }
  .submit {
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 1rem 0 0 0;
  }
  button {
    background-color: white;
    border-radius: 0.8rem;
    border: 0.2rem solid white;
    width: 50%;
    height: 3.5rem;
  }
  button:hover {
    border: 0.2rem solid black;
    background-color: lightcyan;
  }
  .registro {
    display: flex;
    margin-top: 1.5rem;
  }
  p {
    font-size: 1.2rem;
  }
`;


const Register = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });
  const userMaker = new UserMaker();
  console.log("getList: ", userMaker.getList())

  useEffect(() => {
    console.log('form: ', form)
  }, [form])

  const handleChange = (e, property) => {
    const temporalForm = {...form};
    temporalForm[property] = e.target.value;
    setForm(temporalForm);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    userMaker.createUser(form)
  }

  return (
    <Container>
      <Main>
        <form onSubmit={handleSubmit}>
          <div className='inputs'>
            <label for="name">Name</label>
            <input
              type="text"
              id="name"
              name="reservation-name"
              value={form.name}
              onChange={(e) => handleChange(e,'name')}
              placeholder='Write your name . . .'
            />
            <label for="lastName">Last name </label>
            <input
              type="text"
              id="lastName"
              name="reservation-lastName"
              value={form.lastName}
              onChange={(e) => handleChange(e,'lastName')}
            />
            <label for="email">Email</label>
            <input
              type="text"
              id="email"
              name="reservation-email"
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
          <p>Do you already have an account?: &nbsp;
            <a href="/login">Login</a>
          </p> 
        </div>
      </Main>
    </Container>
  )
}

export default Register;

