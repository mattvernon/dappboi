import React, {Component} from 'react';

import {BrowserRouter, Link, Route, Switch} from 'react-router-dom';

import Home from '../pages/home.js';
import Terms from '../pages/terms.js';
import Redeem from '../pages/redeem.js';
import Error from '../pages/error.js';

import MarqueeTop from './MarqueeTop';
import MarqueeBottom from './MarqueeBottom';
import Instant from './Instant';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MarqueeTop />

        <BrowserRouter>
          <div>
            <div className="nav">
              <Link to="/">Home</Link>

              {/* ETHAN! PLS MAKE THIS LINK TRIGGER THE 0xInstant MODAL! */}
              <Link to="/buy">Buy</Link>
              
              <Link to="/terms">Terms</Link>
              <Link to="/redeem">Redeem</Link>
            </div>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/buy" component={Buy} />
              <Route path="/terms" component={Terms} />
              <Route path="/redeem" component={Redeem} />
              <Route component={Error} />
            </Switch>
          </div>
        </BrowserRouter>

        <MarqueeBottom />
      </div>
    );
  }
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
