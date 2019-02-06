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
  state = {
    buying: false
  };

  toggleBuying = () => {
    let {buying} = this.state;
    buying = !buying;
    this.setState({buying});
  };

  componentDidUpdate() {
    if (this.state.buying) {
      this.setState({buying: false});
    }
  }

  componentDidMount() {
    const script = document.createElement('script');
    script.src = 'https://instant.0xproject.com/instant.js';

    script.onload = () => this.setState({done: true});

    document.head.appendChild(script);
  }

  render() {
    return (
      <div className="App">
        <MarqueeTop />

        <BrowserRouter>
          <div>
            <div className="nav">
              <Link to="/">Home</Link>

              {/* ETHAN! PLS MAKE THIS LINK TRIGGER THE 0xInstant MODAL! */}
              <a className="pseudo-link" onClick={this.toggleBuying}>
                Buy
              </a>

              <Link to="/terms">Terms</Link>
              <Link to="/redeem">Redeem</Link>
            </div>
            <Switch>
              <Route
                exact
                path="/"
                render={props => (
                  <Home {...props} toggleBuying={this.toggleBuying} buying={this.state.buying} />
                )}
              />
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
