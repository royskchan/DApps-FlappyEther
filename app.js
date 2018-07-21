var express = require('express');
var Web3 = require("web3");
var contract = require("truffle-contract");

var provider    = new Web3.providers.HttpProvider("http://localhost:8545");

var web3 = new Web3();
web3.setProvider(provider);

var path = require("path");
var FlappyEther = require(path.join(__dirname, "build/contracts/FlappyEther.json"));
var FlappyEtherContract = contract(FlappyEther);
FlappyEtherContract.setProvider(provider);

var accounts = web3.eth.accounts;

var app = express();
app.get("/api/save-score", saveScore);
app.get("/api/get-last-score", getLastScore);
app.get("/api/get-best-score", getBestScore);

app.use("/", express.static("public"));

app.listen(3000)

function saveScore(req, res){
	var score = parseInt(req.query.score);
	FlappyEtherContract.deployed().then(function(instance) {
		
  	return instance.saveScore(score, {from: accounts[0]})
  
  }).then(function(result) {
  	
    console.log("saveScore[" + result.tx + "]"); 
		res.send(result.tx);
		
	});
}

function getLastScore(req, res){

	FlappyEtherContract.deployed().then(function(instance) {
		
		return instance.getLastScore({from: accounts[0]})
  
  }).then(function(result) {
  	
    console.log("getLastScore[" + result.toNumber() + "]"); 
		res.send(result.toNumber().toString());
		
	});
}

function getBestScore(req, res){

	FlappyEtherContract.deployed().then(function(instance) {
		
		return instance.getBestScore({from: accounts[0]})
  
  }).then(function(result) {
  	
    console.log("getBestScore[" + result.toNumber() + "]");  
		res.send(result.toNumber().toString());
		
	});
}

