pragma solidity ^0.5.0;
import './Token.sol';

contract EthSwap {
  string public name = "EthSwap Instant Exchange";
  Token public token;
  uint public rate = 100;

  constructor(Token _token) public {
    token = _token;
  }

  event TokensPurchased(
    address account,
    address token,
    uint256 amount,
    uint256 rate
  );
  
  event TokensSold(
    address account,
    address token,
    uint256 amount,
    uint256 rate
  );

  function buyTokens() public payable {
    // calculate number of token to buy
    uint256 tokenAmount = msg.value * rate;
    // require the EthSwap has enough tokens
    require(token.balanceOf(address(this)) >= tokenAmount);
    // transfer token from ethSwap to buyer
    token.transfer(msg.sender, tokenAmount);
    // emit event
    emit TokensPurchased(msg.sender, address(token), tokenAmount, rate);
  }

  function sellTokens(uint _amount) public {
    // User can't sell more tokens than they have
    require(token.balanceOf(msg.sender) >= _amount);

    // Calculate the amount of Ether to redeem
    uint etherAmount = _amount / rate;

    // Require that EthSwap has enough Ether
    require(address(this).balance >= etherAmount);

    // Perform sale
    token.transferFrom(msg.sender, address(this), _amount);
    msg.sender.transfer(etherAmount);

    // Emit an event
    emit TokensSold(msg.sender, address(token), _amount, rate);
  }
}