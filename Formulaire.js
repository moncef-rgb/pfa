import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { StyleSheet, View, Text, TouchableOpacity, TextInput } from 'react-native';


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

const ContactComponent = props => {
    const { handleSubmit } = props;
    return (
        <View style={{ flex: 1, flexDirection: 'column', margin: 40, justifyContent: 'flex-start', }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold', width: 200, textAlign: 'center', margin: 10 }}>fill this form</Text>

            <Field keyboardType="default" label="age: " component={renderField} name="age" />
            <Field keyboardType="email-address" label="Email: " component={renderField} name="Email" />

            <TouchableOpacity onPress={handleSubmit} style={{ margin: 20, alignItems: 'center' }}>
                <Text style={{
                    backgroundColor: 'steelblue', color: 'white', fontSize: 16,
                    height: 37, width: 200, textAlign: 'center', padding: 10
                }}>Submit</Text>
            </TouchableOpacity>

        </View>
    );
}
const ContactForm = reduxForm({
    form: 'contact', // a unique identifier for this form
})(ContactComponent);

export default ContactForm;
