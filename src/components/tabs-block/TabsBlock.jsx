import React, { useState } from "react";
import classNames from "classnames";
import Input from '../input';
import Select from '../select';
import Button from '../button';
import RadioButton from "../radio-button";
import Checkbox from "../checkbox";
import Range from "../range";
import './TabsBlock.scss';

const TABS = {
  BEHAVIOR: 'BEHAVIOR',
  APPEARANCE: 'APPEARANCE',
  CUSTOM_FIELDS: 'CUSTOM_FIELDS',
  QUESTIONS: 'QUESTIONS',
  URL_CONTROL: 'URL_CONTROL'
}

const TabsBlock = () => {
  const [activeTab, setActiveTab] = useState(TABS.BEHAVIOR)

  const tabList = [
    {
      id: TABS.BEHAVIOR,
      title: 'Behavior'
    },
    {
      id: TABS.APPEARANCE,
      title: 'Appearance'
    },
    {
      id: TABS.CUSTOM_FIELDS,
      title: 'Custom Fields'
    },
    {
      id: TABS.QUESTIONS,
      title: 'Questions'
    },
    {
      id: TABS.URL_CONTROL,
      title: 'URL Control'
    }
  ]

  const designationFieldOptions = [
    {
      value: 1,
      title: 'Match Checkout Setting'
    },
    {
      value: 2,
      title: 'Some option name'
    },
    {
      value: 3,
      title: 'Third option'
    }
  ]

  const currencyFieldOptions = [
    {
      value: 1,
      title: 'USD'
    },
    {
      value: 2,
      title: 'EUR'
    },
    {
      value: 3,
      title: 'RUB'
    }
  ]

  const behaviorForm = () => (
    <form className="form-behavior">
      <Select
        appearance="primary"
        label="Designation"
        options={designationFieldOptions}
        className="select-item"
      />
      <fieldset className="goal-fields">
        <Input label="Goal" className="goal-input" />
        <Select appearance="primary" options={currencyFieldOptions} className="currency-select" />
      </fieldset>
      <fieldset className="radio-group">
        <span>Default Amount</span>
        <div>
          <RadioButton label="Match Checkout Setting" id="match" />
          <RadioButton label="Customize" id="customize"/>
        </div>
      </fieldset>
      <Checkbox
        label="Allow donor to change default currency"
        id='currencyAllow'
        className='checkbox-item'
      />
      <fieldset className="range-group">
        <Range
          label="Border size"
          id="size"
          max="5"
          min="0"
          outputLabel="px"
          withOutput
          className="range-item"
          defaultValue="3"
        />
        <Range
          label="Border radius"
          id="radius"
          max="30"
          min="0"
          outputLabel="px"
          withOutput
          className="range-item"
        />
      </fieldset>
    </form>
  )

  return (
    <div className="tabs-block">
      <nav>
        <ul>
          {tabList.map(({id, title}) => (
            <li key={id}>
              <button
                className={classNames({ 'active': id === activeTab })}
                onClick={() => setActiveTab(id)}
              >
                {title}
              </button>
            </li>
          ))}
        </ul>
      </nav>
      <div className="content">
        {behaviorForm()}
      </div>
      <div className="buttons">
        <Button label='Save changes' appearance='primary' type='submit' />
        <Button label='Cancel' appearance='secondary' />
      </div>
    </div>
  )
}

export default TabsBlock;
