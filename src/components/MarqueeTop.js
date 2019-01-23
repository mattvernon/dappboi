import React, {Component} from 'react';
var Marquee = require('react-marquee');

class MarqueeTop extends Component {
  render() {
    return (
      <div className="marquee-top">
        <Marquee
          text="$BOI AVAILABLE NOW!&nbsp;&nbsp;$BOI AVAILABLE NOW!&nbsp;&nbsp;$BOI AVAILABLE NOW!&nbsp;&nbsp;$BOI AVAILABLE NOW!&nbsp;&nbsp;$BOI AVAILABLE NOW!&nbsp;&nbsp;$BOI AVAILABLE NOW!&nbsp;&nbsp;$BOI AVAILABLE NOW!&nbsp;&nbsp;$BOI AVAILABLE NOW!&nbsp;&nbsp;$BOI AVAILABLE NOW!&nbsp;&nbsp;$BOI AVAILABLE NOW!&nbsp;&nbsp;$BOI AVAILABLE NOW!&nbsp;&nbsp;$BOI AVAILABLE NOW!&nbsp;&nbsp;$BOI AVAILABLE NOW!&nbsp;&nbsp;$BOI AVAILABLE NOW!&nbsp;&nbsp;$BOI AVAILABLE NOW!&nbsp;&nbsp;$BOI AVAILABLE NOW!&nbsp;&nbsp;$BOI AVAILABLE NOW!&nbsp;&nbsp;$BOI AVAILABLE NOW!&nbsp;&nbsp;$BOI AVAILABLE NOW!&nbsp;&nbsp;$BOI AVAILABLE NOW!&nbsp;&nbsp;$BOI AVAILABLE NOW!&nbsp;&nbsp;"
          loop={true}
          hoverToStop={true}
        />
      </div>
    );
  }
}

export default MarqueeTop;
