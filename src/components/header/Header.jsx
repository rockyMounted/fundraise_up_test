import React from 'react';
import Input from '../input';
import Select from '../select'
import './Header.scss';

const Header = () => {
  const selectHeaderOptions = [
    {
      value: 0,
      title: 'All statuses'
    },
    {
      value: 1,
      title: 'First type'
    },
    {
      value: 2,
      title: 'Second type'
    }
  ]

  return (
    <div className='header'>
      <h1 className='header_title'>Donations</h1>
      <nav className='header_navigation'>
        <Input type="search" placeholder='Search' className="header-input"/>
        <Select
          className='select-header'
          options={selectHeaderOptions}
          appearance="secondary"
        />
      </nav>
    </div>
  )
}

export default Header;
