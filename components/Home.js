import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

export default function Home({ navigation }) {
  return (
  <View style={styles.container}>
      <Button
        title="Prova"
        onPress={() => navigation.navigate('Matematica')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f5',
    padding: 20,
  },
});

