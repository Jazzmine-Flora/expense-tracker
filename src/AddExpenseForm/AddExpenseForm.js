import React, { useState, useEffect } from "react";

import "./AddExpenseForm.css";

function AddExpenseForm({ onAddExpense, onUpdateExpense, editingExpense }) {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [touched, setTouched] = useState({ name: false, amount: false });

  useEffect(() => {
    if (editingExpense) {
      setName(editingExpense.name);
      setAmount(String(editingExpense.amount));
    } else {
      setName("");
      setAmount("");
      setTouched({ name: false, amount: false });
    }
  }, [editingExpense]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTouched({ name: true, amount: true });
    const trimmedName = name.trim();
    const numAmount = parseFloat(amount);
    if (!trimmedName || Number.isNaN(numAmount) || numAmount < 0) return;
    if (editingExpense) {
      onUpdateExpense({ name: trimmedName, amount: numAmount });
    } else {
      onAddExpense({ name: trimmedName, amount: numAmount });
    }
    setName("");
    setAmount("");
    setTouched({ name: false, amount: false });
  };

  const showNameError = touched.name && !name.trim();
  const showAmountError = touched.amount && (amount === "" || parseFloat(amount) < 0 || Number.isNaN(parseFloat(amount)));

  return (
    <form onSubmit={handleSubmit} className="form" noValidate aria-label="Add or edit expense">
      <h2 className="form__title">
        {editingExpense ? "Edit expense" : "Add expense"}
      </h2>
      <div className="form__row">
        <div className="form__group">
          <label htmlFor="expense-name" className="form__label">
            Name
          </label>
          <input
            id="expense-name"
            type="text"
            className={`form__input ${showNameError ? "form__input--error" : ""}`}
            value={name}
            onChange={(e) => setName(e.target.value)}
            onBlur={() => setTouched((t) => ({ ...t, name: true }))}
            placeholder="e.g. Groceries"
            autoComplete="off"
            aria-invalid={showNameError}
            aria-describedby={showNameError ? "name-error" : undefined}
          />
          {showNameError && (
            <span id="name-error" className="form__error" role="alert">
              Name is required
            </span>
          )}
        </div>
        <div className="form__group">
          <label htmlFor="expense-amount" className="form__label">
            Amount ($)
          </label>
          <input
            id="expense-amount"
            type="number"
            min="0"
            step="0.01"
            className={`form__input ${showAmountError ? "form__input--error" : ""}`}
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            onBlur={() => setTouched((t) => ({ ...t, amount: true }))}
            placeholder="0.00"
            inputMode="decimal"
            aria-invalid={showAmountError}
            aria-describedby={showAmountError ? "amount-error" : undefined}
          />
          {showAmountError && (
            <span id="amount-error" className="form__error" role="alert">
              Enter a valid amount ≥ 0
            </span>
          )}
        </div>
      </div>
      <button
        type="submit"
        className="form__submit"
        disabled={!name.trim() || amount === "" || parseFloat(amount) < 0}
      >
        <i className={editingExpense ? "fas fa-check" : "fas fa-plus"} aria-hidden="true" />
        {editingExpense ? "Update expense" : "Add expense"}
      </button>
    </form>
  );
}

export default AddExpenseForm;
