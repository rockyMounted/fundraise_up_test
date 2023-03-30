import React, { useState } from 'react';
import classNames from 'classnames';
import './Range.scss';

const Range = (props) => {
  const {
    name,
    label,
    className,
    id,
    max,
    min,
    withOutput,
    defaultValue,
    outputLabel,
    disabled
  } = props;
  const [value, setValue] = useState(defaultValue || 0);
  const [fillValue, setFillValue] = useState((value - min) / (max - min) * 100);
  const fillRangeColor = disabled ? '#DBDCDE' : '#2EB670';
  const rangeColor = disabled ? '#F3F3F3' : '#DBDCDE' ;

  const onChange = (val) => {
    props.onChange(val)
    setValue(val);
    setFillValue((val - min) / (max - min) * 100)
  }

  return (
    <>
      <div className={classNames("range_field", className)} >
        <label htmlFor={id}>{label}</label>
        <div>
          <input
            disabled={disabled}
            type="range"
            id={id}
            name={name}
            max={max}
            min={min}
            value={value}
            onChange={(event) => onChange(event.target.value)}
            style={{
              background: `linear-gradient(to right, ${fillRangeColor} 0%, ${fillRangeColor} ${fillValue}%, ${rangeColor} ${fillValue}%, ${rangeColor} 100%)`
            }}
          />
          {withOutput && <span>{value}{outputLabel ? outputLabel : ""}</span>}
        </div>
      </div>
    </>
  )
}

export default Range