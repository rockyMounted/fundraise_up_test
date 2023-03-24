import React, { useState } from "react";
import classNames from "classnames";
import Button from '../button';
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

  return (
    <div className="tabs-block">
      <nav>
        <ul>
          {tabList.map(({id, title}) => (
            <li key={id} className={classNames({ 'active': id === activeTab })}>
              <button
                onClick={() => setActiveTab(id)}
              >
                {title}
              </button>
            </li>
          ))}
        </ul>
      </nav>
      <div className="content">
        hello
      </div>
      <div className="buttons">
        <Button label='Save changes' appearance='primary' />
        <Button label='Cancel' appearance='secondary'/>
      </div>
    </div>
  )
}

export default TabsBlock;
