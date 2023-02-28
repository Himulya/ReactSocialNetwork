import { useState } from 'react';
import style from './componentsStyle/Header.module.css';

const Header = () => {
    return(
        <header className={style.header}>
          <h1 className={style.logo}>LOGO</h1>
        </header>

    )
}

export default Header