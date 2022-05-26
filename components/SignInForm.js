import React, { Component, useState } from 'react';
import { Field, reduxForm } from 'redux-form';
import { StyleSheet, View, Text, TouchableOpacity, TextInput, SafeAreaView, ScrollView, StatusBar } from 'react-native';
import { RadioButton } from 'react-native-paper';
import RadioForm from 'react-native-simple-radio-button';

const renderField = ({ label, keyboardType, name }) => {
    return (
        <View style={{ flexDirection: 'row', height: 50, alignItems: 'center' }}>
            <Text style={{ fontSize: 16, fontWeight: 'bold', width: 80, justifyContent: 'center' }}> {label}
            </Text>
            <TextInput style={{ borderColor: 'steelblue', borderWidth: 1, height: 37, width: 220, padding: 5 }}
                keyboardType={keyboardType}
            >
            </TextInput>

        </View>);
};

const ContactComponent = ({ navigation }) => {
    //const { handleSubmit } = props;


    return (

        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>


                <View style={{ flexDirection: 'column', margin: 30, justifyContent: 'flex-start', }}>

                     <Text style={{ fontSize: 18, fontWeight: 'bold', width: 200, textAlign: 'center', margin: 10 }}>Sign In (doctor)</Text>

                    <Field keyboardType="default" label="Username: " component={renderField} name="Username" placeholder='doctorName' />
                    <Field keyboardType="email-address" label="Email: " component={renderField} name="Email" placeholder='doctorEmail' /> 

                    <TouchableOpacity onPress={() =>
                         navigation.navigate('PatientForm',{})} style={{ margin: 20, alignItems: 'center' }}>
                        <Text style={{
                            backgroundColor: 'steelblue', color: 'white', fontSize: 16,
                            height: 37, width: 200, textAlign: 'center', padding: 10
                        }}>Login</Text>
                    </TouchableOpacity>

                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
const SignInForm = reduxForm({
    form: 'contact', // a unique identifier for this form
})(ContactComponent);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
    },
    // scrollView: {
    //   backgroundColor: 'pink',
    //   marginHorizontal: 20,
    // // },
    // text: {
    //   fontSize: 42,
    // },
});

export default SignInForm;
