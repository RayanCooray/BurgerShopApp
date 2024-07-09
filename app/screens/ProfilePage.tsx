import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ProfilePage() {
  return (
    <View style={styles.container}>
      <View style={styles.square}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  square: {
    width: 500,
    height: 200,
    bottom: 300,
    backgroundColor: '#FFAF32',
  },
});
