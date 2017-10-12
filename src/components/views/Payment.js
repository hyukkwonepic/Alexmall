import React from "react";
import { StyleSheet, WebView, View, Text, Alert } from "react-native";
const html = require("../../webviews/webview.html");

const Payment = () => {

    return (
        <WebView
            source={html}
            // ANDROID:
            javaScriptEnabled={true} // A value to enable JavaScript in the WebView. Used on Android only as JavaScript is enabled by default on iOS.
            // IOS:
            bounces={false} // A value that determines whether the web view bounces when it reaches the edge of the content.
        />
    );
};

export { Payment };