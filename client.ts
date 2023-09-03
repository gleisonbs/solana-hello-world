// 1 ===========================================================================
// console.log(pg.wallet.publicKey.toString(), "Saying hello");

// let latestBlockhash = await pg.connection.getLatestBlockhash("finalized");

// const tx = await pg.program.methods.sayHello().rpc();

// await pg.connection.confirmTransaction({
//   signature: tx,
//   blockhash: latestBlockhash.blockhash,
//   lastValidBlockHeight: latestBlockhash.lastValidBlockHeight,
// });

// console.log(
//   "Transaction complete: ",
//   `https://explorer.solana.com/tx/${tx}?cluster=devnet`
// );

// 2 ===========================================================================
// const counter = anchor.web3.Keypair.generate();
// console.log('creating counter: ', counter.publicKey.toString());

// const latestBlockhash = await pg.connection.getLatestBlockhash('finalized');

// const tx = await pg.program.methods
//   .initializeCount()
//   .accounts({ counter: counter.publicKey })
//   .signers([counter])
//   .rpc();

// await pg.connection.confirmTransaction({
//   signature: tx,
//   blockhash: latestBlockhash.blockhash,
//   lastValidBlockHeight: latestBlockhash.lastValidBlockHeight
// });

// console.log(`https://explorer.solana.com/tx/${tx}?cluster=devnet`);

// 3 ===========================================================================
// const COUNTER = "AZwVvxLBJJSWHPq1oyZe4gcDbqoHjT3Jhgo5R6BBjGBs"; //Replace with your public key

// console.log(pg.wallet.publicKey.toString(), "Saying hello:");

// const latestBlockhash = await pg.connection.getLatestBlockhash("finalized");

// const counter = new anchor.web3.PublicKey(COUNTER);
// const tx = await pg.program.methods.sayHello().accounts({ counter }).rpc();

// await pg.connection.confirmTransaction({
//   signature: tx,
//   blockhash: latestBlockhash.blockhash,
//   lastValidBlockHeight: latestBlockhash.lastValidBlockHeight,
// });
// console.log(`https://explorer.solana.com/tx/${tx}?cluster=devnet`);

// const data = await pg.program.account.counter.fetch(counter);
// console.log("greeted", data.count.toNumber(), "times");
