const { TruffleContract } = require('@openzeppelin/truffle-upgrades/dist/truffle');
const { expect } = require('chai');

const BoxV2 = artifacts.require('BoxV2');

TruffleContract('BoxV2', function() {
    beforeEach(async function() {
        this.boxV2 = await BoxV2.new();
    });

    it('retrieve returns a value previously stored', async function() {
        await this.boxV2.store(42);

        expect((await this.boxV2.retrieve()).toString()).to.equal('42');
    });

    it('retrieve a value previously incremented', async function() {
        await this.boxV2.increment();

        expect((await this.boxV2.retrieve()).toString()).to.equal('1');
    });
});