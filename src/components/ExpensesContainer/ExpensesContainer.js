import React from "react";
import Divider from '@mui/material/Divider';
import AddExpenseCar from "components/AddExpenseCard/AddExpenseCard"
import ExpensesList from "components/ExpensesList/ExpensesList"

export default function ExpensesContainer() {

  return (
    <>
      <AddExpenseCar />
      <Divider />
      <ExpensesList />
    </>

  )

}