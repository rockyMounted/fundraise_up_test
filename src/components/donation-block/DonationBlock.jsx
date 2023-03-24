import React from "react";
import classNames from "classnames";
import { Success, Dollar, Copy } from "../../icons";
import './DonationBlock.scss'

const DonationBlock = ({ className }) => {
  const onCopy = (value) => {
    console.log(value)
  }

  return (
    <div className={classNames("donation_block", className)}>
      <div className="donation-info">
        <div className="donation_sum">
          <div className="title">
              <Dollar />
              <span>Donation</span>
            </div>
          <div className="donation_sum-value">
            <span className="default">$20.60 USD</span>
            <span className="convert">≈ €17.92 EUR</span>
          </div>
        </div>
        <div className="info_block">
          <span className="title">ID</span>
          <div className="value" onClick={() => onCopy()}>
            <span>TYNY694Y</span>
            <Copy />
          </div>
        </div>
      </div>
      <div className="donation-status-info">
        <ul>
          <li>
            <span className="item-name">Status</span>
            <span className="item-info status">
              <Success />
              <span>Succeeded</span>
            </span>
          </li>
          <li>
            <span className="item-name">Supporter</span>
            <span className="item-info">Charlotte Ann</span>
          </li>
          <li>
            <span className="item-name">Campaign</span>
            <span className="item-info">Heart walk</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default DonationBlock;