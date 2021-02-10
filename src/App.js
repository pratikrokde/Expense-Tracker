import "./App.css";
import Balance from "./components/Balance";
import Header from "./components/Header";
import IncomeExpense from "./components/IncomeExpense";
import NewTransactions from "./components/NewTransactions";
import TransactionList from "./components/TransactionList";
import { GlobalProvider } from "./Context/GlobalContext";

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpense />
        <TransactionList />
        <NewTransactions />
      </div>
    </GlobalProvider>
  );
}

export default App;
