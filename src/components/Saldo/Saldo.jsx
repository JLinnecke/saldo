import { useState } from "react";
import ExpenseOverview from "../ExpenseOverview/ExpenseOverview";
import Header from "../Header/Header";
import TransactionForm from "../TransactionForm/TransactionForm";
import TransactionList from "../TransactionList/TransactionList";

import styles from "./Saldo.module.css";

const months = [
  {
    year: 2026,
    month: 10,
    income: [],
    expenses: [],
  },
  {
    year: 2026,
    month: 11,
    income: [],
    expenses: [],
  },
  {
    year: 2026,
    month: 12,
    income: [],
    expenses: [],
  },
];

function Saldo() {
  const [monthlyTransactions, setMonthlyTransactions] = useState(months);

  function addTransaction(transaction) {
    const year = transaction.date.getFullYear();
    const month = transaction.date.getMonth() + 1;

    const monthIndex = monthlyTransactions.findIndex((element) => {
      return element.year === year && element.month === month;
    });

    if (transaction.type === "income") {
      const newIncome = [
        ...monthlyTransactions[monthIndex].income,
        transaction,
      ];
      const monthlyIncome = monthlyTransactions.map((m) => {
        return m.year === year && m.month === month
          ? { ...m, income: newIncome }
          : m;
      });
      setMonthlyTransactions(monthlyIncome);
    } else if (transaction.type === "expense") {
      const newExpenses = [
        ...monthlyTransactions[monthIndex].expenses,
        transaction,
      ];
      const monthlyExpenses = monthlyTransactions.map((m) => {
        return m.year === year && m.month === month
          ? { ...m, expenses: newExpenses }
          : m;
      });
      setMonthlyTransactions(monthlyExpenses);
    }

    console.log(monthIndex);
  }

  return (
    <div>
      <Header />

      <div className={styles.gridLayout}>
        <div>
          <TransactionForm addTransaction={addTransaction} />
          <TransactionList />
        </div>
        <ExpenseOverview />
      </div>
    </div>
  );
}

export default Saldo;
