import React, { useState } from 'react';
import { StyleSheet, View, Text, SafeAreaView, TextInput, Button, ScrollView } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { CheckBox } from 'react-native-elements';
import { Picker } from '@react-native-picker/picker';

export default function Portugues({ route, navigation }) {
   const { Matematica, Biologia } = route.params;
  const [resultado, setResultado] = useState(0);
  const [textAnswer1, setTextAnswer1] = useState('');
  const [textAnswer2, setTextAnswer2] = useState('');
  const [checkboxAnswer11, setCheckboxAnswer11] = useState(false);
  const [checkboxAnswer12, setCheckboxAnswer12] = useState(false);
  const [radioAnswer1, setRadioAnswer1] = useState('');
  const [radioAnswer2, setRadioAnswer2] = useState('');
  const [pickerAnswer1, setPickerAnswer1] = useState('');
  const [pickerAnswer2, setPickerAnswer2] = useState('');

  const handleNext = () => {
    let newResultado = 0;

    if (textAnswer1 && textAnswer1.toLowerCase() === 'adjetivo') {
      newResultado++;
    }

    if (textAnswer2 && textAnswer2.toLowerCase() === 'verbo') {
      newResultado++;
    }

    if (checkboxAnswer11) {
      newResultado++;
    }

    if (checkboxAnswer12) {
      newResultado++;
    }

    if (radioAnswer1 && radioAnswer1 === 'substantivo') {
      newResultado++;
    }

    if (radioAnswer2 && radioAnswer2 === 'artigo') {
      newResultado++;
    }

    if (pickerAnswer1 && pickerAnswer1 === 'singular') {
      newResultado++;
    }

    if (pickerAnswer2 && pickerAnswer2 === 'plural') {
      newResultado++;
    }

    setResultado(newResultado);

    navigation.navigate('Quimica', {
      Portugues: newResultado,
      Matematica,
      Biologia
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>Língua Portuguesa</Text>
        
        <Text style={styles.label}>1. Qual é a classe gramatical que caracteriza um substantivo?</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite sua resposta"
          value={textAnswer1}
          onChangeText={setTextAnswer1}
        />

        <Text style={styles.label}>2. Qual é a classe gramatical que indica uma ação?</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite sua resposta"
          value={textAnswer2}
          onChangeText={setTextAnswer2}
        />

        <Text style={styles.label}>3. Quais são exemplos de advérbios?</Text>
        <CheckBox
          title="Rapidamente"
          checked={checkboxAnswer11}
          onPress={() => setCheckboxAnswer11(!checkboxAnswer11)}
        />
        <CheckBox
          title="Casa"
          checked={checkboxAnswer12}
          onPress={() => setCheckboxAnswer12(!checkboxAnswer12)}
        />

        <Text style={styles.label}>4. Qual é a classe gramatical que indica um ser ou objeto?</Text>
        <RadioButton.Group onValueChange={setRadioAnswer1} value={radioAnswer1}>
          <View style={styles.radioContainer}>
            <Text>Substantivo</Text>
            <RadioButton value="substantivo" />
          </View>
          <View style={styles.radioContainer}>
            <Text>Adjetivo</Text>
            <RadioButton value="adjetivo" />
          </View>
        </RadioButton.Group>

        <Text style={styles.label}>5. Qual é a palavra que acompanha o substantivo?</Text>
        <RadioButton.Group onValueChange={setRadioAnswer2} value={radioAnswer2}>
          <View style={styles.radioContainer}>
            <Text>Artigo</Text>
            <RadioButton value="artigo" />
          </View>
          <View style={styles.radioContainer}>
            <Text>Preposição</Text>
            <RadioButton value="preposição" />
          </View>
        </RadioButton.Group>

        <Text style={styles.label}>6. Qual é o número gramatical de "meninos"?</Text>
        <Picker
          selectedValue={pickerAnswer1}
          style={styles.picker}
          onValueChange={(itemValue) => setPickerAnswer1(itemValue)}
        >
          <Picker.Item label="Selecione" value="" />
          <Picker.Item label="Singular" value="singular" />
          <Picker.Item label="Plural" value="plural" />
        </Picker>

        <Text style={styles.label}>7. Qual é o número gramatical de "menina"?</Text>
        <Picker
          selectedValue={pickerAnswer2}
          style={styles.picker}
          onValueChange={(itemValue) => setPickerAnswer2(itemValue)}
        >
          <Picker.Item label="Selecione" value="" />
          <Picker.Item label="Singular" value="singular" />
          <Picker.Item label="Plural" value="plural" />
        </Picker>

        <Button title="Avançar" onPress={handleNext} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  title: {
    textAlign: 'center',
    color: 'red',
    fontSize: 34,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  label: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  picker: {
    height: 50,
    width: '100%',
    marginBottom: 20,
  },
  radioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
});
