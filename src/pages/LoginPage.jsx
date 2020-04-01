import React from 'react';
import * as Router from 'react-router-dom';
import style from '../styles/loginpage.less';

const {useHistory} = Router;

export default function LoginPage() {
  let usernameTextfield; let passwordTextfield;
  const history = useHistory();

  const enterBtnHandler = () => {
    if (usernameTextfield.value === 'admin' && passwordTextfield.value === '12345') {
      history.push('/profile');
    } else {
      alert('Неверная связка логин пароль!');
    }
  };

  return (
    <div className={style.whole_form}>
      <div>
        <label htmlFor="username">Логин</label>
        <input type="text" defaultValue="" id="username" ref={(userInput) => usernameTextfield = userInput}/>
        <label htmlFor="password">Пароль</label>
        <input type="password" defaultValue="" id="password" ref={(passwordInput) => passwordTextfield = passwordInput}/>
        <button onClick={() => enterBtnHandler()}>Войти</button>
      </div>
    </div>
  );
}
