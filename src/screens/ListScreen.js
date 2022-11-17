import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
  const friends = [
    { name: 'Ami #1', age: 20 },
    { name: 'Ami #2', age: 21 },
    { name: 'Ami #3', age: 22 },
    { name: 'Ami #4', age: 23 },
    { name: 'Ami #5', age: 24 },
    { name: 'Ami #6', age: 25 },
    { name: 'Ami #7', age: 26 },
  ];

  return (
    <FlatList
      keyExtractor={friend => friend.age}
      data={friends}
      renderItem={({ item }) => {
        return (
          <Text style={styles.textStyle}>
            {item.name} - Age {item.age}
          </Text>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50,
    marginHorizontal: 50,
  },
});

export default ListScreen;
