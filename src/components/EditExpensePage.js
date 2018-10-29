import React from 'react';
import { connect } from "react-redux";
import ExpenseForm from './ExpenseForm';
import { editExpense,removeExpense } from "../actions/expenses";

const EditExpensePage = (props) => {
  return (
    <div>
      <ExpenseForm
        expense = {props.expense}
        onSubmit={(updatedExpense) => {
          props.dispatch(editExpense(props.match.params.id,updatedExpense))  
          props.history.push('/');        
        }}
      />
      <button onClick={() => {
          props.dispatch(removeExpense(props.expense))
          props.history.push('/');
        }}
      >
      Remove
      </button>
    </div>
  );
};

const mapStateToProps = (state,props) => {
  return {
    expense: state.expenses.find((expense) => {
      return expense.id === props.match.params.id
    })
  }
}

export default  connect(mapStateToProps)(EditExpensePage);