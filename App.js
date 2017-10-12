import React, { Component } from "react";
import { View, Text } from "react-native";
import { StackNavigator } from "react-navigation";
import { Shop, ProductDetail, Payment } from "./src/components/views";

const Navigator = StackNavigator({
    Shop: {
        screen: Shop,
        navigationOptions: {
            title: "Shop"
        }
    },
    ProductDetail: {
        screen: ProductDetail,
        navigationOptions: {
            path: "product/:id",
            title: "Product"
        }
    },
    Payment: {
        screen: Payment
    }
});

class App extends Component {
    render() {
        return (
            <Navigator />
        );
    }
}

export default App;