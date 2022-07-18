// https://eth-goerli.g.alchemy.com/v2/NIIXcQ4peqyTND2zc485vEDNo_Ucppft

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/NIIXcQ4peqyTND2zc485vEDNo_Ucppft',
      accounts: ['04b254d9b68f08796ebea684f91b225daa1a2a1ca7462dd828c751bd82dea0df']
    }
  }
}