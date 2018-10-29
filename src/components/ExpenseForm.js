import React from 'react';
import  moment  from "moment";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

export default class ExpenseForm extends React.Component {
    
    constructor (props) {
        super();
        this.state = {
            description: props.expense ? props.expense.description : '',
            note: props.expense ? props.expense.note : '',
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            amount: props.expense ? (props.expense.amount/100).toString() : '',
            error: false
        }
        this.onDescriptionChange = this.onDescriptionChange.bind(this);
        this.onNoteChange = this.onNoteChange.bind(this);
        this.onAmountChange = this.onAmountChange.bind(this);
        this.onDateChange = this.onDateChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onDescriptionChange(e) {
        const value = e.target.value
        this.setState(() => {
            return {
                description: value
            }
        })
    }

    onNoteChange(e) {
        const value = e.target.value
        this.setState(() => {
            return {
                note: value
            }
        })
    }

    onAmountChange(e) {
        const amount = e.target.value;
        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => {
                return {
                    amount: amount
                }
            })
        }
    }

    onDateChange(createdAt) {
        if(createdAt) {
            this.setState(() => ({createdAt}));
        }
    }

    onSubmit(e) {
        e.preventDefault();
        if(!this.state.description || !this.state.amount) {
            this.setState(() => ({error: true}))
        } else {
            this.setState(() => ({error: false}))
            this.props.onSubmit({
                description: this.state.description,
                note: this.state.note,
                createdAt: this.state.createdAt.valueOf(),
                amount: parseFloat(this.state.amount,10)*100,
            });
        }
    }

    render () {
        return (
            <div>
                {this.state.error && <p>Please enter description and amount</p>}
                <form onSubmit={this.onSubmit}>
                    <input 
                        type="text"
                        placeholder="Description"
                        value={this.state.description}
                        onChange={this.onDescriptionChange}
                    />
                    <input 
                        type="text"
                        value={this.state.amount}
                        onChange={this.onAmountChange}
                    />
                    <DatePicker 
                        selected={this.state.createdAt}
                        onChange={this.onDateChange}
                    />
                    <textarea
                        placeholder="Add a note for the expense" 
                        value = {this.state.note}
                        onChange={this.onNoteChange}
                    >
                    </textarea>
                    <button>Add a new expense</button>
                </form>
            </div>
        );
    }
}