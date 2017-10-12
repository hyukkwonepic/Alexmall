import React, { Component } from "react";
import { View, Text } from "react-native";
import { StackNavigator } from "react-navigation";
import { Shop, ProductDetail } from "./src/components/views";

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