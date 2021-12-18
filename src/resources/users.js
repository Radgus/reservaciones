
class UserMaker {
  constructor() {
    this.usersList = [
      {
        id: 0,
        name: 'usa',
        lastname: 'tsuki',
        user: 'guest@mail.com',
        password: '123',
      },
    ]
  }
  createUser(form) {
    console.log('Dentro de createUser')
    console.log('usersList: ', this.usersList)
    this.usersList.push({
    name: form.name,
    lastname: form.lastName,
    user: form.email,
    password: form.password,
    })
    // window.location.href = 'reservaciones';
  }
  getList() {
    return this.usersList;
  }
}

export default UserMaker;
