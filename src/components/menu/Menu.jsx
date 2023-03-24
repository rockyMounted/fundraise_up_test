import React from 'react';
import { Calendar, Repeat, Wallet, Cancel } from "../../icons";
import './Menu.scss';

const Menu = () => {
  const menuItems = [
    {
      icon: <Repeat />,
      title: 'Change amount',
      onClick: () => {}
    },
    {
      icon: <Wallet />,
      title: 'Change payment method',
      onClick: () => {}
    },
    {
      icon: <Calendar />,
      title: 'Change date',
      onClick: () => {}
    },
    {
      icon: <Cancel />,
      title: 'Cancel recurring',
      onClick: () => {}
    }
  ];

  return (
    <div className='menu_wrapper'>
      <ul>
        {menuItems.map(({ icon, title, onClick }) => (
          <li>
            <button onClick={() => onClick()}>
              {icon}
              <span className="title">{title}</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Menu;