import React, { Component } from "react";
import { View, Text } from "react-native";
import { StackNavigator } from "react-navigation";
import { Shop, ProductDetail, Payment, PaymentPrev } from "./src/components/views";

const Navigator = StackNavigator(
    {
        Shop: { screen: Shop },
        ProductDetail: { screen: ProductDetail },
        Payment: { screen: PaymentPrev }
    },
    {
        mode: "modal"
    }
);

class App extends Component {
    render() {
        return (
            <Navigator />
        );
    }
}

export default App;