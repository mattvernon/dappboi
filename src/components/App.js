import React, {Component} from 'react';

import {BrowserRouter as Router, Route,} from 'react-router-dom';

import boi from '../images/boi.jpg';
import badge from '../images/badge.svg';
import diagram from '../images/diagram.svg';
import logos from '../images/logos.svg';

import MarqueeTop from './MarqueeTop';
import MarqueeBottom from './MarqueeBottom';
import Instant from "./Instant";

class App extends Component {
  render() {
    return (
      <div className="App">
        <MarqueeTop />

        <Router>
          <div class="page">
            <Route exact path="/" component={Home} />
            <Route path="/buy" component={Buy} />
          </div>
        </Router>

        <MarqueeBottom />
      </div>
    );
  }
}

function Home() {
  return (
    <div>
      <div className="hero">
        <h2>
          SAY H<span>E</span>LLO TO
        </h2>
        <h1>
          d<span>A</span>P<span>P</span>_B<span>O</span>I
        </h1>
        <h6>
          an Ethereum token
          <br /> backed by a <span>human</span> individual
        </h6>
        <img src={boi} className="photo" />
        <img src={badge} className="badge" />
      </div>

      <section className="token">
        <div className="diagram">
          <div className="boi">
            <p>BOI</p>
          </div>
          <p className="equals">=</p>
          <div className="hour">
            <p>1 hour of design work</p>
          </div>
        </div>
      </section>

      <section className="intro">
        <div className="wrapper">
          <div className="col">
            <p>
              Hi, I’m Matthew Vernon – a digital product designer. For the past year or so I’ve been
              primarily working with various teams in the crypto and blockchain space, leading their
              design and user experience efforts.
            </p>
            <p>
              I have recently fallen in love with the idea of <i>personal tokens</i> –
              cryptocurrency based tokens that derive their value from the performance of a human
              being.
            </p>
          </div>
          <div className="col">
            <p>
              In an attempt to explore this new technology, I am selling a tokenized version of
              myself – <i>BOI.</i>
            </p>
            <p>
              It is an Ethereum based, ERC-20 compliant token that has 1 function. Each token can be
              redeemed for 1 hour of me contributing design work or consultation to your crypto
              project.
            </p>
            <p>It’s a simple premise but has the room to get very, very weird.</p>
          </div>
        </div>
      </section>

      <section className="redeem">
        <h3>Things you can redeem $boi for</h3>
        {/* <div className="ball ball-big">Brand Design and Creative Direction</div>
            <div className="ball ball-med">Interactive Prototypes</div>
            <div className="ball ball-med">Product Reviews &amp; Consulting</div>
            <div className="ball ball-med">Strategy Workshops</div> */}
        <div class="wrapper">
          <img src={diagram} className="balls" />
        </div>
      </section>

      <section className="projects">
        <h3>Crypto projects I've worked on</h3>
        <div class="wrapper">
          <img src={logos} />
        </div>
      </section>

      <section className="call-to-action">
        <div class="wrapper">
          <h3>Launching</h3>
          <h2>
            2<span>0</span>1<span>9</span>
          </h2>
          <a href="https://airtable.com/shr06lpL9Y0YKtQiY" target="_blank" className="oval-button">
            Join the Whitelist
          </a>
          <h4>
            <a href="https://twitter.com/dApp_boi" target="_blank">
              FO<span>LL</span>OW <span>@</span>DAPP_<span>B</span>OI
            </a>
          </h4>
        </div>
      </section>
    </div>
  );
}

function Buy() {
  return (
    <div class="buy-page">
      <h2>Buy BOI</h2>
      <Instant />
    </div>
  );
}

export default App;
