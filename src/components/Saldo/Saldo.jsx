import { useEffect, useState } from "react";
import ExpenseOverview from "../ExpenseOverview/ExpenseOverview";
import Header from "../Header/Header";
import TransactionForm from "../TransactionForm/TransactionForm";
import TransactionList from "../TransactionList/TransactionList";

import styles from "./Saldo.module.css";

function Saldo() {
  const [monthlyTransactions, setMonthlyTransactions] = useState(
    () => JSON.parse(localStorage.getItem("monthlyTransactions")) || [],
  );

  useEffect(
    function () {
      localStorage.setItem(
        "monthlyTransactions",
        JSON.stringify(monthlyTransactions),
      );
    },
    [monthlyTransactions],
  );

  function addTransaction(transaction) {
    const year = transaction.date.getFullYear();
    const month = transaction.date.getMonth() + 1;

    const monthIndex = monthlyTransactions.findIndex((element) => {
      return element.year === year && element.month === month;
    });

    if (monthIndex === -1) {
      const newMonthlyTransaction = {
        year: year,
        month: month,
        income: transaction.type === "income" ? [transaction] : [],
        expenses: transaction.type === "expense" ? [transaction] : [],
      };
      setMonthlyTransactions([...monthlyTransactions, newMonthlyTransaction]);
      return;
    }

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

    console.log(monthIndex, monthlyTransactions);
  }

  return (
    <div>
      <Header />

      <div className={styles.gridLayout}>
        <div>
          <TransactionForm addTransaction={addTransaction} />
          <TransactionList monthlyTransactions={monthlyTransactions} />
        </div>
        <ExpenseOverview />
      </div>
    </div>
  );
}

export default Saldo;
