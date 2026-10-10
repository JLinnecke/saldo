import { Fragment } from "react";
import MonthlyBalance from "../MonthlyBalance/MonthlyBalance";
import TransactionItem from "../TransactionItem/TransactionItem";
import styles from "./TransactionList.module.css";

function TransactionList({ monthlyTransactions }) {
  return (
    <div className={styles.transactionListContainer}>
      <h1>TransactionList</h1>
      <div className={styles.transactionItemHeadline}>
        <p>type</p>
        <p>amount</p>
        <p>category</p>
        <p>notice</p>
        <p>date</p>
      </div>
      {monthlyTransactions.map((item) => {
        const transaction = [...item.income, ...item.expenses];
        return (
          <Fragment key={`${item.year}-${item.month}`}>
            {transaction.map((transactionItem) => (
              <TransactionItem
                transactionItem={transactionItem}
                key={transactionItem.id}
              />
            ))}

            <MonthlyBalance monthData={item} />
          </Fragment>
        );
      })}
    </div>
  );
}

export default TransactionList;
