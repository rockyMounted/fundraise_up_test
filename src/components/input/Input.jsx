import React from 'react';
import classNames from 'classnames';
import { SearchIcon } from './SearchIcon';
import './Input.scss';

const Input = ({ type = 'text', name, placeholder, label, className, disabled }) => {
  return (
    <div className={classNames('input_field', className)}>
      {label && <label htmlFor={name}>{label}</label>}
      <div className="input">
        {type === 'search' && <SearchIcon />}
        <input type={type} id={name} placeholder={placeholder} disabled={disabled} />
      </div>
    </div>
  )
}

export default Input