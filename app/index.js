import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Provider } from 'react-redux';
import Navigator from './config/routes'; 

EStyleSheet.build({
    $primaryBlue: 'Blue',
})
export default () => (
    <Provider store={store}>
        <AlertProvider>
            <Navigator onNavigationStateChange={null} />
        </AlertProvider>
    </Provider>
    
    );