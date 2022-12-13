import * as React from 'react';
import {View} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {Colors} from '../../utils/Colors';
export default function ProfileSk({Loading}) {
  if (Loading) {
    return null;
  }
  return (
    <SkeletonPlaceholder highlightColor={Colors.lightgray} speed={1000}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View style={{width: 60, height: 60, borderRadius: 50}} />
        <View style={{marginLeft: 20}}>
          <View style={{width: 120, height: 20, borderRadius: 4}} />
          <View
            style={{marginTop: 6, width: 80, height: 20, borderRadius: 4}}
          />
        </View>
      </View>
    </SkeletonPlaceholder>
  );
}
