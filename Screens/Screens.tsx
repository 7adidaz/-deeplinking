import {Link, useLinkTo} from '@react-navigation/native';
import React from 'react';
import {Button, Text, View} from 'react-native';

function Screen1(): React.JSX.Element {
  const linkTo = useLinkTo();
  return (
    <View>
      <Text style={{fontSize: 50, fontWeight: 'bold', color: 'red'}}>
        Screen 1
      </Text>
      <Button
        title="go to screen 3"
        onPress={() => {
          linkTo('/3');
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
    <View>
      <Text style={{fontSize: 50, fontWeight: 'bold', color: 'red'}}>
        Screen 3
      </Text>
    </View>
  );
}

export {Screen1, Screen2, Screen3};
