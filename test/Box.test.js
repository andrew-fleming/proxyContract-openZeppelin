//load dependencies

const { expect } = require('chai');

//load compiled artifacts
const Box = artifacts.require('Box');

//start test block
contract('Box', function() {
    beforeEach(async function() {
        //deploy a new Box for each test
        this.box = await Box.new();
    });

    //test case
    it('retrieve returns a value previously stored', async function() {
        //store a value
        await this.box.store(42);

        //test if the returned value is the same one
        expect((await this.box.retrieve()).toString()).to.equal('42');
    });
});