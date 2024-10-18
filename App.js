import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './components/Home.js';
import Matematica from './components/Matematica.js';
import Biologia from './components/Biologia.js';
import Portugues from './components/Portugues.js';
import Quimica from './components/Quimica.js';
import Resultado from './components/Resultado.js';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Matematica" component={Matematica} />
        <Stack.Screen name="Biologia" component={Biologia} />
        <Stack.Screen name="Portugues" component={Portugues} />
        <Stack.Screen name="Quimica" component={Quimica} />
        <Stack.Screen name="Resultado" component={Resultado} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}