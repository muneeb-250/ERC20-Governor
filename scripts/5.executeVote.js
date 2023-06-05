const { ethers } = require("hardhat");

async function main() {
    const { parseEther } = ethers.utils;
    const [owner] = await ethers.getSigners();
    const MyGovernor = ethers.getContractAt("MyGovernor", "0x163EBfCAb2022486581077Ba35D02a5DB67BcE25");
    const tx = await MyGovernor.execute(
        [token.address],
        [0],
        [token.interface.encodeFunctionData("mint", [owner.address, parseEther("25000")])],
        keccak256(toUtf8Bytes("Give the owner more tokens!"))
    );
    const txReceipt = await tx.wait();
    console.log({ txReceipt });
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
