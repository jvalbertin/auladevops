import React, { useState } from 'react';
import { StyleSheet, View, Text, SafeAreaView, TextInput, Button, ScrollView } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { CheckBox } from 'react-native-elements';
import { Picker } from '@react-native-picker/picker';

export default function Quimica({ route, navigation }) {
  const { Matematica, Biologia, Portugues } = route.params;
  const [resultado, setResultado] = useState(0);
  const [textAnswer1, setTextAnswer1] = useState('');
  const [textAnswer2, setTextAnswer2] = useState('');
  const [checkboxAnswer11, setCheckboxAnswer11] = useState(false);
  const [checkboxAnswer12, setCheckboxAnswer12] = useState(false);
  const [radioAnswer1, setRadioAnswer1] = useState('');
  const [radioAnswer2, setRadioAnswer2] = useState('');
  const [pickerAnswer1, setPickerAnswer1] = useState('');
  const [pickerAnswer2, setPickerAnswer2] = useState('');
  const [pickerAnswer3, setPickerAnswer3] = useState('');
  const [pickerAnswer4, setPickerAnswer4] = useState('');

  const handleNext = () => {
    let newResultado = 0;

    if (textAnswer1 && textAnswer1.toLowerCase() === 'água') {
      newResultado++;
    }

    if (textAnswer2 && textAnswer2.toLowerCase() === 'h2o') {
      newResultado++;
    }

    if (checkboxAnswer11) {
      newResultado++;
    }

    if (checkboxAnswer12) {
      newResultado++;
    }

    if (radioAnswer1 && radioAnswer1 === 'ácido') {
      newResultado++;
    }

    if (radioAnswer2 && radioAnswer2 === 'base') {
      newResultado++;
    }

    if (pickerAnswer1 && pickerAnswer1 === 'síntese') {
      newResultado++;
    }

    if (pickerAnswer2 && pickerAnswer2 === 'combustão') {
      newResultado++;
    }

    if (pickerAnswer3 && pickerAnswer3 === 'endotérmica') {
      newResultado++;
    }

    if (pickerAnswer4 && pickerAnswer4 === 'exotérmica') {
      newResultado++;
    }

    setResultado(newResultado);

    navigation.navigate('Resultado', {
      Quimica: newResultado,
      Matematica,
      Biologia,
      Portugues
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>Química</Text>
        
        <Text style={styles.label}>1. Qual é a fórmula química da água?</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite sua resposta"
          value={textAnswer1}
          onChangeText={setTextAnswer1}
        />

        <Text style={styles.label}>2. Qual é a fórmula molecular da água?</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite sua resposta"
          value={textAnswer2}
          onChangeText={setTextAnswer2}
        />

        <Text style={styles.label}>3. O que ocorre na reação de neutralização?</Text>
        <CheckBox
          title="Produz água"
          checked={checkboxAnswer11}
          onPress={() => setCheckboxAnswer11(!checkboxAnswer11)}
        />
        <CheckBox
          title="Produz gás carbônico"
          checked={checkboxAnswer12}
          onPress={() => setCheckboxAnswer12(!checkboxAnswer12)}
        />

        <Text style={styles.label}>4. Qual é o composto que tem pH menor que 7?</Text>
        <RadioButton.Group onValueChange={setRadioAnswer1} value={radioAnswer1}>
          <View style={styles.radioContainer}>
            <Text>Ácido</Text>
            <RadioButton value="ácido" />
          </View>
          <View style={styles.radioContainer}>
            <Text>Base</Text>
            <RadioButton value="base" />
          </View>
        </RadioButton.Group>

        <Text style={styles.label}>5. Qual é o composto que tem pH maior que 7?</Text>
        <RadioButton.Group onValueChange={setRadioAnswer2} value={radioAnswer2}>
          <View style={styles.radioContainer}>
            <Text>Base</Text>
            <RadioButton value="base" />
          </View>
          <View style={styles.radioContainer}>
            <Text>Ácido</Text>
            <RadioButton value="ácido" />
          </View>
        </RadioButton.Group>

        <Text style={styles.label}>6. Qual é o processo de formação de um novo composto a partir de reações químicas?</Text>
        <Picker
          selectedValue={pickerAnswer1}
          style={styles.picker}
          onValueChange={(itemValue) => setPickerAnswer1(itemValue)}
        >
          <Picker.Item label="Selecione" value="" />
          <Picker.Item label="Decomposição" value="decomposição" />
          <Picker.Item label="Síntese" value="síntese" />
        </Picker>

        <Text style={styles.label}>7. Que tipo de reação ocorre quando uma substância reage com o oxigênio?</Text>
        <Picker
          selectedValue={pickerAnswer2}
          style={styles.picker}
          onValueChange={(itemValue) => setPickerAnswer2(itemValue)}
        >
          <Picker.Item label="Selecione" value="" />
          <Picker.Item label="Combustão" value="combustão" />
          <Picker.Item label="Neutralização" value="neutralização" />
        </Picker>

        <Text style={styles.label}>8. Qual é o tipo de reação que absorve calor do ambiente?</Text>
        <Picker
          selectedValue={pickerAnswer3}
          style={styles.picker}
          onValueChange={(itemValue) => setPickerAnswer3(itemValue)}
        >
          <Picker.Item label="Selecione" value="" />
          <Picker.Item label="Exotérmica" value="exotérmica" />
          <Picker.Item label="Endotérmica" value="endotérmica" />
        </Picker>

        <Text style={styles.label}>9. Qual é o tipo de reação que libera calor para o ambiente?</Text>
        <Picker
          selectedValue={pickerAnswer4}
          style={styles.picker}
          onValueChange={(itemValue) => setPickerAnswer4(itemValue)}
        >
          <Picker.Item label="Selecione" value="" />
          <Picker.Item label="Exotérmica" value="exotérmica" />
          <Picker.Item label="Endotérmica" value="endotérmica" />
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