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

const ContactComponent = props => {
    const { handleSubmit } = props;
    const [checked, setChecked] = React.useState('first');

    const [chosenOption_stage, setChosenOption_stage] = useState('1');
    const options_stage = [
        { label: '1', value: '1' },
        { label: '2', value: '2' },
        { label: '3', value: '3' },
        { label: '4', value: '4' },
    ];

    const [chosenOption_stability, setChosenOption_stability] = useState('On');
    const options_stability = [
        { label: 'On', value: 'On' },
        { label: 'Off', value: 'Off' },
    ];


    return (

        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>


                <View style={{ flexDirection: 'column', margin: 30, justifyContent: 'flex-start', }}>

                    <Text>**********************************************</Text>
                    <Text style={{ fontSize: 18, fontWeight: 'bold', width: 200, textAlign: 'center', margin: 10 }}>Fill in the form (Doctor)</Text>

                    <Field style={{ fontSize: 8 }} keyboardType="default" label="LED :" component={renderField} name="LED" />
                    <Field keyboardType="default" label="UPDRS :" component={renderField} name="UPDRS" />

                    <Text style={{ fontSize: 18, }}>Stage of Parkinson :{chosenOption_stage}</Text>
                    <RadioForm
                        radio_props={options_stage}
                        initial={0} //initial value of this group
                        onPress={(value) => {
                            setChosenOption_stage(value);
                        }} //if the user changes options, set the new value
                    />

                    <Field keyboardType="default" label="Tremor Dominant :" component={renderField} name="Tremor Dominant" />

                    <Text style={{ fontSize: 18, }}>Postural Instability :{chosenOption_stability}</Text>
                    <RadioForm
                        radio_props={options_stability}
                        initial={0} //initial value of this group
                        onPress={(value) => {
                            setChosenOption_stability(value);
                        }} //if the user changes options, set the new value
                    />

                    <Field keyboardType="default" label="Lenfth of PD :" component={renderField} name="Lenfth of PD" />



                    <TouchableOpacity onPress={handleSubmit} style={{ margin: 20, alignItems: 'center' }}>
                        <Text style={{
                            backgroundColor: 'steelblue', color: 'white', fontSize: 16,
                            height: 37, width: 200, textAlign: 'center', padding: 10
                        }}>Submit Doctor</Text>
                    </TouchableOpacity>


                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
const DoctorForm = reduxForm({
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

export default DoctorForm;
