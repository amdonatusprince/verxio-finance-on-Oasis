
const hre = require("hardhat");

async function main() {
  console.log("############ Deploying The Registry Contract ###############")
  const contract = await hre.ethers.deployContract(
    "StealthAddressRegistry"
  );

  await contract.waitForDeployment();  
  console.log(`Stealth Address Registry Contract deployed to ${contract.target}`);

  console.log("############### Contract Deployed Successfully ################")

}

// Contract Address
// 0xd1e1d37687Ff75B18c2F715825194aDD2A9aa23E
// 0x978ee1340e736DC9a820BdAdfDB1358F78525159
// 0x066CC2a794CCa4f8d6535fF76439294461eec933

// 0xd646962d7CA737Da14004d03Caf0543A3050F55E ---remove

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
