import React from 'react';
import classNames from 'classnames';
import { ArrowIcon } from './ArrowIcon';
import './Select.scss';

const Select = ({ options, className }) => {
  return (
    <div className={classNames('select_field', className)}>
      <select>
        <option value="all">All statuses</option>
        <option value="1">First status</option>
        <option value="1">Second status</option>
      </select>
      <span className='icon'><ArrowIcon /></span>
    </div>
  )
}

export default Select