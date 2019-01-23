import React from 'react';

class Instant extends React.Component {

  componentDidMount() {

    let renderJson;
    renderJson = {
      availableAssetDatas: [
        '0xf47261b0000000000000000000000000439ce375e3ee4dc203d71958beca3c0f417d65cb'
      ],
      defaultSelectedAssetData:
        '0xf47261b0000000000000000000000000439ce375e3ee4dc203d71958beca3c0f417d65cb',
      additionalAssetMetaDataMap: {
        '0xf47261b0000000000000000000000000439ce375e3ee4dc203d71958beca3c0f417d65cb': {
          assetProxyId: '0xf47261b0', // ERC20 Proxy Id
          decimals: 18,
          symbol: 'BOI',
          name: 'DAPP BOI',
          primaryColor: 'blue' // Optional
        }
      },
      orderSource: 'http://localhost:8080/v2/',
      networkId: 1
    };


    window && window.zeroExInstant && window.zeroExInstant.render(renderJson, 'body');

  }

  render() {
    return <></>;
  }
}

export default Instant;
