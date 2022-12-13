import * as React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import Styles from './style';

export const TopProfileIcon = ({
  name,
  login,
  followers,
  navigation,
  following,
}) => {
  return (
    <View style={Styles.ButtonContainer}>
      <TouchableOpacity
        style={Styles.Button}
        onPress={() => {
          navigation.push('HomePage', {User: login, Type: 'followers'});
        }}>
        <Text style={Styles.TextColor}>
          Followers: <Text style={Styles.Count}>{followers}</Text>
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{...Styles.Button, ...{marginLeft: 10}}}
        onPress={() => {
          navigation.push('HomePage', {User: login, Type: 'following'});
        }}>
        <Text style={Styles.TextColor}>
          Following: <Text style={Styles.Count}>{following}</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};
