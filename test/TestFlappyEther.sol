pragma solidity ^0.4.2;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/FlappyEther.sol";

contract TestFlappyEther {

  function testBestScoreStored() public {
    FlappyEther flappyEther = FlappyEther(DeployedAddresses.FlappyEther());

    bool expected = true;
		uint preBest = flappyEther.getBestScore();
		uint newBest = preBest + 20;
    Assert.equal(flappyEther.saveScore(newBest), expected, "User hits its best score");
   	Assert.equal(flappyEther.getBestScore(), newBest, "User best score stored");
  }

}
