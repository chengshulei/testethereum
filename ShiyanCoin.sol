pragma solidity ^0.4.11;


contract ShiyanCoin
{
	mapping(address => uint256) public balanceOf;

	uint256 public initialAmount;
	uint256 public transferFee;
	address public feeAccount;
	function ShiyanCoin(uint256 amount,uint256 fee,address feeaddress)
	{
		balanceOf[msg.sender] = amount;
		initialAmount = amount;
		transferFee = fee;
	  	feeAccount = feeaddress;
	}
	function getTransferFee() returns (uint256)
	{
		return transferFee;
	}
	function getFeeAccount() returns (address)
	{
		return feeAccount;
	}
	function getInitialAmount() returns (uint256)
	{
		return balanceOf[msg.sender];
	}

	function getBalanceOf(address addr) returns (uint256)
	{
		return balanceOf[addr];
	}
	function transfer(address _from, address _to ,uint256 value)
	{
		require(balanceOf[_from] >= value + transferFee);
		require(balanceOf[_to] + value >= balanceOf[_to]);
		require(balanceOf[feeAccount] + transferFee >= balanceOf[feeAccount]);
		balanceOf[_from] -= value + transferFee;
		balanceOf[_to] += value;
		balanceOf[feeAccount] += transferFee;
	}
}
