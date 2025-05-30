import React from "react";

function ExpenseList({ expenses, onDeleteExpense, onEditExpense }) {
  return (
    <div>
      <h2 className="mb-3">Expense List</h2>
      <ul className="list-group">
        {expenses.map((expense, index) => (
          <li
            key={index}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <span>
              {expense.name}: ${expense.amount}
            </span>
            <div>
              <button
                className="btn btn-warning btn-sm me-2"
                onClick={() => onEditExpense(index)}
              >
                <i className="fas fa-edit"></i> Edit
              </button>
              <button
                className="btn btn-danger btn-sm"
                onClick={() => onDeleteExpense(index)}
              >
                <i className="fas fa-trash"></i> Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ExpenseList;
