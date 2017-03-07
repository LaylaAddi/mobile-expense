import uuidV1 from'uuid/v1';
import "rxjs/add/operator/toPromise";
import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Expense } from './expense.model';

@Injectable()
export class ExpenseService { 



  categories =  ["Food", "Fuel", "Maintenance", "Other"];

  constructor(private http: Http) { }


  addExpense(expense: Expense): Promise<void> {
    expense.id = uuidV1();
    return Promise.resolve(); //todo
  }

  getExpense(expenseId: string): Promise<Expense> {
    return Promise.resolve(null); //todo
  }

  getExpenses(): Promise<Expense[]> {
    // console.log("Go Fuck Yourself");
    return this.http.get('https://api-land-chesnowitz.c9users.io/expenses/')
    .toPromise()
    .then(response => response.json());
  }
 
  updateExpense(expense: Expense): Promise<void> {
    return Promise.resolve(); //todo
  }

  removeExpense(expenseId: string): Promise<void> {
     return Promise.resolve(); //todo
  }

}