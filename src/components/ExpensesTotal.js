import React from 'react';
import { connect } from "react-redux";
import numeral from "numeral";
import selectExpenses from "../selectors/expenses";

const ExpensesTotal =  (props) => {
    const result = () => {
        if(props.expenses.length !== 0) {
            // props.expenses.reduce((total = 0, expense) => {
            //     console.log(total + expense.amount);
            //     return total + expense.amount;
            // })
            let total = 0;
            for( let i = 0;i<props.expenses.length;i++) {
                total = total + props.expenses[i].amount;
            }
            return numeral(total/100).format('$0,0.00');
        } else {
            return '$ 0';
        }
    };
    return (
        <div>
            <p>Viewing {props.expenses.length} expenses totaling  {result()} </p>
        </div>
    );
}

const mapStateToProps =  (state) => {
    return {
        expenses: selectExpenses(state.expenses,state.filters)
    }
}

export default connect(mapStateToProps)(ExpensesTotal);