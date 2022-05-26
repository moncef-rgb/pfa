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

    const [chosenOption_gender, setChosenOption_gender] = useState('Male');
    const options_gender = [
        { label: 'Male', value: 'Male' },
        { label: 'Female', value: 'Female' },
    ];

    const [chosenOption_study, setChosenOption_study] = useState('Illiterate');
    const options_study = [
        { label: 'Illiterate', value: 'Male' },
        { label: 'Primary', value: 'Primary' },
        { label: 'Secondary', value: 'Secondary' },
        { label: 'Higher', value: 'Higher' },
    ];

    const [chosenOption_hand, setChosenOption_hand] = useState('Right');
    const options_hand = [
        { label: 'Right', value: 'Right' },
        { label: 'Left', value: 'Left' },
    ];

    const [chosenOption_health, setChosenOption_health] = useState('PD');
    const options_health = [
        { label: 'PD', value: 'PD' },
        { label: 'H', value: 'H' },
    ];

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

                    {/* <Text style={{ fontSize: 18, fontWeight: 'bold', width: 200, textAlign: 'center', margin: 10 }}>Sign In (doctor)</Text>

                    <Field keyboardType="default" label="Username: " component={renderField} name="Username" placeholder='doctorName' />
                    <Field keyboardType="email-address" label="Email: " component={renderField} name="Email" placeholder='doctorEmail' /> */}

                    <TouchableOpacity onPress={handleSubmit} style={{ margin: 20, alignItems: 'center' }}>
                        <Text style={{
                            backgroundColor: 'steelblue', color: 'white', fontSize: 16,
                            height: 37, width: 200, textAlign: 'center', padding: 10
                        }}>Login</Text>
                    </TouchableOpacity>
                    {/* <Text>**********************************************</Text> */}
                    <Text style={{ fontSize: 18, fontWeight: 'bold', width: 200, textAlign: 'center', margin: 10 }}>Fill in the form (Patient)</Text>

                    <Field style={{ fontSize: 8 }} keyboardType="default" label="NamePatient :" component={renderField} name="NamePatient" />
                    <Field keyboardType="default" label="Nationality :" component={renderField} name="Nationality" />
                    <Field keyboardType="email-address" label="Age: " component={renderField} name="Age" />

                    <Text style={{ fontSize: 18, }}>Gender :{chosenOption_gender}</Text>
                    <RadioForm
                        radio_props={options_gender}
                        initial={0} //initial value of this group
                        onPress={(value) => {
                            setChosenOption_gender(value);
                        }} //if the user changes options, set the new value
                    />

                    <Text style={{ fontSize: 18, }}>Level of study :{chosenOption_study}</Text>
                    <RadioForm
                        radio_props={options_study}
                        initial={0} //initial value of this group
                        onPress={(value) => {
                            setChosenOption_study(value);
                        }} //if the user changes options, set the new value
                    />

                    <Text style={{ fontSize: 18, }}>Dominant hand :{chosenOption_hand}</Text>
                    <RadioForm
                        radio_props={options_hand}
                        initial={0} //initial value of this group
                        onPress={(value) => {
                            setChosenOption_hand(value);
                        }} //if the user changes options, set the new value
                    />

                    <Text style={{ fontSize: 18, }}>Health situation :{chosenOption_health}</Text>
                    <RadioForm
                        radio_props={options_health}
                        initial={0} //initial value of this group
                        onPress={(value) => {
                            setChosenOption_health(value);
                        }} //if the user changes options, set the new value
                    />
                    <TouchableOpacity onPress={handleSubmit} style={{ margin: 20, alignItems: 'center' }}>
                        <Text style={{
                            backgroundColor: 'steelblue', color: 'white', fontSize: 16,
                            height: 37, width: 200, textAlign: 'center', padding: 10
                        }}>Submit Patient</Text>
                    </TouchableOpacity>

                    {/* <Text>**********************************************</Text>
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
                    </TouchableOpacity> */}


                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
const ContactForm = reduxForm({
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

export default ContactForm;
