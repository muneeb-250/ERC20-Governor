const { ethers } = require("hardhat");

async function main() {
    const [owner] = await ethers.getSigners();
    const MyGovernor = await ethers.getContractAt("MyGovernor", "0x163EBfCAb2022486581077Ba35D02a5DB67BcE25");
    const MyToken = await ethers.getContractAt("MyToken", "0x27A2925aEa4ff7Ca732c8c0520e2ffdAA1ad3406");
    const { parseEther } = ethers.utils;
    const tx = await MyGovernor.connect(owner).propose(
        [MyToken.address],
        [0],
        [MyToken.interface.encodeFunctionData("mint", [owner.address, parseEther("25000")])],
        "Give the owner more tokens!"
    );
    const receipt = await tx.wait();
    const evt = receipt.events.find((x) => x.event === "ProposalCreated");
    const { proposalId } = evt.args;

    await new Promise((resolve) => setTimeout(resolve, 60000));

    console.log({ proposalId });
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});

