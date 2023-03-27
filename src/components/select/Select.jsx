import React from 'react';
import classNames from 'classnames';
import { ArrowIcon } from './ArrowIcon';
import './Select.scss';

const Select = ({ options, className, appearance, label, name, disabled }) => {
  return (
    <div className={classNames('select_field', appearance, className)}>
      {label && <label htmlFor={name}>{label}</label>}
      <div className='select'>
        <select id={name} disabled={disabled}>
          {options.map(({value, title}) => (
            <option key={value} value={value}>{title}</option>
          ))}
        </select>
        <ArrowIcon />
      </div>
    </div>
  )
}

export default Select