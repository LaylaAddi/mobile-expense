import uuidV1 from'uuid/v1';
import { Expense } from './expense.model';


export class ExpenseService { 



  categories =  ["Food", "Fuel", "Maintenance", "Other"];

  constructor() { }


  addExpense(expense: Expense): Promise<void> {
    expense.id = uuidV1();
    return Promise.resolve(); //todo
  }

  getExpense(expenseId: string): Promise<Expense> {
    return Promise.resolve(null); //todo
  }

  getExpenses(): Promise<Expense[]> {
    console.log("Go Fuck Yourself");
    return Promise.resolve([]); //todo
  }
 
  updateExpense(expense: Expense): Promise<void> {
    return Promise.resolve(); //todo
  }

  removeExpense(expenseId: string): Promise<void> {
     return Promise.resolve(); //todo
  }

}