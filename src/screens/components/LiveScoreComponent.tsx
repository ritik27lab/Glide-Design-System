
import { FontAwesome } from '@expo/vector-icons';
import React from 'react';
import { View, FlatList, StyleSheet, TouchableOpacity, Text } from 'react-native'
import FastImage from 'react-native-fast-image';


export const LiveScoreComponent = ({ data }) => {
    const ScoreCard = ({ item }) => (
        <View
            style={{
                marginTop: 10,
                marginLeft: 10,
                width: 345,
                height: 192,
                backgroundColor: '#fff',
                alignSelf: 'flex-start',
                borderRadius: 10,
            }}
        >
            <View style={{ flexDirection: 'row' }}>
                <View
                    style={{
                        height: 20,
                        width: 60,
                        backgroundColor: 'red',
                        marginLeft: 10,
                        marginTop: 5,
                        borderRadius: 8,
                        flexDirection: 'row',
                        alignSelf: 'center'
                    }}
                >
                    <View style={{ height: 7, width: 7, borderRadius: 3.5, marginHorizontal: 7, backgroundColor: 'white', alignSelf: 'center' }} />
                    <Text style={{ color: 'white', fontFamily: 'Roboto-Bold', fontSize: 12, justifyContent: 'center', alignSelf: 'center' }}>LIVE</Text>
                </View>
                <FontAwesome
                    name="map-marker"
                    size={20}
                    color="#834FB1"
                    style={{ left: 15, alignSelf: 'center' }}
                />

                <Text
                    style={{
                        fontFamily: 'Roboto-MediumItalic',
                        fontSize: 12,
                        textAlign: 'left',
                        marginTop: 5,
                        marginLeft: '8%',
                    }}
                >
                    {item.venue}

                </Text>
            </View>

            <View
                style={{
                    alignSelf: 'center',
                    flexDirection: 'row',
                    marginTop: 20,
                    justifyContent: 'space-evenly',
                    marginRight: 40,
                    width: '100%',
                }}
            >
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ fontFamily: 'Quantico-BoldItalic', fontSize: 10, textAlign: 'right', left: 30 }}>
                        {item.team1}
                    </Text>
                    {/* <FastImage
                        style={{
                            alignSelf: 'flex-end',
                            height: 40,
                            width: 40,
                            borderWidth: 0.1,
                            borderRadius: 20,
                        }}
                        source={require("../assets/images/indFlag.png")}
                    /> */}
                </View>
                <View>
                    <Text
                        style={{
                            textAlign: 'left',
                            fontFamily: 'Quantico-BoldItalic',
                            fontSize: 10,
                        }}
                    >
                        {item.team2}
                    </Text>
                    {/* <FastImage
                        style={{
                            alignSelf: 'flex-end',
                            height: 40,
                            width: 40,
                            borderWidth: 1,
                            borderColor: '#39a935',
                            borderRadius: 20,
                        }}
                        source={require("../assets/images/ukFlag.jpeg")}
                    /> */}
                </View>
            </View>

            <View style={{ flexDirection: 'row', marginTop: '5%' }}>
                <View
                    style={{
                        height: 40,
                        width: '45%',
                        backgroundColor: '#F9F0FF',
                        flexDirection: 'row',
                    }}
                >
                    <Text
                        style={{
                            fontFamily: 'Roboto-Medium',
                            fontSize: 11,
                            color: '#525252',
                            marginLeft: '5%',
                            marginTop: 5,
                        }}
                    >
                        {item.bowlingStats}
                    </Text>


                    <View
                        style={styles.bowlingSubView}
                    />
                </View>


                <View
                    style={{
                        height: 40,
                        width: '44%',
                        backgroundColor: '#834FB1',
                        flexDirection: 'row',
                        marginLeft: 35,
                        alignSelf: 'flex-end',
                    }}
                >



                    <View
                        style={styles.battingSubView}
                    />
                </View>
            </View>
        </View>
    );

    return (

        <FlatList
            horizontal
            data={data}
            renderItem={ScoreCard}
            keyExtractor={(item) => item.key}
            showsHorizontalScrollIndicator={false}

        />

    )
}


const styles = StyleSheet.create({

    battingSubView: {
        width: 10,
        height: 0,
        borderLeftWidth: 20,
        borderRightWidth: 20,
        borderTopWidth: 20,
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderTopColor: '#834FB1',
        marginTop: 10,
        right: 30,
        transform: [{ rotate: '90deg' }],
    },
    bowlingSubView: {
        width: 10,
        height: 0,
        borderLeftWidth: 20,
        borderRightWidth: 20,
        borderTopWidth: 20,
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderTopColor: '#F9F0FF',
        marginTop: 10,
        marginLeft: '92%',
        position: 'absolute',
        transform: [{ rotate: '-90deg' }],
    },
});