const { accounts, contract } = require('@openzeppelin/test-environment');
const { deployProxy, upgradeProxy } = require('@openzeppelin/truffle-upgrades');
const HelloWorld = contract.fromArtifact("HelloWorld");
// const {
//     BN,           // Big Number support
//     constants,    // Common constants, like the zero address and largest integers
//     expectEvent,  // Assertions for emitted events
//     expectRevert, // Assertions for transactions that should fail
// } = require('@openzeppelin/test-helpers');

describe('HelloWorld', () => {
    let hello;
    const [ owner, testAccount ] = accounts;
    beforeEach(async () => {
        hello = await HelloWorld.new({ from: owner });
    });

    it('should exist', () => {
        expect(hello).toBeDefined();
    });

    // it('retrieve returns a value previously stored', async () => {
    //     // Store a value
    //     await box.store(42, { from: owner });
    //     // Test if the returned value is the same one
    //     // Note that we need to use strings to compare the 256 bit integers
    //     const value = await box.retrieve()
    //     expect(value.toString()).toEqual('42');
    // });


    // it('should not allow anyone not the owner to store a value', async () => {
    //     // await box.store(42, { from: testAccount })
    //     await expectRevert(box.store(42, { from: testAccount }), 'Ownable: caller is not the owner.')
    // });

    // it('should emit the ValueChanged event', async () => {
    //     const value = 42;
    //     const tx = await box.store(value, { from: owner });
    //     // Event assertions can verify that the arguments are the expected ones
    //     expectEvent(tx, 'ValueChanged');
    // });
});