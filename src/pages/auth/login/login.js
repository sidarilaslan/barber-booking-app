import React, { useState, useEffect } from "react";
import { Image, View, } from "react-native";
import auth from '@react-native-firebase/auth';
import { Center, Button, Input, Stack, KeyboardAvoidingView, NativeBaseProvider } from "native-base";
import { Formik } from 'formik';

import styles from "./login.style";

const Login = (props) => {
    const [confirm, setConfirm] = useState(null);
    const handleLogin = (values) => {
        // console.log(values.code);
        if (!confirm)
            signInWithPhoneNumber(`+90 ${values.phoneNumber}`);
        else
            confirmCode(values.code);

    }



    const onAuthStateChanged = (user) => {
        if (user) {

        }
    }
    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber; // unsubscribe on unmount
    }, []);

    async function signInWithPhoneNumber(phoneNumber) {
        const confirmation = await auth().signInWithPhoneNumber(phoneNumber);

        setConfirm(confirmation);
    }

    const confirmCode = async (code) => {
        try {
            console.log(code);
            await confirm.confirm(code);
            console.log("success");
        } catch (error) {
            console.log('Invalid code.');
        }
    }



    return (
        <NativeBaseProvider>
            <Center>
                <Image source={require("../../../assets/images/login-logo.png")} />
                <Formik
                    initialValues={{
                        phoneNumber: "", code: ""
                    }}
                    onSubmit={handleLogin}>

                    {({ handleChange, handleSubmit, values }) => (
                        <Stack space={4} maxW="500px">

                            {confirm ? (<>
                                <Input variant="rounded" placeholder="Code" value={values.code} onChangeText={handleChange("code")} w={{
                                    base: "75%",
                                    md: "25%"
                                }} />
                                <Button colorScheme="success" borderRadius={"xl"} style={styles.button} onPress={handleSubmit}>Code check</Button>
                            </>) : (<>
                                <Input variant="rounded" placeholder="Phone Number" value={values.phoneNumber} onChangeText={handleChange("phoneNumber")} w={{
                                    base: "75%",
                                    md: "25%"
                                }} />
                                <Button colorScheme="success" borderRadius={"xl"} style={styles.button} onPress={handleSubmit}>Submit</Button>
                            </>)}


                        </Stack>
                    )}

                </Formik>
            </Center>
        </NativeBaseProvider>
    )
}

export default Login;