import { createStackNavigator } from '@react-navigation/stack';

import MainScreen,{screenOptions as MainScreenOptions} from '../screen/MainScreen';

import DashboardScreen,{screenOptions as DashboardScreenOptions} from '../screen/Dashboard';

import DisccusionScreen,{screenOptions as DisccusionScreenOptions} from '../screen/Disccusion';//

import ShowCommentsScreen,{screenOptions as ShowCommentsScreenOptions} from '../screen/ShowComments';

import NewPostScreen,{screenOptions as NewPostScreenOptions} from '../screen/NewPost';

const Appcontainer = createStackNavigator();

export const AppStack =()=>{
    return(
        <Appcontainer.Navigator>
            <Appcontainer.Screen
            name='home'
            component={MainScreen}
            options={MainScreenOptions}
            />

            <Appcontainer.Screen
            name='dashboard'
            component={DashboardScreen}
            options={DashboardScreenOptions} 
            />

            <Appcontainer.Screen
            name='disccusion'
            component={DisccusionScreen}
            options={DisccusionScreenOptions} 
            />

            <Appcontainer.Screen
            name='showcomments'
            component={ShowCommentsScreen}
            options={ShowCommentsScreenOptions} 
            />

            <Appcontainer.Screen
            name='newpost'
            component={NewPostScreen}
            options={NewPostScreenOptions} 
            />
            

        </Appcontainer.Navigator>
    )
}