import React, { useState } from "react";

import "./App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import logo from "../assets/bird.png";
import AddExpenseForm from "../AddExpenseForm/AddExpenseForm";
import ExpenseList from "../ExpenseList/ExpenseList";

function App() {
  const [expenses, setExpenses] = useState([
    { name: "Groceries", amount: 50 },
    { name: "Rent", amount: 500 },
    { name: "Utilities", amount: 100 },
  ]);

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  const deleteExpense = (index) => {
    setExpenses(expenses.filter((_, i) => i !== index));
  };

  const [editingIndex, setEditingIndex] = useState(null);

  const editExpense = (index) => {
    setEditingIndex(index);
  };

  const updateExpense = (updatedExpense) => {
    const updatedExpenses = expenses.map((expense, index) =>
      index === editingIndex ? updatedExpense : expense
    );
    setExpenses(updatedExpenses);
    setEditingIndex(null);
  };

  const totalExpenses = expenses.reduce(
    (total, expense) => total + expense.amount,
    0
  );

  return (
    <div className="App">
      <div className="App__container">
        <header className="App__header">
          <div className="App__logo-wrap">
            <img
              src={logo}
              alt=""
              className="App__logo"
              width={48}
              height={48}
              decoding="async"
            />
          </div>
          <h1 className="App__title">Expense Tracker</h1>
          <p className="App__subtitle">Track spending and stay on budget</p>
        </header>

        <main className="App__card">
          <AddExpenseForm
            onAddExpense={addExpense}
            onUpdateExpense={updateExpense}
            editingExpense={editingIndex !== null ? expenses[editingIndex] : null}
          />
        </main>

        <section className="App__card" aria-label="Expense list">
          <ExpenseList
            expenses={expenses}
            onDeleteExpense={deleteExpense}
            onEditExpense={editExpense}
          />
        </section>

        <div className="App__total-wrap" aria-live="polite">
          <p className="App__total-label">Total expenses</p>
          <p className="App__total-value">
            ${Number(totalExpenses).toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
