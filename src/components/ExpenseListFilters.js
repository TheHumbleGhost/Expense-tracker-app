import React from 'react'
import { connect } from 'react-redux'
import { setTextFilter } from "../actions/filters";
import { sortByDate } from "../actions/filters";
import { sortByAmount,setStartDate,setEndDate } from "../actions/filters";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

class ExpenseListFilters extends React.Component {
    constructor(props) {
        super(props);
        this.handleChangeStart = this.handleChangeStart.bind(this);
        this.handleChangeEnd = this.handleChangeEnd.bind(this);
    }
    handleChangeStart (selectedDate) {
        this.props.dispatch(setStartDate(selectedDate));
    }
    handleChangeEnd (selectedDate) {
        this.props.dispatch(setEndDate(selectedDate));
    }
    render () {
        return (
            <div className="content-container">
                <div className="input-group">
                    <div className="input-group__item">
                        <input 
                            className="text-input" 
                            type="text" 
                            value={this.props.filters.text} 
                            onChange = {(e) => {
                            this.props.dispatch(setTextFilter(e.target.value))
                            }}
                            placeholder="Search Expenses" 
                        />
                    </div>
                    <div className="input-group__item">
                        <select  className="select" value={this.props.filters.sortBy} onChange={(e) => {
                            if(e.target.value == "date") {
                                this.props.dispatch(sortByDate())
                            } else {
                                this.props.dispatch(sortByAmount())
                            }
                        }}>
                            <option value="date">Date</option>
                            <option value="amount">Amount</option>
                        </select>
                    </div>
                    <div className="input-group__item">
                        <DatePicker
                            className="text-input"
                            selected={this.props.filters.startDate}
                            selectsStart
                            startDate={this.props.filters.startDate}
                            endDate={this.props.filters.endDate}
                            onChange={this.handleChangeStart}
                        />
                    </div>
                    <div className="input-group__item">
                        <DatePicker
                            className="text-input"
                            selected={this.props.filters.endDate}
                            selectsEnd
                            startDate={this.props.filters.startDate}
                            endDate={this.props.filters.endDate}
                            onChange={this.handleChangeEnd}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
}

export default connect(mapStateToProps)(ExpenseListFilters);