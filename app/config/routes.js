
import { StackNavigator } from 'react-navigation';
import Home from '../screens/Home';
import Nutrition from '../screens/Nutrition';
import Workout from '../screens/Workout';

const HomeStack = StackNavigator({
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
export default StackNavigator({
    Home: {
        screen: HomeStack,
    },


});