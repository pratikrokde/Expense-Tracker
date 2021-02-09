import "./App.css";
import Balance from "./components/Balance";
import Header from "./components/Header";
import IncomeExpense from "./components/IncomeExpense";
import NewTransactions from "./components/NewTransactions";
import TransactionList from "./components/TransactionList";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpense />
        <TransactionList />
        <NewTransactions />
      </div>
    </div>
  );
}

export default App;
