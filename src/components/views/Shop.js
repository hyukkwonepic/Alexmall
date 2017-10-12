import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { ProductItem } from "../commons";

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

const Shop = ({ navigation }) => {
    const products = dummyItemList.map((item) => {
        const { id, title, image, price } = item;
        return <ProductItem key={id} id={id} title={title} price={price} image={image} onPress={(id) => navigation.navigate("ProductDetail", { id })}/>;
    });

    return (
        <View style={styles.wrapper}>
            <View style={styles.titleView}>
                <Text style={styles.text}>
                    VESPA
                </Text>
            </View>
            <ScrollView style={styles.scrollView} >
                <View style={styles.productGroup}>
                    { products }
                </View>
            </ScrollView>         
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: "#fff"
    },
    scrollView: {
    },
    productGroup: {
        flexDirection: "row",
        flexWrap: "wrap",
        backgroundColor: "#fff"
    },
    titleView: {
        marginTop: 10,
        marginBottom: 10,
    },
    text: {
        fontSize: 25,
        fontWeight: "bold",
        textAlign: "center"
    }
})

export { Shop };