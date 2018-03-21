# testethereum  

#### This project is process from making smart contract to dapp:
- smart contract
- compile 
- deploy 
- test

#### first,please run testrpc in one terminal. 
`testrpc -a 3`
#### It means it has 3 accounts originally in testrpc block. 
#### Then start in another terminal:

- **a,smart contract**
      Mostly,it uses solidity to create a new smart contract file(suffix is .sol).
      this is the most important thing of the project. please wirte it carefully. Once it is deployed on the testrpc,it can't modify,except the re-start the process.

- **b,compile**
      it's to compile the smart contract. In terminal of the linux,run like this: `node compile_sol.js`, then it will be ok,except there is some issue. In the compiling,it will save contractABI content and contractBYTE content to the json file,the json will be used in deploy.

- **c,deploy**
      In terminal of the linux,run like this: `node deploy_contract.js`. It will use json file in step a. And also,it will add the deploy address to the json end. when depolying is over,you can see there is a new block generated in testrpc.

- **d,test**
      Here it makes some test points in js file. In terminal of the linux,run like this: `node dapp.js`. It also needs the data saved in the json file. The test points are based on the smart contract file. You can modify the test content according to your way. This step can repeat.

#### At last,to sum up,it needs install:nodejs,npm,web3,solc,testrpc,nrm,and so on. You can make your own smart contract,and make your own test content.If make the process simple and quick,just input:
`testrpc -a 3 & node compile_sol.js && node deploy_contract.js && node dapp.js`
#### It doesn't need 2 terminals,just one.
