import React from "react";
import {
    View,
    FlatList,
    ImageBackground,
} from "react-native";

export const BookingGround = ({ data }) => {
    const BookGround = ({ item }) => (
        <ImageBackground
            source={require("../assets/images/cricketGround.png")}
            style={{
                marginVertical: 10,
                marginLeft: 10,
                width: 245,
                height: 295,
                backgroundColor: "#fff",
                alignSelf: "flex-start",
                borderRadius: 10,
            }}
            imageStyle={{ borderRadius: 10 }}
        >
            <View
                style={{
                    flex: 1,
                    backgroundColor: "rgba(0, 0, 0, 0.4)", // Semi-transparent black background
                    borderRadius: 10,
                    // justifyContent: 'center',
                    alignItems: "center",
                }}
            >
                <View
                    style={{
                        height: 20,
                        width: "100%",
                        backgroundColor: "#B486DD",
                        borderRadius: 10,
                    }}
                ></View>
            </View>
        </ImageBackground>
    );

    return (
        <FlatList
            horizontal
            data={data}
            renderItem={BookGround}
            keyExtractor={(item) => item.key}
            showsHorizontalScrollIndicator={false}
        />
    );
};
