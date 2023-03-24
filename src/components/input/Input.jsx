import React from 'react';
import { SearchIcon } from './SearchIcon';
import './Input.scss';

const Input = ({type = 'search', name = 'input', placeholder = 'Search'}) => {
  return (
    <div className='input_field'>
      {type === 'search' && <span className='icon'><SearchIcon /></span>}
      <input type={type} id={name} placeholder={placeholder} />
    </div>
  )
}

export default Input