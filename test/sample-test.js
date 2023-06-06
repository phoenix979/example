const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("PolyFloki", function () {
  it("Selling The token is possible", async function () {
    const PolyFloki = await ethers.getContractFactory("PolyFloki");
    const polyfloki = await PolyFloki.deploy();
    await polyfloki.deployed();

    //expect(await polyfloki.greet()).to.equal("Hello, world!");
    //const totalSupply = await polyfloki.totalSupply()
    //console.log(totalSupply)
    //const setGreetingTx = await polyfloki.setGreeting("Hola, mundo!");

    // wait until the transaction is mined
    //await setGreetingTx.wait();

    //expect(await polyfloki.greet()).to.equal("Hola, mundo!");
  });
});
