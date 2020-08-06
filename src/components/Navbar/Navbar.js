
import React from 'react'
import s from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className={s.navBar}>
      <div className={s.item}>
        <NavLink to="/profile" activeClassName={s.activeLink}> Profile </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/dialogs" activeClassName={s.activeLink}> Messages </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to='/users' activeClassName={s.activeLink}> News</NavLink>
      </div>
      <div >  <a className={s.item} href='#'>Music</a></div>
      <div >  <a className={s.item} href='#'>Settings</a></div>
    </nav>
  );
}
export default Navbar
