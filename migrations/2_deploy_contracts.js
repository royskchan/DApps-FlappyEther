var FlappyEther = artifacts.require("./FlappyEther.sol");

module.exports = function(deployer) {
  deployer.deploy(FlappyEther);
};
