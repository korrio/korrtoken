const KorrToken = artifacts.require("KorrToken");
const Web3 = require("web3");

module.exports = async (deployer, network, addresses) => {
    const [admin, admin2] = addresses;

    await deployer.deploy(KorrToken);
    const KORR = await KorrToken.deployed();

    const mintAmount = Web3.utils.toWei('1000000', 'ether');
    // const mintAmount = 1000000 * 10 ** 18;
    await KORR.mint(admin, mintAmount);

    console.log("Korr:", KORR.address);
    console.log("mintAmount", mintAmount);
};