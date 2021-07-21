import React, {FC} from 'react';
import {View, StyleSheet, Text} from 'react-native';

const HomeScreen: FC = () => {
  return (
    <>
      <View style={styles.container}>
        <Text>hello</Text>
      </View>
    </>
  );
};

export default HomeScreen;
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'orange',
    flex: 1,
  },
});
