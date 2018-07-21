# DApps-FlappyEther
This is a decentralized game for SchoolOfAI DApps course (batch 2) mid-term project

## Introduction
FlappyEther is a game minic Flappy Bird. You have to control the Ether to prevent it from crashing with moving walls and boundaries.

The game uses **Node** as middle tier, and uses private blockchain **ganache-cli** as storage. The smart contract inside the blockchian can store the user last saved score and its best score.

## Environment Setup
The game is built on **Node** and requires **truffle**  and **ganache-cli** for running it. 

1) **truffle** is a build framework for smart contract.

2) **ganache-cli** is a standalone private blockchain.

```
npm install -g truffle
npm install -g ganache-cli
```
## Build and Compile Smart Contract
Clone the source first. Then, install all required **Node** packages and use **truffle** to compile smart contract. 

```
git clone https://github.com/royskchan/DApps-FlappyEther
cd DApps-FlappyEther
npm install
truffle compile
```
## Run The Game
Start **ganache-cli** in a separate console first.

```
ganache-cli
```
Go to the project folder to deploy the smart contract and run the app

```
truffle migrate
node app.js
```
Then launch the game at http://localhost:3000 

## How to play
Easy, press **Start** to start the game, and use **Jump** button to keep the Ether alive. 

Your last score and the best score will be saved in blockchain after the game finished every time.
