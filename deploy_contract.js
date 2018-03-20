
Web3 = require('web3');
web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
web3.personal.newAccount('abc');//create a new account,used to store transfer fee

fs = require('fs');
json_file = fs.readFileSync('dapp.json');
dapp_info = JSON.parse(json_file);

abiInfo = dapp_info.contractABI;
byteCode = dapp_info.contractBYTE;
//coinContract = web3.eth.contract(abiInfo);
//deployed = coinContract.new(300000000,1,web3.eth.accounts[3],{data:byteCode,from:web3.eth.accounts[0],gas:3000000});//here please unsync function,otherwise it can't get the deploy address

//let gasEstimate = web3.eth.estimateGas({data: '0x' + bytecode});
//console.log('gasEstimate: ' + gasEstimate)


let MyContract = web3.eth.contract(abiInfo);
console.log('deploying contract...');


let myContractReturned = MyContract.new(300000000,1,web3.eth.accounts[3], {from: web3.eth.accounts[0],data:byteCode,gas: 3000000}, function(err, myContract)//callback 
{
    if(!err)
    {
        if(!myContract.address)
        {
            console.log("Cannot get the deploy address");
        }
        else
        {
            //console.log(myContract.address.toString()); // the contract address
            //var current_dir = process.cwd();
            //var dappJSONname = current_dir + '/dapp.json';
            //console.log(dappJSONname);
            console.log("Get the deploy address");
            var dappJSONname = 'dapp.json';
            json_file2 = fs.readFileSync(dappJSONname);//read original data of dapp.json
        
            fs.unlinkSync(dappJSONname);//delete the dapp.json
            dapp_info2 = JSON.parse(json_file2);
            dapp_info2["contractAddress"] = myContract.address.toString();//add the deploy address to the data
            fs.writeFileSync(dappJSONname, JSON.stringify(dapp_info2, null, 4)); //create dapp.json again,and write the newest data to the json
            console.log("Write the deploy address to json");
        }
    }
    else
    {
        console.log(err);
    }
});