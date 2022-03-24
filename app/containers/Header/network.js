
const Network = {
  Offline: { rpc: 'offline', tx_explorer: null },
  'Local RPC': { rpc: 'http://127.0.0.1:7545', tx_explorer: null },
  'Rinkeby Testnet': { rpc: 'https://rinkeby.infura.io/v3/a7298455fbfd4f6884ab7f8ad5f161b8', tx_explorer: 'https://rinkeby.etherscan.io/tx/' },
  'Main Net (ETH)': { rpc: 'https://mainnet.infura.io/v3/a7298455fbfd4f6884ab7f8ad5f161b8', tx_explorer: 'https://etherscan.io/tx/' },
};

module.exports = Network;
