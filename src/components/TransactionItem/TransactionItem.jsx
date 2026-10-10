import styles from "./TransactionItem.module.css";

function TransactionItem({ transactionItem }) {
  const transactionDate = new Date(transactionItem.date);
  const options = {
    month: "2-digit",
    year: "2-digit",
    day: "2-digit",
  };
  const date = transactionDate.toLocaleDateString("de-DE", options);

  return (
    <>
      <div className={styles.transactionGrid}>
        <span>{transactionItem.type}</span>
        <span>{transactionItem.amount}</span>
        <span>{transactionItem.category}</span>
        <span>{transactionItem.notice}</span>
        <span>{date}</span>
      </div>
    </>
  );
}

export default TransactionItem;
