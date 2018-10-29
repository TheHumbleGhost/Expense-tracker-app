import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => {
    return (
        <div>
            <h1>Info</h1>
            <p>The info is: {props.info}</p>
        </div>
    );
}

const withAdminInfo = (WrappedComponent) => {
    return (props) => {
        return (
            <div>
                <p>This is a very sensitive info. Please don't share</p>
                <WrappedComponent info={props.info}/>
            </div>
        );
    }
}

const requireAuthencation = (WrappedComponent) => {
    return (props) => {
        return (
            <div>
                {props.isAuthenicated ? <WrappedComponent {...props} /> : <p>Please Login to view the info</p>}
            </div>
        );
    }
}

const AdminInfo = withAdminInfo(Info);
const RequireAuthencation = requireAuthencation(Info);
ReactDOM.render(<RequireAuthencation isAuthenicated={true} info="These are the details"/>, document.getElementById('app'));