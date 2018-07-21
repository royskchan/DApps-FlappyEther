pragma solidity ^0.4.24;

// This is a contract to store and get the best score for user on FlappyEther

contract FlappyEther {
	mapping (address => uint) scores;
	mapping (address => uint) bestScores;
	
	event Stored(address indexed, uint256 _value);

	constructor() public {

	}

	function saveScore(uint score) public returns(bool) {
		uint bestScore = bestScores[msg.sender];
		bool isBestScore = false;
		if(score > bestScore){
			bestScores[msg.sender] = score;
			isBestScore = true;
		}
		scores[msg.sender] = score;
		return isBestScore;
	}

	function getLastScore() public view returns(uint){
		uint score = scores[msg.sender];
		return score;
	}
	
	function getBestScore() public view returns(uint){
		uint bestScore = bestScores[msg.sender];
		return bestScore;
	}
	
}
