import React from 'react';
import { Provider } from 'react-redux';

import Router from './app/config/routes';
import store from './app/config/store';

export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Router />
            </Provider>
        )
    }
}