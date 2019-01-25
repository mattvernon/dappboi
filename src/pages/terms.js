import React, {Component} from 'react';

const Terms = () => {
  return (
    <div className="page">
      <h1>Terms of Use</h1>
      <h2>The redemption process for BOI tokens are bound by the following terms.</h2>
      <ol>
        <li><span>1.</span>BOI tokens can only be redeemed for digital design and/or development projects. I will not mow your lawn for you.</li>
        <li><span>2.</span>BOI tokens can be redeemed for in person meetings, but travel time will need to be accounted for and included in the amount of BOI that is redeemed.</li>
        <li><span>3.</span>BOI tokens cannot be redeemed for projects that are illegal in nature, or any project which I personally deem unethical. This includes, but is not limited to, any project using deceptive business practices, or a project that is working in the fields of:</li>
        <ul className="nopes">
            <li>Pyramid/Ponzi Schemes</li>
            <li>Gambling</li>
            <li>Illegal Drugs/Substances</li>
            <li>Fossil Fuel Mining</li>
          </ul>
        <li><span>4.</span>I will always retain the right to refuse service to anyone. If service is refused, any redeemed tokens will be returned back to the wallet from where they were originally sent.</li>
        <li><span>5.</span>Redeeming BOI tokens will not automatically guarantee my availability. Any project redeemed via BOI will have to be scheduled alongside my existing availability. I will endeavour to do my best to find time to work with you as soon as possible, but in some cases it could take weeks for available time to open up.</li>
        <li><span>6.</span>The tokens will expire at 11.59pm 31 December 2024. Once expired, the tokens will continue to exist on the Ethereum Blockchain – meaning they can be sent, traded and exchanged – but they can no longer be redeemed.</li>
      </ol>
      <h2>In short, if you’re not doing anything dodgy – you’re fine.</h2>
    </div>
  );
};

export default Terms;
