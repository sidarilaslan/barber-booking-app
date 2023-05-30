import React from "react";
import Lottie from "lottie-react-native";

export default Loading = () => {
    return (
        <Lottie source={require("../../assets/images/loading-cut.json")} autoPlay loop />
    );
}