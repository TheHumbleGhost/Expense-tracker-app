import React from 'react';
import { connect } from "react-redux";
import { Link } from "react-router-dom";
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
        <div className="page-header">
            <div className="content-container">
                <h1 className="page-header__title">Viewing <span>{props.expenses.length}</span> expenses totaling <span>{result()}</span> </h1>
                <div className='page-header__actions'>
                    <Link to='/create' className="button">Add Expense</Link>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps =  (state) => {
    return {
        expenses: selectExpenses(state.expenses,state.filters)
    }
}

export default connect(mapStateToProps)(ExpensesTotal);