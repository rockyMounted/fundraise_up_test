import React from 'react';
import classNames from 'classnames';
import './Button.scss';

const Button = ({ label, onClick, className, appearance, name, disabled, type='button' }) => (
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

export default Button;
