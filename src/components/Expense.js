import React from 'react';
import { Link } from "react-router-dom";

const Expense = (props) => {
    return (
        <div>
            <Link to={`/edit/${props.expense.id}`}>
                <h3>{props.expense.description}</h3>
            </Link>
            <p>Amount: {props.expense.amount} - Created At: {props.expense.createdAt}</p>
        </div>
    );
}

export default Expense;