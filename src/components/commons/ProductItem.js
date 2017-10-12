import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

const ProductItem = ({ id, title, image, price, onPress }) => {
    return (
        <TouchableOpacity style={styles.wrapper} onPress={() => onPress(id)}>
            <View style={styles.imageView}>
                <Image style={styles.image} source={{ uri: image }} />
            </View>
            <View style={styles.titleView}>
                <Text style={styles.title}>
                    {title}
                </Text>
            </View>
            <Text style={styles.price}>
                {price}
            </Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        width: "48%",
        backgroundColor: "#f2f2f2",
        marginBottom: "2%",
        marginLeft: "1%",
        marginRight: "1%",
        padding: 20
    },
    imageView: {
        justifyContent: "center",
        alignItems: "center"
    },
    image: {
        width: 180,
        height: 140,
    },
    titleView: {
        height: 50
    },
    title: {
        fontSize: 20,
        textAlign: "left"
    },
    price: {
        fontSize: 25,
        textAlign: "left",
        color: "#989819",
        fontWeight: "bold",
    }
});

export { ProductItem };