const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const {interface, bytecode} = require('./compile');

const provider = new HDWalletProvider(
  'cloud pudding weird card nuclear quick crystal rebuild defense rack abstract potato',
  'https://rinkeby.infura.io/C9jrS52HnpSQcRBLANJd');

const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();
  const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({data: bytecode})
    .send({from: accounts[0], gas: '1000000'});

    console.log(result.options.address)
};
deploy();
