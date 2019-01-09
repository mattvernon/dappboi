import React, {Component} from 'react';
var Marquee = require('react-marquee');

class MarqueeTop extends Component {
  render() {
    return (
      <div className="marquee-top">
        <Marquee
          text="$BOI LAUNCHING 2019&nbsp;&nbsp;$BOI LAUNCHING 2019&nbsp;&nbsp;$BOI LAUNCHING 2019&nbsp;&nbsp;$BOI LAUNCHING 2019&nbsp;&nbsp;$BOI LAUNCHING 2019&nbsp;&nbsp;$BOI LAUNCHING 2019&nbsp;&nbsp;$BOI LAUNCHING 2019&nbsp;&nbsp;$BOI LAUNCHING 2019&nbsp;&nbsp;$BOI LAUNCHING 2019&nbsp;&nbsp;$BOI LAUNCHING 2019&nbsp;&nbsp;$BOI LAUNCHING 2019&nbsp;&nbsp;"
          loop={true}
          hoverToStop={true}
        />
      </div>
    );
  }
}

export default MarqueeTop;
