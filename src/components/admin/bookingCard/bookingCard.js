import React from "react";
import { View, Image, Text, TouchableWithoutFeedback } from "react-native";
import styles from "./bookingCard.style";
import Ionicons from 'react-native-vector-icons/Ionicons';


const BookingCard = props => {

    const bookingDate = new Date(props.bookingDate).toLocaleDateString("tr-TR", { year: 'numeric', month: 'long', day: 'numeric' });
    return (
        <TouchableWithoutFeedback onPress={props.onClick}>
            <View style={styles.card_container}>

                <View style={styles.inner_container}>
                    <Text style={styles.title} >{props.customerFullName}</Text>
                    <View style={styles.content_container}>
                        <View style={styles.info_container}>
                            <Text style={styles.stylist}>{"Berber: "}{props.stylistName}</Text>
                            <Text>{"Tarih: "}{bookingDate}</Text>
                            <Text>{"Saat: "}{props.bookingHour}</Text>
                        </View>

                        {props.isDone ? (<View >
                            <Ionicons name={"checkmark-outline"} size={40} color={"green"} />
                        </View>) :
                            (<View>
                                <Ionicons name={"time-outline"} size={40} color={"orange"} />
                            </View>)
                        }
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}

export default BookingCard;