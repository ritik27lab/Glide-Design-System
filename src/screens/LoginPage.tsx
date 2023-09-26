import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import PhoneInput from "react-native-phone-number-input";
import { SignUpPipe } from "./assets/svg/SignUpPipe";

export const LoginPage = ({ navigation }) => {
    const [phoneNumber, setPhoneNumber] = useState<any>("");
    const [code, setCode] = useState([""]);
    const [countryCode, setCountryCode] = useState("");
    const phoneInput = React.useRef<PhoneInput>(null);

    const handleLogin = () => {
        navigation.navigate("OTPScreen", {
            data: phoneNumber,
        });
    };

    return (
        <View
            style={{
                flex: 1,
                backgroundColor: "#3a2a46",
                justifyContent: "center",

            }}
        >
            <Text
                style={styles.titleText}
            >
                LET’S ONBOARD
            </Text>
            <Text
                style={styles.h2}
            >
                Please Enter your Mobile Number to get the OTP
            </Text>

            <PhoneInput
                value={phoneNumber}
                defaultValue={phoneNumber}
                ref={phoneInput}
                containerStyle={styles.phoneContainerStyle}
                autoFocus={true}
                textContainerStyle={{
                    backgroundColor: "rgba(223, 230, 241, 0.0)",
                }}
                textInputStyle={{
                    left: -10,
                    color: "#ffffff",
                }}
                renderDropdownImage={
                    <View style={{ width: 1, alignSelf: "center" }}>
                        <SignUpPipe />
                    </View>
                }
                codeTextStyle={styles.codeTxt}
                onChangeCountry={(e) => {
                    setCountryCode(e.cca2), setCode(e.callingCode);
                }}
                placeholder="Phone Number"
                layout="second"
                onChangeText={(text) => {
                    setPhoneNumber(text);
                }}
                disableArrowIcon={false}
                flagButtonStyle={{ width: "15%", left: 3 }}
            />

            <TouchableOpacity
                style={[styles.button, { opacity: phoneNumber ? 1 : 0.5 }]}
                disabled={!phoneNumber}
                onPress={() => handleLogin()}
            >
                <Text style={styles.btn_text}>SUBMIT</Text>
            </TouchableOpacity>
            <Text allowFontScaling={false} style={styles.termsText}>
                By Signing-in, you agree to the{" "}
                <Text allowFontScaling={false} style={{ color: "#B776F9" }}>
                    Terms & Conditions
                </Text>{" "}
                and{" "}
                <Text allowFontScaling={false} style={{ color: "#B776F9" }}>
                    Privacy Policy.
                </Text>
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    btn_text: {
        fontSize: 15,
        color: "#fff",
        alignSelf: "center",
        fontFamily: "Quantico-BoldItalic",
    },
    button: {
        marginVertical: 10,
        height: 56,
        width: "90%",
        borderRadius: 5,
        justifyContent: "center",
        alignSelf: "center",
        backgroundColor: "#8355B6",
    },
    codeTxt: {
        color: "#ffffff",
        fontSize: 16,
        fontWeight: "700",
        textAlign: "center",
        justifyContent: "center",
        fontFamily: "Roboto-Medium",
    },
    termsText: {
        fontFamily: "NotoSans-Regular",
        fontSize: 16.5,
        alignSelf: "center",
        justifyContent: "flex-end",
        textAlign: "center",
        fontWeight: "500",
        color: "#fff",
        width: "70%",
        top: 50,
    },
    phoneContainerStyle: {
        marginTop: "5%",
        backgroundColor: "#E2D5FD67",
        borderRadius: 5,
        borderWidth: 2,
        borderColor: "#E2D5FD67",
        width: "90%",
        marginBottom: 20,
        marginHorizontal: "5%",
    },
    h2: {
        fontSize: 16,
        fontFamily: "Roboto-Regular",
        color: "#fff",
        width: "65%",
        marginLeft: "5%",
        marginVertical: 20,
    },
    titleText: {
        fontFamily: "Quantico-BoldItalic",
        color: "#fff",
        fontSize: 24,
        marginLeft: "5%",
    }
});
