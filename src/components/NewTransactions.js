import React, { useState } from "react";

function NewTransactions() {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  return (
    <div className="input-transactions">
      <h2>Add New transactions</h2>
      <label>Text</label>
      <input
        type="text"
        className="input-text"
        placeholder="Enter Text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <label>Amount</label>
      <input
        type="number"
        className="input-amount"
        placeholder="Enter Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <br />
      <button className="btn">Add Transactions</button>
    </div>
  );
}

export default NewTransactions;
