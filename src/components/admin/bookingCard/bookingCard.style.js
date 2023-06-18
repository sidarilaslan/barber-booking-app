import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
    card_container: {
        flexDirection: 'row',
        padding: 16,
        borderRadius: 10,
        backgroundColor: '#e8e8e8',
        marginHorizontal: 16,
        marginVertical: 8,
    },
    title: {
        fontWeight: "bold",
        fontSize: 20,
        color: "black"
    },
    info_container: {
        flex: 1
    },
    content_container: {
        flexDirection: "row",
    },
    stylist: {
        color: "black"
    },
    inner_container: {
        flex: 1,
        justifyContent: "center",
        padding: 10
    }
});