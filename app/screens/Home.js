import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, StatusBar } from "react-native";
import { Container } from '../components/Container';

export default () => (
    <Container>
        <StatusBar translucent={false} barStyle="light-content" />
    </Container>
)
