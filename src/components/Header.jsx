import React, {useContext} from 'react';
import {AiOutlineExport, AiOutlineGithub} from 'react-icons/ai';
import style from '../styles/header.less';
import {ThemeContext} from 'styled-components';

export default function Header() {
  const theme = useContext(ThemeContext);
  return (
    <div className={style.header}>
      <div>
        <a><AiOutlineGithub size="2em" color="white"/></a>
        <a>Новости</a>
        <a>Войти <AiOutlineExport/></a>
      </div>
    </div>
  );
}

const Button = ({children, className}) => styled(
    <button className={className}>
      {children}
    </button>,
)`
    border: ${(theme) => theme.sizes}
`;
