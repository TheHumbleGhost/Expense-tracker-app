import React from "react";
import { connect } from 'react-redux';
import Expense from './Expense'
import selectExpenses from '../selectors/expenses'

const ExpenseList = (props) => {
    return (
        <div>
        {props.expenses.length == 0 ? 
            <p>No expenses</p> :
            props.expenses.map((expense) => {
                return <Expense key={expense.id} expense={expense} />
            })
        }
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses,state.filters)
    }
}

export default connect(mapStateToProps)(ExpenseList);