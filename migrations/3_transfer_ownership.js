const { admin } = require('@openzeppelin/truffle-upgrades');

module.exports = async function(deployer, network) {
    const gnosisSafe = '0x1e659B4c2F9C96e0A896686422F8B7815021267D';

    //Don't change proxyAdmin ownership for test network
    if(network !== 'test') {
        //the owner of the proxyAdmin can upgrade our contracts
        await admin.transferProxyAdminOwnership(gnosisSafe);
    }
};