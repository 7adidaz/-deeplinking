import React from 'react';
import {Screen1, Screen2, Screen3} from './Screens/Screens';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

//TODO: passing information.
function App(): React.JSX.Element {
  const linking = {
    prefixes: ['https://mychat.com', 'mychat://'],
    config: {
      screens: {
        1: '1',
        2: '2',
        3: {
          path: '3',
          screens: {
            4: '4',
            5: '5',
          },
        },
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
