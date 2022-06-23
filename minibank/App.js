import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/home';
import Login from './screens/login';
import Register from './screens/register';
import Dashboard from './screens/dashboard';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <View>

    <Stack.Navigator>
      <Stack.Screen name='DashboardPage' component={Dashboard} />
        <Stack.Screen name="HomePage" component={Home} />
        <Stack.Screen name="LoginPage" component={Login} />
        <Stack.Screen name="RegisterPage" component={Register} />
      </Stack.Navigator>
 
    </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  
});
