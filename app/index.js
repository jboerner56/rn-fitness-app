import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
// import { Provider } from 'react-redux';
import Home from './screens/Home'; 

EStyleSheet.build({
    $primaryBlue: 'Blue',
})

export default () => <Home />;