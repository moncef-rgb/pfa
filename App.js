/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

//import React, { Component } from 'react';
//import { Platform, StyleSheet, Text, View } from 'react-native';

import React, { Component } from 'react';
import { AppRegistry, View, Text, Platform, StyleSheet, Button } from 'react-native';
import { Provider } from "react-redux";
//import { StackNavigator } from 'react-navigation';

import store from "./store";
import ContactForm from './components/ContactForm';
import PatientForm from './components/PatientForm';
import DoctorForm from './components/DoctorForm';
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

export default class App extends Component {
  // editUser = () => {
  //   this.props.navigation.navigate("Formulaire.js");
  // };
  render() {
    //const { navigate } = this.props.navigation;
    return (
      <Provider store={store}>
        <ContactForm handleSubmit={handleSubmit} />
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

      </Provider>

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

