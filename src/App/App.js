import React, { useState } from "react";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "@fortawesome/fontawesome-free/css/all.min.css"; // Import Font Awesome CSS
import logo from "../assets/bird.png"; // Import bird image
import AddExpenseForm from "../AddExpenseForm/AddExpenseForm"; // Adjust path for AddExpenseForm
import ExpenseList from "../ExpenseList/ExpenseList"; // Adjust path for ExpenseList

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

  const [editingIndex, setEditingIndex] = useState(null); // Track which expense is being edited

  const editExpense = (index) => {
    setEditingIndex(index); // Set the index of the expense to be edited
  };

  const updateExpense = (updatedExpense) => {
    const updatedExpenses = expenses.map((expense, index) =>
      index === editingIndex ? updatedExpense : expense
    );
    setExpenses(updatedExpenses);
    setEditingIndex(null); // Reset editing index after updating
  };

  const totalExpenses = expenses.reduce(
    (total, expense) => total + expense.amount,
    0
  );

  return (
    <div className="App">
      <div className="logo-container text-center mb-4">
        <img src={logo} alt="Cute Logo" className="logo" />
      </div>
      <h1>Expense Tracker</h1>
      <AddExpenseForm
        onAddExpense={addExpense}
        onUpdateExpense={updateExpense}
        editingExpense={editingIndex !== null ? expenses[editingIndex] : null}
      />
      <ExpenseList
        expenses={expenses}
        onDeleteExpense={deleteExpense}
        onEditExpense={editExpense}
      />
      <h3>Total Expenses: ${totalExpenses}</h3>
    </div>
  );
}

export default App;
