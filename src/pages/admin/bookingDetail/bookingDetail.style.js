import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        padding: 10
    },
    p_5: {
        padding: 5
    },
    button_group: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-end",
        paddingBottom: Dimensions.get("screen").height / 7,
    },
    booking_detail_title: {
        fontSize: 24,
        color: 'black',
    },
});
