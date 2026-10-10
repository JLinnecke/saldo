import { useState } from "react";
import styles from "./TransactionForm.module.css";
import Calendar from "react-calendar";

function TransactionForm({ addTransaction }) {
  const [transactionType, setTransactionType] = useState("income");
  const [amount, inputAmount] = useState("");
  const [date, setDate] = useState(new Date());

  const [category, setCategory] = useState("work");
  const [notice, setNotice] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const transaction = {
      type: transactionType,
      category: category,
      notice: notice,
      amount: Number(amount),
      date,
      id: crypto.randomUUID(),
    };

    addTransaction(transaction);
    inputAmount("");
    setCategory("work");
    setNotice("");
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
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="work">Work</option>
          <option value="food">Food</option>
          <option value="fuel">Fuel</option>
          <option value="insurance">Insurance</option>
          <option value="subscription">Subscription</option>
          <option value="hobby">Hobby</option>
        </select>

        <input
          type="text"
          placeholder="notice"
          value={notice}
          onChange={(e) => setNotice(e.target.value)}
        />
        <Calendar value={date} onChange={setDate} />
        <button>submit</button>
      </form>
    </div>
  );
}

export default TransactionForm;
