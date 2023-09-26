import React, { useState, useEffect } from "react";
import { ScrollView, StyleSheet, Text, View, Platform, Share, Alert } from "react-native";
import { useSelector } from "react-redux";
import FastImage from "react-native-fast-image";
import { Entypo, Ionicons } from "@expo/vector-icons";
import { StatusBarComponent } from "./components/StatusBarComponent";
import { LiveScoreComponent } from "./components/LiveScoreComponent";
import { BookingGround } from "./components/BookingComponent";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useIsFocused } from "@react-navigation/native";




export const Dashboard = () => {

    const { userData } = useSelector((state: any) => ({
        userData: state.store.usersArr,
    }));
    const [localStorageData, setLocalStorageData] = useState<any>()

    console.log("USERDATA----->", userData)



    const focus = useIsFocused();
    const data = [
        {
            key: '1',
            venue: 'Eden Gardens, Kolkata',
            team1: 'CHENNAI\nSUPERKINGS',
            team2: 'KOLKATA\nKINGS',
            bowlingStats: 'RAMHARACK 1-10 | 0.4',
            battingStats: 'R Devid'
        },
        {
            key: '2',
            venue: 'Eden Gardens, Kolkata',
            team1: 'CHENNAI\nSUPERKINGS',
            team2: 'KOLKATA\nKINGS',
            bowlingStats: 'RAMHARACK 1-10 | 0.4',
            battingStats: 'R Devid'
        },
        {
            key: '3',
            venue: 'Eden Gardens, Kolkata',
            team1: 'CHENNAI\nSUPERKINGS',
            team2: 'KOLKATA\nKINGS',
            bowlingStats: 'RAMHARACK 1-10 | 0.4',
        },
        {
            key: '4',
            venue: 'Eden Gardens, Kolkata',
            team1: 'CHENNAI\nSUPERKINGS',
            team2: 'KOLKATA\nKINGS',
            bowlingStats: 'RAMHARACK 1-10 | 0.4',
            bowlingData: [
                { ball: 1, value: '2' },
                { ball: 2, value: 'wicket' },
                { ball: 3, value: 'dotball' },
                { ball: 4, value: 'wideball' },
                { ball: 5, value: 'sixer' },
                { ball: 6, value: 'four' },
            ]
        },
    ];


    const saveDataToAsync = async () => {
        try {
            // Load the existing array from AsyncStorage
            const localArr = await AsyncStorage.getItem('allUsers');
            let updatedArray = [];
            if (localArr !== null) {
                updatedArray = JSON.parse(localArr);
            }
            updatedArray = [...updatedArray, userData];
            await AsyncStorage.setItem('allUsers', JSON.stringify(updatedArray));

            console.log('Objects saved to array in AsyncStorage.');
        } catch (error) {
            console.error('Error:', error);
        }
    };


    useEffect(() => {
        saveDataToAsync();
        shareData()
    }, [focus])



    const shareData = async () => {
        try {
            const localArr = await AsyncStorage.getItem('allUsers');
            if (localArr !== null) {
                setLocalStorageData(localArr)
                return JSON.parse(localArr);
            } else {
                return [];
            }
        } catch (error) {
            console.error('Error getting array from AsyncStorage:', error);
            return [];
        }
    };

    const onShare = async () => {
        try {
            const result = await Share.share({
                message:
                    localStorageData,
            });
            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                    // shared with activity type of result.activityType
                } else {
                    // shared
                }
            } else if (result.action === Share.dismissedAction) {
                // dismissed
            }
        } catch (error: any) {
            Alert.alert(error.message);
        }
    };

    return (
        <View style={{
            backgroundColor: "#F5F2F7",
            flex: 1,
            height: "100%",
            display: 'flex'

        }}>
            <ScrollView
                style={{
                    backgroundColor: "#F5F2F7",
                    flex: 1,
                    height: "100%",
                    paddingBottom: 50,

                }}
                showsVerticalScrollIndicator={false}
            >
                <StatusBarComponent />
                <View
                    style={{
                        backgroundColor: "#3a2a46",
                        height: Platform.OS == "ios" ? 260 : 245,
                        flex: 1,
                    }}
                >
                    <View
                        style={styles.userDataContainer}
                    >
                        {/* <FastImage
                            style={styles.imageStyle}
                            source={require("./assets/images/person.png")}
                        /> */}
                        <Text
                            style={styles.welcomeText}
                        >
                            Welcome {userData.playerName}!
                        </Text>
                        <Entypo name="share" size={24} color="#F7F7F7" onPress={() => onShare()} />
                    </View>
                    <View
                        style={{

                            width: "100%",
                            height: "20%",
                            paddingHorizontal: 20,
                            justifyContent: "space-around",
                            flexDirection: "row",

                            bottom: 25,
                        }}
                    >
                        <View
                            style={{
                                backgroundColor: "grey",
                                alignItems: "center",
                                width: 88,
                                right: 24,
                                borderRadius: 12,
                                justifyContent: "center",
                                height: 30,
                                marginLeft: "8%",
                            }}
                        >
                            <Text
                                style={{
                                    fontSize: 20,
                                    fontWeight: "bold",
                                    color: "#fff",
                                }}
                            >
                                134
                            </Text>
                        </View>

                        <View
                            style={{
                                flexDirection: "row",
                                justifyContent: "space-around",
                                width: "65%",
                                marginTop: 5,
                            }}
                        >
                            {/* <Ionicons
                                name="ios-logo-bitcoin"
                                size={22}
                                color="gold"
                                style={{ alignSelf: "flex-start" }}
                            /> */}
                            <View style={{ flexDirection: 'row', }}>
                                {/* <FastImage

                                    style={{ height: 22, width: 22, alignSelf: 'flex-start' }}
                                    source={require("./assets/images/badge.png")}
                                /> */}
                                <Text
                                    style={{
                                        fontSize: 16,
                                        paddingLeft: 15,
                                        color: "#fff",
                                        fontFamily: "Quantico-BoldItalic",
                                        justifyContent: "center",
                                        position: 'absolute',
                                        marginHorizontal: 10

                                    }}
                                >
                                    3
                                </Text>
                            </View>

                            <View style={{ flexDirection: 'row', }}>
                                {/* <FastImage

                                    style={{ height: 22, width: 22, alignSelf: 'flex-start' }}
                                    source={require("./assets/images/label.png")}
                                /> */}
                                <Text
                                    style={{
                                        fontSize: 16,
                                        paddingLeft: 15,
                                        color: "#fff",
                                        fontFamily: "Quantico-BoldItalic",
                                        justifyContent: "center",
                                        position: 'absolute',
                                        marginHorizontal: 10

                                    }}
                                >
                                    6
                                </Text>
                            </View>

                            <View style={{ alignSelf: "center", marginBottom: 5 }}>
                                <View
                                    style={{
                                        backgroundColor: "#F7D87D",
                                        justifyContent: 'center',
                                        width: 78,
                                        height: 30,
                                        alignSelf: "center",
                                        flexDirection: "row",
                                        borderRadius: 20,
                                        opacity: 0.25
                                    }}
                                />
                                <View style={{ flexDirection: 'column', bottom: 25, marginLeft: 5 }}>
                                    <Text
                                        style={{
                                            fontSize: 15,
                                            paddingLeft: 15,
                                            color: "#fff",
                                            fontFamily: "Quantico-BoldItalic",
                                            justifyContent: "center",
                                            position: 'absolute',
                                            alignSelf: 'center',



                                        }}
                                    >
                                        3,000
                                    </Text>
                                    {/* <FastImage
                                        style={{ height: 20, width: 20, alignSelf: 'flex-start', top: 1, marginHorizontal: 1 }}
                                        source={require("./assets/images/coin.png")}
                                    /> */}
                                </View>
                            </View>
                        </View>
                    </View>
                    <View
                        style={{
                            backgroundColor: "#FFFFFF",
                            width: "95%",
                            borderRadius: 10,
                            height: 55,
                            alignSelf: "center",
                            bottom: 10,

                            opacity: 0.4,
                        }}
                    />
                    <View
                        style={{
                            width: "95%",
                            borderRadius: 10,
                            bottom: 55,
                            height: 55,
                            alignSelf: "center",
                            flexDirection: "row",
                            paddingHorizontal: 10,
                            justifyContent: "space-around",

                        }}
                    >
                        <View>
                            <Text
                                style={{
                                    alignSelf: "center",
                                    color: "#fff",
                                    fontFamily: "Roboto-Regular",
                                    fontSize: 12,
                                }}
                            >
                                Matches
                            </Text>
                            <Text
                                style={{
                                    fontSize: 16,
                                    fontWeight: "bold",
                                    color: "#fff",
                                    textAlign: "left",
                                    fontFamily: "Roboto-Medium",
                                    // marginVertical: 10,
                                }}
                            >
                                122
                            </Text>
                        </View>
                        <View style={{}}>
                            <Text
                                style={{
                                    alignSelf: "center",
                                    color: "#fff",
                                    fontFamily: "Roboto-Regular",
                                    fontSize: 12,
                                }}
                            >
                                Innings
                            </Text>
                            <Text
                                style={{
                                    fontSize: 15,
                                    fontWeight: "bold",
                                    color: "#fff",
                                    textAlign: "left",
                                }}
                            >
                                122
                            </Text>
                        </View>
                        <View style={{}}>
                            <Text
                                style={{
                                    alignSelf: "center",
                                    color: "#fff",
                                    fontFamily: "Roboto-Regular",
                                    fontSize: 12,
                                }}
                            >
                                Runs
                            </Text>
                            <Text
                                style={{
                                    fontSize: 15,
                                    fontWeight: "bold",
                                    color: "#fff",
                                    textAlign: "left",
                                }}
                            >
                                122
                            </Text>
                        </View>
                        <View style={{}}>
                            <Text
                                style={{
                                    alignSelf: "center",
                                    color: "#fff",
                                    fontFamily: "Roboto-Regular",
                                    fontSize: 12,
                                }}
                            >
                                Average
                            </Text>
                            <Text
                                style={{
                                    fontSize: 15,
                                    fontWeight: "bold",
                                    color: "#fff",
                                    textAlign: "left",
                                }}
                            >
                                122
                            </Text>
                        </View>
                    </View>
                </View>
                <Text
                    style={styles.listheaderTitle}
                >
                    LIVE SCORE
                </Text>
                <View style={{ display: 'flex' }}>
                    <LiveScoreComponent data={data} />
                </View>
                <Text
                    style={styles.listheaderTitle}
                >
                    BOOK GROUND
                </Text>
                <View style={{ display: 'flex' }}>
                    <BookingGround data={data} />
                </View>

                <View>

                    <Text style={{ marginLeft: 20, width: 245, fontFamily: 'Roboto-Regular', fontSize: 38, color: '#4D1D77', lineHeight: 40, letterSpacing: 0.7 }}>
                        “It’s not how big you are but how big you play.”
                    </Text>
                    <Text style={{ marginLeft: 20, width: 245, fontFamily: 'Roboto-Regular', fontSize: 20, color: '#4D1D77', marginVertical: 20, letterSpacing: 0.4 }}>
                        -Ranchordas
                    </Text>
                </View>

            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    listheaderTitle: {
        fontFamily: "Quantico-BoldItalic",
        width: "18%",
        marginLeft: "4%",
        marginVertical: "2%",
    },

    userDataContainer: {
        flexDirection: "row",
        height: "45%",
        paddingHorizontal: 10,
        alignItems: "center",

        marginTop: Platform.OS == "ios" ? 30 : 10,
        width: "100%",
        justifyContent: "space-between",
    },
    imageStyle: {
        height: 82,
        width: 82,
        borderColor: "grey",
        borderWidth: 1,
        borderRadius: 41,
        // zIndex: 0,
        marginTop: "5%",
        marginLeft: "5%",
    },
    welcomeText: {
        alignSelf: "center",
        marginHorizontal: 20,
        paddingBottom: 10,
        color: "#fff",
        fontFamily: "Quantico-BoldItalic",
        fontSize: 20,
    }
});
