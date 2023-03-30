import React from 'react';
import classNames from 'classnames';
import './Checkbox.scss';

const Checkbox = ({ name, label, className, id, disabled, checked, onChange }) => (
  <div className={classNames('checkbox_field', className)} >
    <input
      type='checkbox'
      id={id}
      name={name}
      disabled={disabled}
      checked={checked}
      onChange={onChange}
    />
    <label htmlFor={id}>{label}</label>
  </div>
)

export default Checkbox
