import { useState } from "react";
import ExpenseOverview from "../ExpenseOverview/ExpenseOverview";
import Header from "../Header/Header";
import TransactionForm from "../TransactionForm/TransactionForm";
import TransactionList from "../TransactionList/TransactionList";

import styles from "./Saldo.module.css";

function Saldo() {
  const [transactions, setTransactions] = useState([]);

  return (
    <div>
      <Header />

      <div className={styles.gridLayout}>
        <div>
          <TransactionForm setTransactions={setTransactions} />
          <TransactionList transactions={transactions} />
        </div>
        <ExpenseOverview />
      </div>
    </div>
  );
}

export default Saldo;
