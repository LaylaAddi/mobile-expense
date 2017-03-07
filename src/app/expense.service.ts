import Dexie from'dexie';
import uuidV1 from'uuid/v1';
import { Expense } from './expense.model';


export class ExpenseService extends Dexie{ 


	expenses: Dexie.Table<Expense, string>;
  categories =  ["Food", "Fuel", "Maintenance", "Other"];

  constructor() {
  	super("expense_tracker");
  	this.version(1).stores({
  		expenses: 'id, date'
  	});
  }
  addExpense(expense: Expense) {
    expense.id = uuidV1();
    this.expenses.add(expense)
  }

  getExpense(expenseId: string): Dexie.Promise<Expense> {
   
    return this.expenses.get(expenseId);
  }

  getExpenses(): Dexie.Promise<Expense[]> {
    console.log("Go Fuck Yourself");
    return this.expenses.toArray();
     
  }


  updateExpense(expense: Expense) {
    this.expenses.update(expense.id, expense);
  }

  removeExpense(expenseId: string) {
     this.expenses.delete(expenseId);
  }

}