import {useLinkTo} from '@react-navigation/native';
import React from 'react';
import {Button, Linking, StyleSheet, Text, View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const styles = StyleSheet.create({
  textStyle: {fontSize: 50, fontWeight: 'bold', color: 'red'},
  m20: {marginTop: 20},
});

const Textx = ({text}: {text: string}) => (
  <Text style={styles.textStyle}>{text}</Text>
);

function Screen1(): React.JSX.Element {
  const linkTo = useLinkTo();
  return (
    <View>
      <Textx text="Screen 1" />
      <Button
        title="go to screen 2"
        onPress={() => {
          linkTo('/2');
        }}
      />
      <View style={styles.m20} />
      <Button
        title="go to screen 4 in screen 3"
        onPress={() => {
          linkTo('/3/4');
        }}
      />

      <View style={styles.m20} />
      <Button
        title="here goes to 2"
        onPress={() => {
          Linking.openURL('mychat:///2');
        }}
      />
    </View>
  );
}

function Screen2(): React.JSX.Element {
  return (
    <View>
      <Textx text="Screen 2" />
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
      <Textx text="Screen 4" />
    </View>
  );
}

function Screen5(): React.JSX.Element {
  return (
    <View>
      <Textx text="Screen 5" />
    </View>
  );
}

function NotFound(): React.JSX.Element {
  return (
    <View>
      <Textx text="Not Found" />
    </View>
  );
}

export {Screen1, Screen2, Screen3, NotFound};
