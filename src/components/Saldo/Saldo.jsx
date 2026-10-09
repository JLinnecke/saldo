import TransactionForm from "../TransactionForm/TransactionForm";
import TransactionList from "../TransactionList/TransactionList";

function Saldo() {
  return (
    <div>
      <h1>Saldo</h1>
      <TransactionForm />
      <TransactionList />
    </div>
  );
}

export default Saldo;
