import {useLinkTo} from '@react-navigation/native';
import React from 'react';
import {Button, Text, View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function Screen1(): React.JSX.Element {
  const linkTo = useLinkTo();
  return (
    <View>
      <Text style={{fontSize: 50, fontWeight: 'bold', color: 'red'}}>
        Screen 1
      </Text>
      <Button
        title="go to screen 2"
        onPress={() => {
          linkTo('/2');
        }}
      />
      <View style={{marginTop: 20}} />
      <Button
        title="go to screen 5 in screen 3"
        onPress={() => {
          linkTo('/3/5');
        }}
      />
    </View>
  );
}

function Screen2(): React.JSX.Element {
  return (
    <View>
      <Text style={{fontSize: 50, fontWeight: 'bold', color: 'red'}}>
        Screen 2
      </Text>
    </View>
  );
}

function Screen3(): React.JSX.Element {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="4" component={Screen4} />
      <Stack.Screen name="5" component={Screen5} />
    </Stack.Navigator>
  );
}

function Screen4(): React.JSX.Element {
  return (
    <View>
      <Text style={{fontSize: 50, fontWeight: 'bold', color: 'red'}}>
        Screen 4
      </Text>
    </View>
  );
}

function Screen5(): React.JSX.Element {
  return (
    <View>
      <Text style={{fontSize: 50, fontWeight: 'bold', color: 'red'}}>
        Screen 5
      </Text>
    </View>
  );
}

export {Screen1, Screen2, Screen3};
