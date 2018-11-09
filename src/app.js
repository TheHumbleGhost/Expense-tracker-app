import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, {history} from './routers/AppRouter';
import configureStore from './store/configureStore';
import { startSetExpense } from "./actions/expenses";
import { Login, Logout } from "./actions/auth";
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import { firebase } from './firebase/firebase';
import LoadingPage from "./components/LoadingPage";

const store = configureStore();
const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(<LoadingPage />, document.getElementById('app'));

let hasRendered = false;
const renderApp = () => {
    if(!hasRendered) {
        ReactDOM.render(jsx, document.getElementById('app'));
        hasRendered = true;        
    }
}

firebase.auth().onAuthStateChanged((user) => {
    if(user) {
        store.dispatch(Login(user.uid));
        store.dispatch(startSetExpense()).then(() => {
            renderApp();
            if(history.location.pathname  === '/') {
                history.push('/dashboard');
            }
        })
    } else {
        store.dispatch(Logout());
        renderApp();
        history.push('/');
    }
})