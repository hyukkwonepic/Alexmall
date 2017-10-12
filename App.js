import React, { Component } from "react";
import { View, Text } from "react-native";
import { StackNavigator } from "react-navigation";
import { Shop } from "./src/components/views";

const Navigator = StackNavigator({
    Shop: {
        screen: Shop,
        navigationOptions: {
            title: "Shop"
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