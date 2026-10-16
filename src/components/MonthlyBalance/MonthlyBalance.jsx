import styles from "./MonthlyBalance.module.css";

/**
 * Berechnet Einnahmen minus Ausgaben eines Monats und markiert das Vorzeichen farblich.
 * @param {Object} props - Eigenschaften der Monatsanzeige.
 * @param {Object} props.monthData - Monatsgruppe mit Einnahmen und Ausgaben.
 * @returns {React.JSX.Element} Anzeige des berechneten Monatssaldos.
 */
function MonthlyBalance({ monthData }) {
  const monthIncomeAmount = monthData.income.reduce((acc, cur) => {
    return acc + Number(cur.amount);
  }, 0);

  const monthExpenseAmount = monthData.expenses.reduce((acc, cur) => {
    return acc + Number(cur.amount);
  }, 0);

  const monthlyBalance = monthIncomeAmount - monthExpenseAmount;

  return (
    <div>
      <h1>monthlyBalance</h1>
      <h3
        className={
          monthlyBalance > 0
            ? styles.positive
            : monthlyBalance < 0
              ? styles.negative
              : monthlyBalance === 0
                ? ""
                : ""
        }
      >
        {monthlyBalance > 0 ? "+" : ""}
        {monthlyBalance}
      </h3>
    </div>
  );
}

export default MonthlyBalance;
