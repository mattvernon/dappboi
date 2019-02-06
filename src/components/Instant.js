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
          makerAssetAmount: new BigNumber('25000000000000000000'),
          takerAssetAmount: new BigNumber('16250000000000000000'),
          makerAssetData:
            '0xf47261b0000000000000000000000000439ce375e3ee4dc203d71958beca3c0f417d65cb',
          takerAssetData:
            '0xf47261b0000000000000000000000000c02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
          expirationTimeSeconds: new BigNumber('1549795920'),
          feeRecipientAddress: '0x0000000000000000000000000000000000000000',
          salt: '93115335222072847214375889428160398014420090087211579678016219042290848222197',
          signature:
            '0x1c6ca33d0d54f5696951a698d87de5e925dc0c3241e414bc0ac5e6103adab512341a4adbac779cf56cd35bbd071d42ae50ad7f4e3eebe5c9b72b59994a2def571303',
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
