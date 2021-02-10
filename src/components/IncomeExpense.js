import React, { useContext } from "react";
import { GlobalContext } from "../Context/GlobalContext";

function IncomeExpense() {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map((trans) => trans.amount);
  const totalIncome = amounts.filter((amt) => amt > 0);
  const totalExpense = amounts.filter((amt) => amt < 0);

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">
          +{totalIncome.reduce((acc, item) => (acc += item))}
        </p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">
          {totalExpense.reduce((acc, item) => acc + item)}
        </p>
      </div>
    </div>
  );
}

export default IncomeExpense;
