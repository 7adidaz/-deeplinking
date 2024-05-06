import React from 'react';
import {NotFound, Screen1, Screen2, Screen3} from './Screens/Screens';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

//TODO: passing information.
//TODO: make the app open links of "http://myChatty.com/xxx"

function App(): React.JSX.Element {
  const linking = {
    prefixes: ['http://www.myChatyyy.com', 'mychat://'],
    config: {
      screens: {
        /*
         * SCREEN NAME : PATH
         * */
        1: '1',
        2: '2',
        3: {
          path: '3',
          screens: {
            4: '4',
            5: '5',
          },
        },
        NotFound: '*',
      },
    },
  };

  return (
    <NavigationContainer linking={linking}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="1" component={Screen1} />
        <Stack.Screen name="2" component={Screen2} />
        <Stack.Screen name="3" component={Screen3} />
        <Stack.Screen name="NotFound" component={NotFound} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
