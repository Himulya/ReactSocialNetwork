import { useState } from 'react';
import Style from'./componentsStyle/Navigation.module.css';

const Nav = ()=>{
    return(
        <nav className={Style.nav}>
          <div className={Style.menu}>
              <a href='#' className={Style.item}>Profile</a>
              <a href='#' className={Style.item}>Messages</a>
              <a href='#' className={Style.item}>News</a>
              <a href='#' className={Style.item}>Music</a>
          </div>
          <div>
            <a href='#' className={Style.item}>Settings</a>
          </div>
              
        </nav>
    )
}

export default Nav