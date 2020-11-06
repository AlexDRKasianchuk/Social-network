import React from 'react';
import s from'./Header.module.css';

const Header = () =>{
    return(
        <header className={s.header}>
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Pornhub-logo.svg/1024px-Pornhub-logo.svg.png' alt='logo'/>
      </header>
    );
}
export default Header;