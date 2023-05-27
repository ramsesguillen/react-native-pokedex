import { ActivityIndicator, StyleSheet, View } from 'react-native';

import React from 'react'

export const Loading = () => {
  return (
    <View style={baseStyles.activityContainer}>
      <ActivityIndicator
        size={ 50 }
        color='grey'
      />
    </View>
  )
}

const baseStyles = StyleSheet.create({
  activityContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
