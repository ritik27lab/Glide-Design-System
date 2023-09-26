import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useSelector } from 'react-redux';


export const OTPScreen = ({ navigation, route }) => {
    const data = route?.params
    console.log("OTP data", data.data)
    const [otp, setOTP] = useState(['', '', '', '']);
    const otpInputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

    const [submit, setSubmit] = useState(true);


    useEffect(() => {
        // Focus the first OTP box when the screen is first loaded
        otpInputRefs[0].current.focus();
    }, []);

    const handleOTPChange = (text: any, index: number) => {
        if (/^\d*$/.test(text) && index >= 0 && index < 4) {
            const updatedOTP = [...otp];
            updatedOTP[index] = text;
            setOTP(updatedOTP);

            if (index < 3 && text !== '') {
                otpInputRefs[index + 1].current.focus();
            }

            let allFilled = true;
            for (let i = 0; i < updatedOTP.length; i++) {
                if (updatedOTP[i] === '') {
                    allFilled = false;
                    break;
                }
            }
            setSubmit(!allFilled);
        }
    };



    return (
        <View style={{
            flex: 1,
            backgroundColor: "#3a2a46",
            justifyContent: "center",
        }}>
            <Text style={{ fontFamily: 'Quantico-BoldItalic', color: '#fff', fontSize: 24, marginLeft: '5%' }}>VERIFICATION CODE</Text>
            <Text style={{ fontSize: 16, fontFamily: 'Roboto-Regular', color: '#fff', width: '65%', marginLeft: '5%', marginVertical: 20 }}>Enter the 4 digit Code sent to your phone number</Text>

            <View style={styles.inputContainer}>
                {otp.map((value, index) => (
                    <View key={index} style={[styles.inputView, value && styles.inputFilled]}>
                        <TextInput
                            ref={otpInputRefs[index]}
                            style={styles.input}
                            onChangeText={(text) => handleOTPChange(text, index)}
                            value={value}
                            maxLength={1}
                            keyboardType="numeric"

                        />
                    </View>
                ))}
            </View>
            <TouchableOpacity style={[styles.button,
            { opacity: !submit ? 1 : 0.5 }
            ]
            }
                disabled={submit}
                onPress={() => navigation.navigate("SignUp", { data: data, })}
            >
                <Text style={styles.btn_text}>SUBMIT</Text>
            </TouchableOpacity>
            <View style={{ justifyContent: 'center', alignSelf: 'center' }}>
                <Text style={{ alignSelf: 'center', fontSize: 16, fontFamily: 'Roboto-Regular', color: '#fff', width: '65%', marginVertical: 20 }}>
                    Didn't receive a code?
                </Text>
                <Text style={{ color: '#B776F9', fontSize: 16, alignSelf: 'center', }}>Resend Code</Text>
            </View>
        </View >
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginVertical: '5%'
    },
    inputView: {
        borderWidth: 1,
        borderColor: '#E2D5FD67',
        borderRadius: 5,
        width: 52,
        height: 54,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10,
        color: '#fff'
    },
    input: {
        fontSize: 22,
        textAlign: 'center',
        color: '#fff'
    },
    btn_text: {
        fontSize: 18,
        color: "#fff",
        alignSelf: 'center',
        fontFamily: 'Quantico-BoldItalic',
    },
    button: {
        marginVertical: 25,
        height: 48,
        width: "65%",
        borderRadius: 5,
        justifyContent: "center",
        alignSelf: "center",
        backgroundColor: "#8355B6",
    },
    inputFilled: {
        backgroundColor: '#E2D5FD67',
    },
});