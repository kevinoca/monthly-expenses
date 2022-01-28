import React, { useContext } from "react"
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import EuroIcon from '@mui/icons-material/Euro';
import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from '@mui/icons-material/Close';
import { ExpensesContext } from "context/ExpensesContext"

export default function ExpenseItem(props) {

  const { deleteExpenseById } = useContext(ExpensesContext)

  const { amount, expenseName } = props

  return (
    <ListItem
      secondaryAction={
        <>
          <IconButton aria-label="Edit" onClick={() => console.log("edit")}>
            <EditIcon />
          </IconButton>
          <IconButton edge="end" aria-label="delete" onClick={() => deleteExpenseById(expenseName)}>
            <CloseIcon />
          </IconButton>
        </>
      }
    >
      <ListItemAvatar>
        <Avatar style={{ background: "rgb(239 102 102)" }}>
          <EuroIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary={expenseName} secondary={Number(amount).toFixed(2)} />
    </ListItem>
  )

}