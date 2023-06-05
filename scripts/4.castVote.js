const { ethers } = require("hardhat");

async function main() {
    const proposalId = 1;
    const [owner] = await ethers.getSigners();
    const MyGovernor = ethers.getContractAt("MyGovernor", "0x163EBfCAb2022486581077Ba35D02a5DB67BcE25");
    const tx = await MyGovernor.connect(owner).castVote(proposalId, 1);
    const txReceipt = await tx.wait();
    console.log({ txReceipt });
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
