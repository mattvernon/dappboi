import React, {Component} from 'react';

import qr from '../images/qr.png';

const Redeem = () => {
  return (
    <div className="page">
      <h1>Redeem BOI</h1>
      <p className="step-one">
        <span>1.</span> Send your BOI back to this exact address:
      </p>
      <div className="address-field">0xB18A83EEa77Db549333eAA9E964d8887517B7C59</div>
      <p className="small-text">
        Please note, 1.0 BOI is redeemable for 1.0 hour of design work. Multiple BOI are redeemable
        for more than one hour of work, but I cannot accept fragments. Please ensure you only send
        whole BOI.{' '}
      </p>
      <p className="warning-text">
        Please for the love of god, do not send Bitcoin, or any other type of digital currency to
        this address. ONLY BOI!
      </p>
      <p className="step-two">
        <span>2.</span> Email me at hello@matthewvernon.co to organise the project.
      </p>
    </div>
  );
};

export default Redeem;
