import React, { useState } from 'react';
import { StyleSheet, View, Text, SafeAreaView, TextInput, Button, ScrollView } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { CheckBox } from 'react-native-elements';
import { Picker } from '@react-native-picker/picker';

export default function Biologia({ route, navigation }) {
    const { Matematica } = route.params;
  const [resultado, setResultado] = useState(0);
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

    if (textAnswer1 && textAnswer1.toLowerCase() === 2) {
      newResultado++;
    }

    if (textAnswer2 && textAnswer2.toLowerCase() === 46) {
      newResultado++;
    }

    if (checkboxAnswer11) {
      newResultado++;
    }

    if (checkboxAnswer21) {
      newResultado++;
    }

    if (radioAnswer1 && radioAnswer1 === 'hemoglobina') {
      newResultado++;
    }

    if (radioAnswer2 && radioAnswer2 === 'espermatozoide') {
      newResultado++;
    }

    if (pickerAnswer1 && pickerAnswer1 === 'fotosíntese') {
      newResultado++;
    }

    if (pickerAnswer2 && pickerAnswer2 === 'mitose') {
      newResultado++;
    }

    setResultado(newResultado);

    navigation.navigate('Portugues', {
      Biologia: newResultado,
      Matematica
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>Biologia</Text>

        <Text style={styles.label}>1 - Quantos pulmões o corpo humano possui ?</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite sua resposta"
          value={textAnswer1}
          onChangeText={setTextAnswer1}
        />

        <Text style={styles.label}>2 - Quantos cromossomos humanos existem nas células somáticas ?</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite sua resposta"
          value={textAnswer2}
          onChangeText={setTextAnswer2}
        />

        <Text style={styles.label}>3 - O que é a fotossíntese ?</Text>
        <CheckBox
          title="Substância encontrada nas plantas"
          checked={checkboxAnswer11}
          onPress={() => setCheckboxAnswer11(!checkboxAnswer11)}
        />
        <CheckBox
          title="Processo pelo qual as plantas produzem energia"
          checked={checkboxAnswer12}
          onPress={() => setCheckboxAnswer12(!checkboxAnswer12)}
        />

        <Text style={styles.label}>4 - O que é a fotossíntese ?</Text>
        <CheckBox
          title="Substância encontrada nas plantas"
          checked={checkboxAnswer21}
          onPress={() => setCheckboxAnswer21(!checkboxAnswer21)}
        />
        <CheckBox
          title="Processo pelo qual as plantas produzem energia"
          checked={checkboxAnswer22}
          onPress={() => setCheckboxAnswer22(!checkboxAnswer22)}
        />

        <Text style={styles.label}>4. Qual é a molécula que transporta oxigênio no sangue?</Text>
        <RadioButton.Group onValueChange={setRadioAnswer1} value={radioAnswer1}>
          <View style={styles.radioContainer}>
            <Text>Hemoglobina</Text>
            <RadioButton value="hemoglobina" />
          </View>
          <View style={styles.radioContainer}>
            <Text>Água</Text>
            <RadioButton value="água" />
          </View>
        </RadioButton.Group>

        <Text style={styles.label}>5. Qual célula é responsável pela fertilização?</Text>
        <RadioButton.Group onValueChange={setRadioAnswer2} value={radioAnswer2}>
          <View style={styles.radioContainer}>
            <Text>Óvulo</Text>
            <RadioButton value="óvulo" />
          </View>
          <View style={styles.radioContainer}>
            <Text>Espermatozoide</Text>
            <RadioButton value="espermatozoide" />
          </View>
        </RadioButton.Group>

        <Text style={styles.label}>6. O que é o processo de transformação de luz solar em energia química?</Text>
        <Picker
          selectedValue={pickerAnswer1}
          style={styles.picker}
          onValueChange={(itemValue) => setPickerAnswer1(itemValue)}
        >
          <Picker.Item label="Selecione" value="" />
          <Picker.Item label="Respiração" value="respiração" />
          <Picker.Item label="Fotossíntese" value="fotosíntese" />
        </Picker>

        <Text style={styles.label}>7. Qual é o processo de divisão celular em células somáticas?</Text>
        <Picker
          selectedValue={pickerAnswer2}
          style={styles.picker}
          onValueChange={(itemValue) => setPickerAnswer2(itemValue)}
        >
          <Picker.Item label="Selecione" value="" />
          <Picker.Item label="Meiose" value="meiose" />
          <Picker.Item label="Mitose" value="mitose" />
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
