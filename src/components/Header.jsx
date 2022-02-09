import React, { useState, useContext } from 'react';
import Menu from './Menu';
import AppContext from '../context/AppContext';
import MyOrder from '../containers/MyOrder';

import iconMenu from '@icons/icon_menu.svg';
import logo from '@logos/logo_yard_sale.svg';
import iconShopping from '@icons/icon_shopping_cart.svg';

import '../styles/Header.scss';

const Header = () =>{
  const [toggle, setToggle] = useState(false);
  const [toggleOrders, setToggleOrders] = useState(false);
  const { state } = useContext(AppContext);

  const handleToggle = () =>{
    setToggle(!toggle);
  }

  return (
    <nav>
      <img src={iconMenu} alt="menu" className="menu" />
      <div className="navbar-left">
        <img src={logo} alt="logo" className="logo" />
        <ul>
          <li>
            <a href="/">All</a>
          </li>
          <li>
            <a href="/">Clothes</a>
          </li>
          <li>
            <a href="/">Electronics</a>
          </li>
          <li>
            <a href="/">Furnitures</a>
          </li>
          <li>
            <a href="/">Toys</a>
          </li>
          <li>
            <a href="/">Others</a>
          </li>
        </ul>
      </div>
      <div className="navbar-right">
        <ul>
          <li className="navbar-email" onClick={handleToggle} >Luis27mojica@gmail.com</li>
          <li className="navbar-shopping-cart" onClick={() => setToggleOrders(!toggleOrders)} >
            <img src={iconShopping} alt="shopping cart" />
            {state.cart.length > 0 ? <div>{ state.cart.length }</div> : null}
          </li>
        </ul>
      </div>
      {toggle && <Menu />}
      {toggleOrders && <MyOrder />}
    </nav>
  );
};

export default Header;