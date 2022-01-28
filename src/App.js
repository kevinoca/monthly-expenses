import React from "react"
import Body from "./components/Body/Body";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import ExpensesContainer from "components/ExpensesContainer/ExpensesContainer"
import { ExpensesContext } from "context/ExpensesContext"
import { getFromStorage, setIntoStorage } from "utils/StorageUtils"
import { getTotalExpensesAmount } from "utils/ExpenseAmountUtils"

function App() {

  // *hooks
  const [expensesList, setExpensesList] = React.useState(getFromStorage("expenses"))
  const [totalExpensesValue, setTotalExpensesValue] = React.useState(getTotalExpensesAmount(expensesList))


  // *Methods
  function addExpense(expense) {

    const newExpensesList = [...expensesList, expense]

    setExpensesList(newExpensesList)

    setIntoStorage("expenses", newExpensesList)

    setTotalExpensesValue(getTotalExpensesAmount(newExpensesList))

  }

  function deleteExpenseById(id) {

    const expensesListWithoutDeletedOne = getFromStorage("expenses").filter(expense => expense.expenseName !== id)

    setExpensesList(expensesListWithoutDeletedOne)

    setIntoStorage("expenses", expensesListWithoutDeletedOne)

    setTotalExpensesValue(getTotalExpensesAmount(expensesListWithoutDeletedOne))

  }

  return (
    <>
      <ExpensesContext.Provider value={{
        value: totalExpensesValue,
        addExpense,
        deleteExpenseById,
        expensesList
      }}>

        <Header />
        <Body>
          <ExpensesContainer />
        </Body>
        <Footer />
      </ExpensesContext.Provider>
    </>
  );
}

export default App;
