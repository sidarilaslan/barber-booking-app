import React from "react";
import { Image, View } from "react-native";
import { Center, Container, Heading, Text, Button, NativeBaseProvider } from "native-base";
import styles from "./intro.style";
const Intro = (props) => {
    const navigateToLogin = () => props.navigation.navigate("loginScreen");
    const navigateToRegister = () => props.navigation.navigate("registerScreen");


    return (
        <NativeBaseProvider>
            <Center>
                <Image source={require("../../assets/images/login-logo.png")} />
                <View>
                    <Button colorScheme="success" borderRadius={"2xl"} style={styles.button} onPress={navigateToLogin}>Login</Button>
                    <Button variant="outline" colorScheme="success" borderRadius={"2xl"} onPress={navigateToRegister}>
                        Register
                    </Button>
                </View>
            </Center>
        </NativeBaseProvider>
    )
}

export default Intro;