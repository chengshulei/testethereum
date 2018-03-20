This project is a process,which contains smart contract,compile ,deploy it,and test it.

first,please run testrpc.
you can input in terminal of the linux like this:
testrpc -a 3
it means testrpc runs and it has 3 accounts.


a,smart contract
this is the most important thing of the project.
please wirte it carefully.
Once it is deployed on the testrpc,it can't modify,except the re-start the process.



b,compile 
it's to compile the smart contract(file suffix is .sol).
In terminal of the linux,compile like this:
node compile_sol.js
then it will be ok,except there is some issue.
In the compiling,it will save contractABI content and contractBYTE content to the json file,the json will be used in deploy.



c,deploy
In terminal of the linux,compile like this:
node deploy_contract.js
It will use dapp.son in step a.
And also,it will add the deploy address to the json end.
when depolying is over,you can see there is a block in testrpc terminal.

d,test

