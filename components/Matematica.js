import React, { useState } from 'react';
import { StyleSheet, View, Text, SafeAreaView, TextInput, Button, ScrollView } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { CheckBox } from 'react-native-elements';
import { Picker } from '@react-native-picker/picker';

export default function Matematica({ navigation }) {
  const [resultado, setResultado] = useState(0)
  const [textAnswer1, setTextAnswer1] = useState('');
  const [textAnswer2, setTextAnswer2] = useState('');
  const [checkboxAnswer11, setCheckboxAnswer11] = useState(false);
  const [checkboxAnswer12, setCheckboxAnswer12] = useState(false);
  const [checkboxAnswer21, setCheckboxAnswer21] = useState(false);
  const [checkboxAnswer22, setCheckboxAnswer22] = useState(false);
  const [radioAnswer1, setRadioAnswer1] = useState('');
  const [radioAnswer2, setRadioAnswer2] = useState('');
  const [pickerAnswer1, setPickerAnswer1] = useState('');
  const [pickerAnswer2, setPickerAnswer2] = useState('');

  const handleNext = () => {
     let newResultado = 0;
    if (textAnswer1 && textAnswer1 == 12){
      newResultado++;
    }

    if (textAnswer2 && textAnswer2 == 120){
        newResultado++;
    }

    if (checkboxAnswer11){
        newResultado++;
    }

      if (checkboxAnswer21){
        newResultado++;
    }

      if (radioAnswer1 && radioAnswer1 == 90){
        newResultado++;
    }

       if (radioAnswer2 && radioAnswer2 == "x = (-b ± √(b² – 4ac)) / (2a)"){
        newResultado++;
    }

       if (pickerAnswer1 && pickerAnswer1 == 15){
        newResultado++;
    }

       if (pickerAnswer2 && pickerAnswer2 == "prisma"){
        newResultado++;
    }

    setResultado(newResultado)

    navigation.navigate('Biologia', {Matematica: resultado, });
  };

  return (
       <SafeAreaView style={styles.container}>
    <ScrollView>
      <Text style={styles.title}>Matemática</Text>
      <Text style={styles.label}>1 - Qual a raiz quadrada de 244 ?</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite sua resposta"
        value={textAnswer1}
        onChangeText={setTextAnswer1}
      />

      <Text style={styles.label}>2 - Quanto vale 5! ?</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite sua resposta"
        value={textAnswer2}
        onChangeText={setTextAnswer2}
      />

      <Text style={styles.label}>3 - Qual desses não é um número primo ?</Text>
      <CheckBox
        title="15"
        checked={checkboxAnswer11}
        onPress={() => setCheckboxAnswer11(!checkboxAnswer11)}
      />
      <CheckBox
        title="13"
        checked={checkboxAnswer12}
        onPress={() => setCheckboxAnswer12(!checkboxAnswer12)}
      />

      <Text style={styles.label}>4 - Quantos arestas tem um quadrilatero ?</Text>
      <CheckBox
        title="4"
        checked={checkboxAnswer21}
        onPress={() => setCheckboxAnswer21(!checkboxAnswer21)}
      />
      <CheckBox
        title="6"
        checked={checkboxAnswer22}
        onPress={() => setCheckboxAnswer22(!checkboxAnswer22)}
      />

      <Text style={styles.label}>5 - Quantos graus tem um ângulo reto ?</Text>
      <RadioButton.Group onValueChange={setRadioAnswer1} value={radioAnswer1}>
        <View style={styles.radioContainer}>
          <Text>100</Text>
          <RadioButton value="100" />
        </View>
        <View style={styles.radioContainer}>
          <Text>90</Text>
          <RadioButton value="90" />
        </View>
      </RadioButton.Group>

      <Text style={styles.label}>6 - Qual a formula de Bhaskara ?</Text>
      <RadioButton.Group onValueChange={setRadioAnswer2} value={radioAnswer2}>
        <View style={styles.radioContainer}>
          <Text>x = (-b ± √(b² – 4ac)) / (2a)</Text>
          <RadioButton value="x = (-b ± √(b² – 4ac)) / (2a)" />
        </View>
        <View style={styles.radioContainer}>
          <Text>x = (-a ± √(b² – 4ac²)) / (2c)</Text>
          <RadioButton value="x = (-a ± √(b² – 4ac²)) / (2c)" />
        </View>
      </RadioButton.Group>

      <Text style={styles.label}>7 - Qual é o próximo número: 3, 7, 11 ?</Text>
      <Picker
        selectedValue={pickerAnswer1}
        style={styles.picker}
        onValueChange={(itemValue) => setPickerAnswer1(itemValue)}
      >
        <Picker.Item label="Selecione" value="" />
        <Picker.Item label="15" value="15" />
        <Picker.Item label="14" value="14" />
      </Picker>

      <Text style={styles.label}>8 - Qual dessas formas é 3D ?</Text>
      <Picker
        selectedValue={pickerAnswer2}
        style={styles.picker}
        onValueChange={(itemValue) => setPickerAnswer2(itemValue)}
      >
        <Picker.Item label="Selecione" value="" />
        <Picker.Item label="prisma" value="prisma" />
        <Picker.Item label="triangulo" value="triangulo" />
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
