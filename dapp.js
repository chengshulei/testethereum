
function testdapp()
{

  fs = require('fs');
  json_file = fs.readFileSync('dapp.json');
  dapp_info = JSON.parse(json_file);
  //console.log("contractABI: " + dapp_info.contractABI);
  //console.log("contractAddress: " + dapp_info.contractAddress);

  Web3 = require('web3');
  web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
  coinContract = web3.eth.contract(dapp_info.contractABI);
  contractInstance = coinContract.at(dapp_info.contractAddress);


  a0 = web3.eth.accounts[0];
  a1 = web3.eth.accounts[1];
  a2 = web3.eth.accounts[2];
  a3 = web3.eth.accounts[3];
 
  old_a0 = Number(contractInstance.getBalanceOf.call(a0));
  old_a1 = Number(contractInstance.getBalanceOf.call(a1));
  old_a2 = Number(contractInstance.getBalanceOf.call(a2));
  old_a3 = Number(contractInstance.getBalanceOf.call(a3));

  console.log(old_a0, old_a1, old_a2,old_a3);

  contractInstance.transfer(a0, a1, 100, {from: a0});
  new_a0 = Number(contractInstance.getBalanceOf.call(a0));
  new_a1 = Number(contractInstance.getBalanceOf.call(a1));
  new_a2 = Number(contractInstance.getBalanceOf.call(a2));
  new_a3 = Number(contractInstance.getBalanceOf.call(a3));


  console.log(new_a0, new_a1, new_a2,new_a3);
}

var test_flag = true;
try 
{
  testdapp();
} 
catch(err) 
{
  test_flag = false;
  console.log(err);
  process.exit(1);
}

if(test_flag)
{
  console.log("Smart contract tests OK!");
}

