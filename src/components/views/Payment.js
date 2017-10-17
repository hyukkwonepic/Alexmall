import React, { Component } from "react";
import { StyleSheet, WebView, View, Text, Alert, Linking } from "react-native";
const html = require("../../webviews/webview.html");

class Payment extends Component {

    state = { selectedApp: "" }

    _onNavigationStateChange(state) {
        const { url } = state;
        console.log("url", url);
        const urlScheme = url.split("://")[0];
        this.setState({
            selectedApp: urlScheme,
            redirectUrl: url
        });
    }

    _onError(error) {
        const { selectedApp, url } = this.state;
        console.log(error);
        console.log("error url", error.nativeEvent.url);
        console.log("state url", url);

        switch(selectedApp) {
            case "lpayapp":
                this.refs["WebView"].injectJavaScript(`
                    window.history.back();
                `);
                Linking.openURL("https://itunes.apple.com/kr/app/id1036098908");
                break;
            default: break;
        }

        // let appDownloadLink = ""
        // switch(selectedApp) {
        //     case "lpayapp":
        //         Linking.openURL("https://itunes.apple.com/kr/app/id1036098908");
        //         break;
        //     case "hdcardappcardansimclick":
        //         this.refs["WebView"].injectJavaScript(`
        //             window.history.back();
                    
        //             window.open("https://itunes.apple.com/kr/app/id702653088");
        //         `);
        //         break;
        //     case "ispmobile":
        //         this.refs["WebView"].injectJavaScript(`
        //             window.history.back();
                    
        //             window.open("https://itunes.apple.com/kr/app/id369125087");
        //         `);
        //         break;
        //     case "kb-acp":
        //         this.refs["WebView"].injectJavaScript(`
        //             window.history.back();
                    
        //             window.open("https://itunes.apple.com/kr/app/id695436326");
        //         `);
        //         break;
        //     default:
        //         appDownlaodLink = "";
        //         break;
        // }

        // this.refs["WebView"].injectJavaScript(console.log("허허!", window.location.href));
    }

    // _renderError() {
    //     return (
    //         <Payment />
    //     )
    // }

    render() {
        return (
            <WebView
                source={html}
                onNavigationStateChange={this._onNavigationStateChange.bind(this)}
                onError={this._onError.bind(this)}
                // renderError={this._renderError}
                // ANDROID:
                javaScriptEnabled={true} // A value to enable JavaScript in the WebView. Used on Android only as JavaScript is enabled by default on iOS.
                // IOS:
                bounces={false} // A value that determines whether the web view bounces when it reaches the edge of the content.
                ref="WebView"
            />
        );
    }
}

export { Payment };