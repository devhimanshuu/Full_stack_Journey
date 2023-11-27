// 1.Create variables used in the transaction.
// Collections
const accounts = client.db("bank").collection("accounts");
const transfers = client.db("bank").collection("transfers");

// Account information
let account_id_sender = "MDB574189300";
let account_id_receiver = "MDB343652528";
let transaction_amount = 100;

// 2.Start a new session.
const session = client.startSession();

// 3.Begin a transaction with the WithTransaction() method on the session.
try {
  const transactionResults = await session.withTransaction(async () => {
    // Operations will go here
  });

  // 4.Update the balance field of the sender’s account by decrementing the transaction_amount from the balance field.
  const senderUpdate = await accounts.updateOne(
    { account_id: account_id_sender },
    { $inc: { balance: -transaction_amount } },
    { session }
  );

  // 5.Update the balance field of the receiver’s account by incrementing the transaction_amount to the balance field.
  const receiverUpdate = await accounts.updateOne(
    { account_id: account_id_receiver },
    { $inc: { balance: transaction_amount } },
    { session }
  );

  // 6.Create a transfer document and insert it into the transfers collection.
  const transfer = {
    transfer_id: "TR21872187",
    amount: 100,
    from_account: account_id_sender,
    to_account: account_id_receiver,
  };

  const insertTransferResults = await transfers.insertOne(transfer, {
    session,
  });

  // 7.Update the transfers_complete array of the sender’s account by adding the transfer_id to the array.
  const updateSenderTransferResults = await accounts.updateOne(
    { account_id: account_id_sender },
    { $push: { transfers_complete: transfer.transfer_id } },
    { session }
  );

  // 8.Update the transfers_complete array of the receiver’s account by adding the transfer_id to the array.
  const updateReceiverTransferResults = await accounts.updateOne(
    { account_id: account_id_receiver },
    { $push: { transfers_complete: transfer.transfer_id } },
    { session }
  );

  //9. Log a message regarding the success or failure of the transaction.
  if (transactionResults) {
    console.log("Transaction completed successfully.");
  } else {
    console.log("Transaction failed.");
  }

  // Catch any errors and close the session.
} catch (err) {
  console.error(`Transaction aborted: ${err}`);
  process.exit(1);
} finally {
  await session.endSession();
  await client.close();
}
