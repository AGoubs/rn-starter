import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
  const yourname = 'Arnaud';
  return (
    <View>
      <Text style={styles.title}>Getting started with react native</Text>
      <Text style={styles.text}>My name is {yourname}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 45,
  },
  text: {
    fontSize: 20,
  },
});

export default ComponentsScreen;
