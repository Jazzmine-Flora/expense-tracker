import React from "react";

import "./ExpenseList.css";

function ExpenseList({ expenses, onDeleteExpense, onEditExpense }) {
  const isEmpty = !expenses || expenses.length === 0;

  return (
    <div>
      <div className="list__header">
        <h2 className="list__title">Expenses</h2>
        {!isEmpty && (
          <span className="list__count" aria-hidden="true">
            {expenses.length} {expenses.length === 1 ? "item" : "items"}
          </span>
        )}
      </div>

      {isEmpty ? (
        <div className="list__empty" role="status">
          <i className="fas fa-wallet list__empty-icon" aria-hidden="true" />
          <p className="list__empty-title">No expenses yet</p>
          <p className="list__empty-desc">
            Add your first expense above to start tracking your spending.
          </p>
        </div>
      ) : (
        <ul className="list" aria-label="Expense list">
          {expenses.map((expense, index) => (
            <li key={`${expense.name}-${index}`} className="list__item">
              <div className="list__item-content">
                <p className="list__item-name">{expense.name}</p>
                <p className="list__item-amount">
                  ${Number(expense.amount).toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </p>
              </div>
              <div className="list__item-actions">
                <button
                  type="button"
                  className="list__btn list__btn--edit"
                  onClick={() => onEditExpense(index)}
                  aria-label={`Edit ${expense.name}`}
                >
                  <i className="fas fa-edit" aria-hidden="true" />
                  Edit
                </button>
                <button
                  type="button"
                  className="list__btn list__btn--delete"
                  onClick={() => onDeleteExpense(index)}
                  aria-label={`Delete ${expense.name}`}
                >
                  <i className="fas fa-trash" aria-hidden="true" />
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ExpenseList;
