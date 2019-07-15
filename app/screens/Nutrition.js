import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, StatusBar, Container } from "react-native";
class Nutrition extends React.Component {
    static PropTypes = {

    }
    render() {
        return (
            <Container>
                <StatusBar translucent={false} barStyle="default" />
                <Text>Nutrition Screen</Text>
            </Container>
        );
    }
}

export default Nutrition;