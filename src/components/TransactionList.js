import React, { useContext } from "react";
import { GlobalContext } from "../Context/GlobalContext";

function TransactionList() {
  const { deleteTransaction, transactions } = useContext(GlobalContext);
  // console.log(transactions);
  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.map((trans) => {
          const { id, text, amount } = trans;
          return (
            <li className={amount > 0 ? "plus" : "minus"} key={id}>
              {text} <span>{amount}</span>
              <button
                className="delete-btn"
                onClick={() => deleteTransaction(trans.id)}
              >
                x
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default TransactionList;
