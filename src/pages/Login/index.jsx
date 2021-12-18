import React, {useState} from 'react';
import Styled from 'styled-components';
import UserMaker from '../../resources/users';

// import axios from 'axios';

const Container = Styled.div`
  width: 100vw;
  height: 100vh;
  padding: 10%;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: lightcyan;
`;

const Main = Styled.div`
  border-radius: 1.5rem;
  padding: 1.5rem 3rem;
  background-color: white;
  border: 0.2rem solid deepskyblue;
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
    border: 0.1rem solid deepskyblue;
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
    border: 0.1rem solid deepskyblue;
  }
  button:hover {
    border: 0.2rem solid black;
    background-color: lightcyan;
  }
  .registro {
    display: flex;
    margin-top: 1.5rem;
    a {
      text-decoration: none;
      color: orangered;
    }
    a:hover {
      text-decoration: underline;
    }
  }
  p {
    font-size: 1.2rem;
  }
`;


const Login = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });
  const userMaker = new UserMaker();
  const usersList = userMaker.getList()
  console.log("usersList: ", usersList)

  const handleChange = (e, property) => {
    const temporalForm = {...form};
    temporalForm[property] = e.target.value;
    setForm(temporalForm);
  }

  const validUser = () => new Promise((resolve, reject)=>{
    const search = usersList.some((user) => (user.user === form.email && user.password === form.password))
    if (search) return resolve(true)
    else reject(alert("Usuario o contraseña incorrectos"))
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    validUser()
    .then((validator) => {
      console.log('validator: ', validator)
      if (validator) {
        document.cookie = `email=${form.email}`;
        document.cookie = `name=${form.email}`;
        window.location.href = '/reservation';
      }
    })
    .catch((error) => console.log('Error catch handle login submit: ', error));
  }

  // remote API, no used for now
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log('submit ', form);
  //   const apiUrl = `http://localhost:4000/v1/api/auth/sign-in`;
  //   console.log('apiUrl: ', apiUrl);
  //   axios({
  //     url: apiUrl,
  //     method: 'post',
  //     auth: {
  //       password: form.password,
  //       username: form.email
  //     },
  //   })
  //   .then(({ data }) => {
  //     document.cookie = `email=${data.user.email}`;
  //     document.cookie = `name=${data.user.name}`;
  //     document.cookie = `id=${data.user.id}`;
  //     document.cookie = `token=${data.token}`;
  //   })
  //   .then(() => {
  //     window.location.href = '/';
  //   })
  //   .catch((error) => console.log('Error catch handle login submit: ', error));
  // }
  
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
              placeholder='email . . .'
            />
            <label for="password">Password </label>
            <input
              type="password"
              id="password"
              name="reservation-password"
              value={form.password}
              onChange={(e) => handleChange(e,'password')}
              placeholder='password . . .'
            />
          </div>
          <div className='submit'>
            <button type='submit'>Enviar</button>
          </div>
        </form>
        <div className='registro'>
          <p>Regístrate en el siguiente link: &nbsp;
            <a href="/register">Registro</a>
          </p> 
        </div>
      </Main>
    </Container>
  )
}

export default Login;
