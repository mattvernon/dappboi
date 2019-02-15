import React from 'react';

var BigNumber = require('bignumber.js');

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
      orderSource: [
        {
          senderAddress: '0x0000000000000000000000000000000000000000',
          makerAddress: '0xb18a83eea77db549333eaa9e964d8887517b7c59',
          takerAddress: '0x0000000000000000000000000000000000000000',
          makerFee: new BigNumber('0'),
          takerFee: new BigNumber('0'),
          makerAssetAmount: new BigNumber('20000000000000000000'),
          takerAssetAmount: new BigNumber('13000000000000000000'),
          makerAssetData:
            '0xf47261b0000000000000000000000000439ce375e3ee4dc203d71958beca3c0f417d65cb',
          takerAssetData:
            '0xf47261b0000000000000000000000000c02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
          expirationTimeSeconds: new BigNumber('1551209820'),
          feeRecipientAddress: '0x0000000000000000000000000000000000000000',
          salt: '75133064172400108999414834901383488139185620257556898178132978563020169124698',
          signature:
            '0x1b12c730418af154ece4887d125a6932d94ed04e9401a6c5651a247ea0705017cd358c27bad45d3d9d182b3eb462b6d78781674b0c50479ef32737b2d84d48006003',
          exchangeAddress: '0x4f833a24e1f95d70f028921e27040ca56e09ab0b'
        }
      ],
      networkId: 1
    };

    window && window.zeroExInstant && window.zeroExInstant.render(renderJson, 'body');
  }

  render() {
    return <></>;
  }
}

export default Instant;
