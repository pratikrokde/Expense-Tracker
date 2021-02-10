import React, { useContext } from "react";
import { GlobalContext } from "../Context/GlobalContext";

function Balance() {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map((trans) => trans.amount);
  return (
    <>
      <h4>Your Balance</h4>
      <h1>
        $
        {amounts.reduce((acc, item) => {
          return (acc += item);
        })}
      </h1>
    </>
  );
}

export default Balance;
