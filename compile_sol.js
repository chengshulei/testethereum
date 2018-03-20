
fs = require('fs');
solSource = fs.readFileSync('ShiyanCoin.sol').toString();
solc = require('solc');
solCompiled = solc.compile(solSource);


var current_dir = process.cwd();

var dappJSONname = current_dir + '/dapp.json';
console.log(dappJSONname);
var exit_flag = true;

try{
  temp_read = fs.readFileSync(dappJSONname).toString();//check file exists
} catch (e) {
  exit_flag = false;
  console.log('dapp.json not exists.');
}
if(exit_flag)
{
  fs.unlinkSync(dappJSONname);
  console.log('dapp.json is deleted.');
}


var myData = {
  "contractABI":JSON.parse(solCompiled.contracts[':ShiyanCoin'].interface),
  "contractBYTE":solCompiled.contracts[':ShiyanCoin'].bytecode
}

fs.writeFileSync(dappJSONname, JSON.stringify(myData, null, 4));//write file

console.log("Write contractABI and contractBYTE to json");