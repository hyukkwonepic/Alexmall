import React from "react";
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from "react-native";

const dummyItemList = [
    { id: 1, title: "PRIMAVERA 50 2T", image: "http://www.vespa.com/dam/jcr:302fea47-d59a-4619-8786-434405047978/Primavera-MY17-50-2t4v-nero-vulcano___.png", price: "2900" },
    { id: 2, title: "PRIMAVERA 50 2T RED", image: "http://www.vespa.com/dam/jcr:128943a6-e332-4f43-9a36-78004e65a7b0/Primavera-MY17-50-2t4v-rosso-passione___.png", price: "3000" },
    { id: 3, title: "PRIMAVERA 50 2T WHITE", image: "http://www.vespa.com/dam/jcr:8a2e313f-84da-4718-954f-b8203ccf611e/Primavera-MY17-50-2t4v-bianco-innocenza___.png", price: "2950" },
    { id: 4, title: "PRIMAVERA 50 2T AZURO", image: "http://www.vespa.com/dam/jcr:64854592-7388-413a-9a6d-1d9c040458df/Primavera-MY17-50-2t4v-azzurro-incanto___.png", price: "3500" },
    { id: 5, title: "SPRINT 125 IGET ABS BLACK", image: "http://www.vespa.com/dam/jcr:798c636e-9e7f-4fa5-aa6d-8b97fd150720/vespa-sprint-nero-laterale-dx.png", price: "5000" },
    { id: 6, title: "SPRINT 125 IGET ABS RED", image: "http://www.vespa.com/dam/jcr:a8e794cb-8c7b-4395-9d33-1ba7514d8b44/vespa-sprint-rosso-laterale-dx.png", price: "5500" },
    { id: 7, title: "PRIMAVERA 50 2T", image: "http://www.vespa.com/dam/jcr:302fea47-d59a-4619-8786-434405047978/Primavera-MY17-50-2t4v-nero-vulcano___.png", price: "2900" },
    { id: 8, title: "PRIMAVERA 50 2T RED", image: "http://www.vespa.com/dam/jcr:128943a6-e332-4f43-9a36-78004e65a7b0/Primavera-MY17-50-2t4v-rosso-passione___.png", price: "3000" },
    { id: 9, title: "PRIMAVERA 50 2T WHITE", image: "http://www.vespa.com/dam/jcr:8a2e313f-84da-4718-954f-b8203ccf611e/Primavera-MY17-50-2t4v-bianco-innocenza___.png", price: "2950" },
    { id: 10, title: "PRIMAVERA 50 2T AZURO", image: "http://www.vespa.com/dam/jcr:64854592-7388-413a-9a6d-1d9c040458df/Primavera-MY17-50-2t4v-azzurro-incanto___.png", price: "3500" },
    { id: 11, title: "SPRINT 125 IGET ABS BLACK", image: "http://www.vespa.com/dam/jcr:798c636e-9e7f-4fa5-aa6d-8b97fd150720/vespa-sprint-nero-laterale-dx.png", price: "5000" },
    { id: 12, title: "SPRINT 125 IGET ABS RED", image: "http://www.vespa.com/dam/jcr:a8e794cb-8c7b-4395-9d33-1ba7514d8b44/vespa-sprint-rosso-laterale-dx.png", price: "5500" }
];

const ProductDetail = ({ navigation }) => {
    const { id } = navigation.state.params;
    const item = dummyItemList.filter((item) => {
        return item.id === id;
    })[0];
    const { title, image, price } = item;
    const { wrapper, content, titleView, titleText, imageView, descriptions, imageStyle, priceView, priceText, buttonLayout, buttonView, buttonText } = styles;
    
    return (
        <View style={wrapper}>
            <View style={content}>
                <View style={imageView}>
                    <Image resizeMode="contain" style={imageStyle} source={{ uri: image }} />
                </View>
                <View style={descriptions}>
                    <View style={titleView}>
                        <Text style={titleText}>{ title }</Text>
                    </View>
                    <View style={priceView}>
                        <Text style={priceText}>PRICE: { price }</Text>
                    </View>
                    <TouchableOpacity style={buttonLayout} onPress={() => console.log("haha")}>
                        <View style={buttonView}>
                            <Text style={buttonText}>BUY NOW</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: "#fff"
    },
    content: {
        flex: 1
    },
    imageView: {
        flex: 1
    },
    imageStyle: {
        flex: 1,
        width: null,
        height: null
    },
    descriptions: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center"
    },
    titleView: {
    },
    titleText: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "left"
    },
    priceView: {
        marginTop: 20
    },
    priceText: {
        fontSize: 15,
        color: "#333",
        textAlign: "left"
    },
    buttonLayout: {
        marginTop: 20,
        alignItems: "center",
        justifyContent: "center"
    },
    buttonView: {
        borderColor: "#333",
        borderWidth: 1,
        padding: 10
    },
    buttonText: {
        
    }
});

export { ProductDetail };