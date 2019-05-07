import {createStackNavigator, createAppContainer} from 'react-navigation';
import Home from '../screens/Home';
import Films from '../screens/Films';
import FilmsDetails from '../screens/FilmsDetails';
import Character from '../screens/Character';
import CharacterDetails from '../screens/CharacterDetails';

const AppNavigator = createStackNavigator({
    Home,
    Films,
    FilmsDetails,
    Character,
    CharacterDetails,
},{initialRouteName:'Home',
defaultNavigationOptions:{
    header:null,
}});

export default createAppContainer(AppNavigator);