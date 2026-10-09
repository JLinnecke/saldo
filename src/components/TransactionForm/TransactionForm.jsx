import { useState } from "react";
import styles from "./TransactionForm.module.css";
import Calendar from "react-calendar";

function TransactionForm({ setTransactions }) {
  const [transactionType, setTransactionType] = useState("income");
  const [amount, inputAmount] = useState("");
  const [date, setDate] = useState(new Date());

  function handleSubmit(e) {
    e.preventDefault();

    const transaction = {
      type: transactionType,
      amount: Number(amount),
      date,
    };

    setTransactions((prevTransaction) => [...prevTransaction, transaction]);
    inputAmount("");
  }

  return (
    <div className={styles.transactionFormContainer}>
      <h1>TransactionForm</h1>
      <form onSubmit={handleSubmit}>
        <select
          value={transactionType}
          onChange={(e) => setTransactionType(e.target.value)}
        >
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
        <input
          type="number"
          placeholder="insert your cash"
          value={amount}
          onChange={(e) => inputAmount(e.target.value)}
        />
        <Calendar value={date} onChange={setDate} />
        <button>submit</button>
      </form>
    </div>
  );
}

export default TransactionForm;
