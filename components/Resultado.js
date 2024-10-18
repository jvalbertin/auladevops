import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

export default function Resultado({ route, navigation }) {
  const { Quimica, Matematica, Biologia, Portugues } = route.params;

  const totalQuestions = 8 * 4;
  const totalCorrect = Quimica + Matematica + Biologia + Portugues;

  const totalPercentage = ((totalCorrect / totalQuestions) * 100).toFixed(2);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Resultados</Text>

      <Text style={styles.resultText}>Química: {Quimica} acertos</Text>
      <Text style={styles.resultText}>Matemática: {Matematica} acertos</Text>
      <Text style={styles.resultText}>Biologia: {Biologia} acertos</Text>
      <Text style={styles.resultText}>Português: {Portugues} acertos</Text>

      <Text style={styles.totalText}>Total de acertos: {totalCorrect} de {totalQuestions}</Text>
      <Text style={styles.percentageText}>Porcentagem de acertos: {totalPercentage}%</Text>

      <Button title="Voltar" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ecf0f1',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  resultText: {
    fontSize: 18,
    marginVertical: 5,
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  percentageText: {
    fontSize: 18,
    color: 'green',
    marginVertical: 10,
  },
});
