import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
    },
    card_container: {
        flexDirection: 'row',
        padding: 20,
        borderRadius: 10,
        backgroundColor: '#e8e8e8',
        marginHorizontal: 16,
        marginVertical: 8,
        height: Dimensions.get("screen").height / 4
    },
    card_info_container: {
        flexDirection: 'column',
        flex: 1,
        marginStart: 8,
        justifyContent: 'space-between',
    },
    price_button: {
        backgroundColor: '#2e6fb4',
        alignSelf: 'center',
    },
    user_name: {
        color: "black",
        fontSize: 25,
        fontWeight: "bold"

    },
    phone_container: {
        flexDirection: "row",
    },
    phone: {
        paddingTop: 3.5
    },
    created_date_container: {
        flexDirection: "row",
    },
    p_5: {
        padding: 5
    },
    button_group: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "flex-end",
        paddingBottom: Dimensions.get("screen").height / 7,
    }
});
