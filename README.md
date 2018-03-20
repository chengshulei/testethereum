# testethereum
This project is a process,which contains smart contract,compile ,deploy it,and test it.

first,please run testrpc in one terminal. you can input in terminal of the linux like this: testrpc -a 3 it means testrpc runs and it has 3 accounts. Then do follow in another terminal:

a,smart contract this is the most important thing of the project. please wirte it carefully. Once it is deployed on the testrpc,it can't modify,except the re-start the process.

b,compile it's to compile the smart contract(file suffix is .sol). In terminal of the linux,compile like this: node compile_sol.js then it will be ok,except there is some issue. In the compiling,it will save contractABI content and contractBYTE content to the json file,the json will be used in deploy.

c,deploy In terminal of the linux,compile like this: node deploy_contract.js It will use json file in step a. And also,it will add the deploy address to the json end. when depolying is over,you can see there is a block in testrpc terminal.

d,test Here it makes some test tips in dapp.js. In terminal of the linux,compile like this: node dapp.js It also needs the data saved in the json file. The test tips is based on the smart contract file. You can modify the test content according to your way. It can run this step several times.

At last,to sum,it needs install:nodejs,npm,web3,solc,testrpc,nrm,and so on. you can make your own smart contract,and make your own test content.If need more simple and quicker process,just input: testrpc -a 3 & node compile_sol.js && node deploy_contract.js && node dapp.js.(It doesn't need 2 terminals,just one).
