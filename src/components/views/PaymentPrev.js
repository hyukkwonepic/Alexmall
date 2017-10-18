import React, { Component } from "react";
import IamportPaymentWebView from "iamport-react-native";

class PaymentPrev extends Component {

    _onPaymentResultReceive(response) {

    }

    render() {
        // const parameters = {
        //     pg: "inicis",
        //     pay_method: "card",
        //     escrow: false,
        //     merchant_uid: "merchant_" + new Date().getTime(),
        //     name: "",
        //     amount: 10,
        //     tax_free: null,
        //     currency: "KRW",
        //     language: "ko",
        //     buyer_name: null,
        //     buyer_tel: "010-4516-5494",
        //     buyer_email: "khwalex@gmail.com",
        //     buyer_addr: null,
        //     buyer_postcode: null,
        //     custom_data: null,
        //     notice_url: null,
        //     display: {
        //         card_quota: [1, 2, 3]
        //     },
        //     digital: false,
        //     vbank_due: null,
        //     m_redirect_url: null,
        //     app_scheme: "love",
        //     biz_num: null
        // };

        const parameters = {
            pg : 'inicis', // version 1.1.0부터 지원.
            pay_method : 'card',
            merchant_uid : 'merchant_' + new Date().getTime(),
            name : '주문명:결제테스트',
            amount : 10,
            buyer_email : 'iamport@siot.do',
            buyer_name : '구매자이름',
            buyer_tel : '010-1234-5678',
            buyer_addr : '서울특별시 강남구 삼성동',
            buyer_postcode : '123-456',
            m_redirect_url : 'https://www.yourdomain.com/payments/complete',
            app_scheme: "love"
        }
        return (
            <IamportPaymentWebView
                iamportUserCode="imp36515441"
                parameters={parameters}
                bounces={false}
            />
        )
    }
}

export { PaymentPrev };