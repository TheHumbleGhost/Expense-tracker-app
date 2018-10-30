import React from 'react';
import { Link } from "react-router-dom";
import moment from "moment";
import numeral from "numeral";

const Expense = (props) => {
    return (
        <div>
            <Link to={`/edit/${props.expense.id}`}>
                <h3>{props.expense.description}</h3>
            </Link>
            <p>Amount: {numeral(props.expense.amount/100).format('$0,0.00')} - Created At: {moment(props.expense.createdAt).format('Do MMM YYYY')} </p>
        </div>
    );
}

export default Expense;