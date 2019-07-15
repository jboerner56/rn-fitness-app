import { StatusBar } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Home from '../screens/Home';
import Nutrition from '../screens/Nutrition';
import Workout from '../screens/Workout';

const HomeStack = createStackNavigator({
    Home: {
        screen: Home, 
    },
    Nutrition: {
        screen: Nutrition,
    },
    Workout: {
        screen: Workout,
    },
});
export default createStackNavigator({
    Home: {
        screen: HomeStack,
    },


});