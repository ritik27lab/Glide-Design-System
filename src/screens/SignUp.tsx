import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

import { useDispatch, useSelector } from "react-redux";
import { TextInput, Checkbox } from "react-native-paper";
import { storeActions } from "../redux/store";
import { Ionicons } from '@expo/vector-icons'; // You can use any icon library you prefer



export const SignUp = ({ navigation, route }) => {

    const [checked, setChecked] = React.useState(false);
    const data = route?.params.data;

    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");

    const [dob, setDob] = useState<any>("");
    const dispatch = useDispatch()

    const handleLogin = async () => {
        const myDataObj = {
            _id: Date.now().toString(),
            playerName: userName,
            phoneNumber: data.data,
            email: email,
            DOB: "DOB",
        };

        //Dispatch: save user data in the Redux store
        dispatch(storeActions.setUserSArr(myDataObj));
        setTimeout(() => {
            navigation.navigate('Dashboard')
        }, 200)
    };
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                backgroundColor: "#3a2a46",
            }}
        >
            <Text style={{ fontFamily: 'Quantico-BoldItalic', color: '#fff', fontSize: 24, marginLeft: '5%' }}>
                LET’S ONBOARD
            </Text>
            <Text style={{ fontFamily: 'Roboto-Regular', color: '#BFBFBF', fontSize: 16, marginLeft: '5%', marginVertical: 10 }}>We only need few Details about you!</Text>
            <View style={{ alignItems: 'center' }}>
                <TextInput
                    style={{ marginTop: 15, height: 48, width: "90%", backgroundColor: "#3a2a46" }}
                    placeholder="Player Name"
                    label={'Name'}
                    placeholderTextColor={'grey'}
                    mode="outlined"
                    outlineColor="#E2D5FD"
                    textColor="white"
                    theme={{
                        dark: false,
                        roundness: 5,
                        colors: {
                            text: "#ffffff", // Change text color
                            primary: "#ffffff", // Change label color
                            onSurfaceVariant: 'rgba(255, 255, 255, 0.6)'

                        },

                    }}

                    onChangeText={(text) => setUserName(text)}
                    returnKeyType="done"
                />
                <TextInput
                    style={{ marginTop: 15, height: 48, width: "90%", backgroundColor: "#3a2a46" }}
                    textColor="white"
                    mode="outlined"
                    outlineColor="#E2D5FD"
                    theme={{
                        roundness: 5,
                        colors: {
                            text: "#ffffff",
                            primary: "#fff",
                            onSurfaceVariant: 'rgba(255, 255, 255, 0.6)'
                        },
                    }}
                    returnKeyType="done"
                    label="DOB"
                    onChangeText={(textdob: any) => setDob(textdob)}
                />
                <TextInput
                    style={{ marginTop: 15, height: 48, width: "90%", backgroundColor: "#3a2a46", color: '#ffffff' }}
                    textColor="white"
                    label="Dropdown"
                    mode="outlined"
                    outlineColor="#E2D5FD"
                    theme={{
                        roundness: 5,
                        colors: {
                            text: "#ffffff",
                            primary: "#fff",
                            onSurfaceVariant: 'rgba(255, 255, 255, 0.6)'

                        },

                    }}
                    onChangeText={(textDrop: any) => setEmail(textDrop)}
                    returnKeyType="done"

                />

                <View style={{ alignSelf: 'center', width: '90%', flexDirection: 'row', marginVertical: 25 }}>
                    <Checkbox.Android
                        status={checked ? 'checked' : 'unchecked'}
                        onPress={() => {
                            setChecked(!checked);
                        }}
                        uncheckedColor="white"
                        color="#8355B6"
                    />

                    <Text style={{ color: '#BFBFBF', width: '90%', marginTop: 5, fontFamily: 'Roboto-Medium', letterSpacing: 0.4, fontSize: 12, lineHeight: 20 }}>
                        I authorize 22 Yards and it's representative to contact me with updates and notifications via Email, SMS, WhatsApp and Call. This will override the registry on DND/NDNC.
                    </Text>
                </View>
            </View>


            <TouchableOpacity
                style={styles.button}
                onPress={() => handleLogin()}
            >
                <Text style={styles.btn_text}>CONTINUE</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        alignItems: "center",
    },
    label: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 10,
    },
    inputContainer: {
        flexDirection: "row",
        alignSelf: "center",
        marginVertical: "5%",
        // justifyContent: 'space-between',
    },
    inputView: {
        borderWidth: 1,
        borderColor: "#E2D5FD67",
        borderRadius: 5,
        width: 52,
        height: 54,
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 10,
        color: "#fff",
    },
    input: {
        fontSize: 22,
        textAlign: "center",
        color: "#fff",
    },
    btn_text: {
        fontSize: 18,
        color: "#fff",
        alignSelf: "center",
        fontFamily: "Quantico-BoldItalic",
    },
    button: {
        marginVertical: 25,
        height: 48,
        width: "90%",
        borderRadius: 5,
        justifyContent: "center",
        alignSelf: "center",
        backgroundColor: "#8355B6",
    },
    inputFilled: {
        backgroundColor: "#E2D5FD67", // Set a background color when filled
    },
    checkbox: {
        width: 20,
        height: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderRadius: 5,

    },
    checkboxOutline: {
        width: 20,
        height: 20,
        borderWidth: 1,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red'
    },
});

