import React from 'react';
import classNames from 'classnames';
import { Calendar, Repeat, Wallet, Cancel } from '../../icons';
import './Menu.scss';

const Menu = ({ className }) => {
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
    <div className={classNames('menu_wrapper', className)}>
      <ul>
        {menuItems.map(({ icon, title, onClick }) => (
          <li key={title}>
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