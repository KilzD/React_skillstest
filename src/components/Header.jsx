import React from 'react';
import {AiOutlineExport, AiOutlineGithub} from 'react-icons/ai';
import style from '../styles/header.less';

export default function Header() {
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
