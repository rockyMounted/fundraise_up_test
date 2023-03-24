import classNames from 'classnames';
import React from 'react';
import './Button.scss';

const Button = ({ label, onClick, className, appearance }) => {

  return (
    <button
      type='button'
      className={classNames('button', className, appearance)}
      onClick={onClick}
    >
      {label}
    </button>
  )
}

export default Button;