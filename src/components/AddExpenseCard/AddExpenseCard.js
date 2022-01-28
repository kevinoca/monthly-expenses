import React from "react"
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import { ExpensesContext } from "context/ExpensesContext";
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

export default function AddExpenseCard() {

  const emptyValuesObject = {
    amount: '',
    expenseName: '',
  }

  const { addExpense } = React.useContext(ExpensesContext)

  const [values, setValues] = React.useState(emptyValuesObject);

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const resetForm = () => setValues(emptyValuesObject)

  const sendData = () => addExpense(values)

  const onSubmit = (submitEvent) => {

    submitEvent.preventDefault()

    sendData()

    resetForm()

  }

  return (

    <form onSubmit={onSubmit}>

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

        <FormControl fullWidth sx={{ m: 1 }}>
          <TextField
            label="Nombre del gasto"
            id="outlined-expenseName-field"
            name="expenseName"
            value={values.expenseName}
            onChange={handleChange('expenseName')}
            required
            fullWidth
          />
        </FormControl>

        <FormControl fullWidth sx={{ m: 1 }}>
          <InputLabel required htmlFor="outlined-adornment-amount">Monto</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            value={values.amount}
            onChange={handleChange('amount')}
            startAdornment={<InputAdornment position="start">€</InputAdornment>}
            required
            label="Amount"
            fullWidth
          />
        </FormControl>

        <div style={{ textAlign: "right" }}>
          <Button variant="contained" type="submit">Añadir</Button>
        </div>

      </Box>

    </form>

  );

}