const { ethers } = require("hardhat");

async function main() {
    const [owner] = await ethers.getSigners();
    // const MyGovernor = ethers.getContractAt("MyGovernor", "0x163EBfCAb2022486581077Ba35D02a5DB67BcE25");
    const MyToken = ethers.getContractAt("MyToken", "0x27A2925aEa4ff7Ca732c8c0520e2ffdAA1ad3406");

    const airdropTx = (await MyToken).connect(owner).delegate(owner.address);
    console.log("Airdrop tx: ", airdropTx.hash);


}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
