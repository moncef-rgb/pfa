/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

//import React, { Component } from 'react';
//import { Platform, StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { AppRegistry, View, Text, Platform, StyleSheet, Button } from 'react-native';
import { Provider } from "react-redux";
//import { StackNavigator } from 'react-navigation';
import { NavigationContainer } from '@react-navigation/native';
import store from "./store";
import ContactForm from './components/ContactForm';
import PatientForm from './components/PatientForm';
import DoctorForm from './components/DoctorForm';
import SignInForm from './components/SignInForm';
import { createNativeStackNavigator , TransitionPresets} from '@react-navigation/native-stack';
import Menu1 from './Menu';

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' +
//     'Cmd+D or shake for dev menu',
//   android: 'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });


const handleSubmit = values => {
  alert(`submitting form with values= ${values}`);
  // this.props.navigation.navigate("screens/Formulaire");
};
const Stack = createNativeStackNavigator();

export default class App extends Component {
  // editUser = () => {
  //   this.props.navigation.navigate("Formulaire.js");
  // };
  render() {
    //const { navigate } = this.props.navigation;

    return (


      <NavigationContainer>
        <Provider store={store}>
        <Stack.Navigator 
        initialRouteName="Sign">
        <Stack.Screen
          name="PatientForm"
          component={ContactForm }
          options={{ title: 'Formulaire de patient' }}
        />
        <Stack.Screen name="Profile" component={DoctorForm}  options={{ title: 'Welcome1' }}/>
        <Stack.Screen name="Profile1" component={PatientForm}  options={{ title: 'Welcome2' }}/>
        <Stack.Screen name="Sign" component={SignInForm}  options={{ title: 'Sign In',}} 
            
        />
      </Stack.Navigator>
      </Provider>




      {/* <Provider store={store}> */}
        {/* <ContactForm handleSubmit={handleSubmit} /> */}
        {/* <PatientForm handleSubmit={handleSubmit} /> */}
        {/* <DoctorForm handleSubmit={handleSubmit} /> */}

        {/* <Menu1 /> */}

        {/* <Button
          // style={styles.cancelButton}
          onPress={this.editUser},;,;,
          title="redirect"
          color="#f00"
        //accessibilityLabel="Register a User."
        /> */}

      {/* </Provider> */}
      </NavigationContainer>

    );
  }
}

AppRegistry.registerComponent('tutorialProject', () => App);

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',

//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });

