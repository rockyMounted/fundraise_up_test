import React from 'react';
import classNames from 'classnames';
import './RadioButton.scss';

const RadioButton = ({ name, label, className, id, disabled, checked, onChange }) => {
  return (
    <>
      <div className={classNames('radio_field', className)} >
        <input
          type='radio'
          id={id} name={name}
          disabled={disabled}
          checked={checked}
          onChange={onChange}
        />
        <label htmlFor={id}>{label}</label>
      </div>
    </>
  )
}

export default RadioButton
