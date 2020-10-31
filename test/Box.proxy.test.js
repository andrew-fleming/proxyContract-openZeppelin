const { expect } = require('chai');
const { deployProxy } = require('@openzeppelin/truffle-upgrades');
const { TruffleContract } = require('@openzeppelin/truffle-upgrades/dist/truffle');

const Box = artifacts.require('Box');

//start test block
TruffleContract('Box (proxy)', function() {
    beforeEach(async function() {
        this.box = await deployProxy(Box, [42], {initializer: 'store'});
    });

    //test case
    it('retrieve returns a value previously initialized', async function() {
        expect((await this.box.retrieve()).toString()).to.equal('42');
  });
});