import classNames from 'classnames';
import React from 'react';
import './Button.scss';

const Button = ({ label, onClick, className, appearance, name, disabled, type='button' }) => {

  return (
    <button
      type={type}
      name={name}
      className={classNames('button', className, appearance)}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  )
}

export default Button;
