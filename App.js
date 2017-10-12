import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

class App extends Component {
    render() {
        return (
            <View style={styles.wrapper}>
                <Text>Hello</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
});

export default App;