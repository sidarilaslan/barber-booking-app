import React from "react";
import { View, Text, TouchableWithoutFeedback } from "react-native";
import styles from "./userCard.style";

const UserCard = props => {
    return (
        <TouchableWithoutFeedback onPress={props.onClick}>
            <View style={styles.card_container}>
                <View >
                    <Text style={styles.title} >{props.customerFullName}</Text>
                    <View>
                        <Text style={styles.phoneNumber}>{"Telefon: "}{props.phoneNumber}</Text>
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}

export default UserCard;