// Load a keypair & Check your balance

// import { Connection, LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js";

// const publicKey = new PublicKey("Ct2MCWK5kvPmyvGska9QimmjnBYizRewZfiQwvQvu15b");

// const connection = new Connection("https://api.devnet.solana.com", "confirmed");

// const balanceInLamports = await connection.getBalance(publicKey);

// const balanceInSOL = balanceInLamports / LAMPORTS_PER_SOL;

// console.log(
//   `💰 Finished! The balance for the wallet at address ${publicKey} is ${balanceInSOL} SOL!`
// );

// Check other student's balances

// import { Connection, LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js";

// require("dotenv").config();

// const suppliedPublicKey = process.env.STUDENT_PUBLIC_KEY;

// if (!suppliedPublicKey) {
//   throw new Error("Provide a public key to check the balance of!");
// }

// const connection = new Connection("https://api.devnet.solana.com", "confirmed");

// const publicKey = new PublicKey(suppliedPublicKey);

// const balanceInLamports = await connection.getBalance(publicKey);

// const balanceInSOL = balanceInLamports / LAMPORTS_PER_SOL;

// console.log(
//   `✅ Finished! The balance for the wallet at address ${publicKey} is ${balanceInSOL} SOL!`
// );

// Challenge
//    Add instructions to handle invalid wallet addresses.
//    Modify the script to connect to mainNet and look up some famous Solana wallets. Try toly.sol, shaq.sol or mccann.sol.

import { Connection, LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js";

import { getDomainKeySync } from "@bonfida/spl-name-service";


const domainName = "shaq";
const { pubkey } = getDomainKeySync(domainName);

const suppliedPublicKey = pubkey;

if (!suppliedPublicKey) {
  throw new Error("Provide a public key to check the balance of!");
}

const connection = new Connection(
  "https://api.mainnet-beta.solana.com",
  "confirmed"
);

try {
  const publicKey = new PublicKey(suppliedPublicKey);

  const balanceInLamports = await connection.getBalance(publicKey);

  const balanceInSOL = balanceInLamports / LAMPORTS_PER_SOL;

  console.log(
    `✅ Finished! The balance for the wallet at address ${publicKey} is ${balanceInSOL}!`
  );
} catch (error) {
  console.log("Error!... Address is not valid!");
}
