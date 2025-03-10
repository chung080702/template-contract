import { task } from "hardhat/config";

task("accounts", "Prints the list of accounts").setAction(async (_taskArgs, hre) => {
    const { ethers } = hre;
    const accounts = await ethers.getSigners();

    interface AccountsArray {
        address: string;
        balanceInETH: string;
    }
    const accountsArray: Array<AccountsArray> = [];

    for (const account of accounts) {
        const address = account.address;
        const balanceInETH = ethers.utils.formatEther(await account.getBalance());

        accountsArray.push({
            address,
            balanceInETH,
        });
    }

    console.table(accountsArray);
});