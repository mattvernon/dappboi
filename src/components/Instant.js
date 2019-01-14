import React from 'react';

class Instant extends React.Component {

    componentDidMount() {
        let renderJson;
        renderJson = {
            availableAssetDatas: ['0xf47261b00000000000000000000000004610f319109461efed59a5a76297455d77a1efc9'],
            defaultSelectedAssetData: '0xf47261b00000000000000000000000004610f319109461efed59a5a76297455d77a1efc9',
            additionalAssetMetaDataMap: {
                '0xf47261b00000000000000000000000004610f319109461efed59a5a76297455d77a1efc9': {
                    assetProxyId: '0xf47261b0', // ERC20 Proxy Id
                    decimals: 18,
                    symbol: 'BOI',
                    name: 'DAPP BOI',
                    primaryColor: 'blue', // Optional
                }
            },
            orderSource: "http://localhost:3001/v2/",
            networkId: 42
        };


        const script = document.createElement("script");
        script.src = "https://instant.0xproject.com/instant.js";
        document.head.appendChild(script);

        window.onload = function () {
            window.zeroExInstant.render(renderJson, 'body');
        };
    }

    render() {
        return (
            <></>
        );
    }
}

export default Instant;
