import { getFromStorage } from "utils/StorageUtils"

export function getTotalExpensesAmount(amounts) {
  
  return amounts.reduce((total, { amount }) => total + Number(amount), 0)

}