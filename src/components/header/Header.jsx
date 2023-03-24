import React from 'react';
import Input from '../input';
import Select from '../select'
import './Header.scss';

const Header = () => {
  return (
    <div className='header'>
      <h1 className='header_title'>Donations</h1>
      <nav className='header_navigation'>
        <Input type="search" />
        <Select className='select-header'/>
      </nav>
    </div>
  )
}

export default Header