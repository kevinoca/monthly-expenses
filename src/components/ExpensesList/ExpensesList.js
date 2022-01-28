import * as React from 'react';
import List from '@mui/material/List';
import Box from '@mui/material/Box';
import ExpenseItem from 'components/ExpenseItem/ExpenseItem';
import { ExpensesContext } from 'context/ExpensesContext';

export default function ExpensesList() {

  const { expensesList } = React.useContext(ExpensesContext)

  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: "100%",
        },
      }}
    >
      <nav aria-label="secondary mailbox folders">
        <List>
          {expensesList.map((expenseItemData) => <ExpenseItem {...expenseItemData} />).reverse()}
        </List>
      </nav>
    </Box>
  )
}
