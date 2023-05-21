import React, { useEffect } from "react";
import { Image, } from "react-native";
import { Center, Button, Input, Stack, NativeBaseProvider } from "native-base";
import styles from "./register.style";
import { Formik } from "formik";
import { registerService } from "../../../services/auth";
import useApiRequest from "../../../hooks/useApiRequest";

import axios from "axios";

const Register = (props) => {


    const { sendRequest, responseData } = useApiRequest();
    const handleRegister = async (values) => {
        await sendRequest({
            baseURL: "http://10.0.2.2:5000/user",
            method: "post",
            data: values,
        });
    }

    useEffect(() => {
        if (responseData)
            console.log(responseData);
    }, [responseData]);
    return (
        <NativeBaseProvider>
            <Center>
                <Image source={require("../../../assets/images/login-logo.png")} />
                <Formik
                    initialValues={{
                        name: "", lastName: "", phoneNumber: ""
                    }}
                    onSubmit={handleRegister}>

                    {({ handleChange, handleSubmit, values }) => (<Stack space={4} maxW="500px">
                        <Input variant="rounded" placeholder="Name" value={values.name} onChangeText={handleChange("name")} w={{
                            base: "75%",
                            md: "25%"
                        }} />
                        <Input variant="rounded" placeholder="LastName" value={values.lastName} onChangeText={handleChange("lastName")} />
                        <Input variant="rounded" placeholder="Phone Number" keyboardType="number-pad" value={values.phoneNumber} onChangeText={handleChange("phoneNumber")} />
                        <Button colorScheme="success" borderRadius={"xl"} style={styles.button} onPress={handleSubmit}>Register</Button>
                    </Stack>
                    )}

                </Formik>
            </Center >
        </NativeBaseProvider>

    )
}

export default Register;